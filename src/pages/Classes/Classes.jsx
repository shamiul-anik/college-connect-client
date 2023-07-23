import CommonBanner from "../../components/CommonBanner";
import SectionTitle from '../../components/SectionTitle';
import { useTitle } from "../../hooks/useTitle";
import { useContext, useEffect } from "react";
import Aos from "aos";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "./ClassCard";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {

  useTitle("Classes");

  const { user, userRole, setUserRole, loading, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  const { data: allApprovedClasses = [], refetch } = useQuery({
    queryKey: ["allApprovedClasses", user?.email, userRole],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes/approved`);
      setLoading(false);
      // console.log(res?.data);
      return res?.data;
    },
  });

  const handleSelectClass = (classInfo) => {
    console.log(classInfo);
    if (user && user?.email) {
      console.log("Logged in!");

      const bookingDetails = {
        student_name: user.displayName,
        student_email: user.email,
        student_image: user.photoURL,
        class_id: classInfo._id,
        class_name: classInfo.class_name,
        class_image: classInfo.class_image,
        instructor_name: classInfo.instructor_name,
        instructor_email: classInfo.instructor_email,
        available_seats: parseFloat(classInfo.available_seats),
        enrolled_students: parseFloat(classInfo.enrolled_students),
        class_price: parseFloat(classInfo.class_price),
        payment_status: "unpaid"
      }
      console.log(bookingDetails);
      if (user && user.email) {
        axios.post(`${import.meta.env.VITE_API_URL}/book-a-class`, bookingDetails)
          .then((data) => {
            console.log(data.data);
            if (data?.data?.insertedId) {
              // reset();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Class booked successfully!',
                showConfirmButton: true,
                timer: 3000
              })
            }
            else {
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `${data?.data?.message}`,
                showConfirmButton: true,
                timer: 3000
              })
            }
          });
      }
    }
    else {
      Swal.fire({
        title: 'You must login to select the course!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div>
      {/* Classes Page Banner */}
      <CommonBanner bannerHeading="Classes"></CommonBanner>
      
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Classes" subHeading="Explore Our Highly Regarded Language Programs"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Approved Classes: {allApprovedClasses?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            allApprovedClasses?.map((classData) => <ClassCard key={classData._id} userRole={userRole} classData={classData} handleSelectClass={handleSelectClass}></ClassCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Classes;