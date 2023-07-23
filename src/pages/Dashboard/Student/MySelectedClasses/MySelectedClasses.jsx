import { useTitle } from '../../../../hooks/useTitle';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import MySelectedClass from './MySelectedClass';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const MySelectedClasses = () => {

  useTitle("My Selected Classes");

  const { user, userRole, setUserRole, loading, setLoading } = useAuth();


  // TODO: Change to AxiosSecure
  const { data: mySelectedClasses = [], refetch } = useQuery({
    queryKey: ["mySelectedClasses", user?.email, userRole],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-selected-classes/${user?.email}`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  const handleDeleteBooking = (id) => {
    console.log("Delete booking ID:", id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        if (id) {
          axios.delete(`${import.meta.env.VITE_API_URL}/delete-booking/${id}`).then(
            (data) => {
              console.log("Delete Status:", data?.data);
              if (data?.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `Booking successfully deleted!`,
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            }
          );
        }
      }
    })
  };

  const handlePayment = (bookingData) => {
    // console.log("Inside Payment: ", bookingData._id);
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Make Payment'
    }).then((result) => {
      if (result.isConfirmed) {
        if (bookingData) {
          axios.patch(`${import.meta.env.VITE_API_URL}/make-payment/${bookingData._id}?classId=${bookingData.class_id}`).then(
            (data) => {
              console.log("Payment Status:", data?.data);
              if (data?.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `Payment successful!`,
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            }
          );
        }
      }
    })

  };

  return (
    <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

      <div>
        <h1 className="text-3xl font-bold text-center mb-6">Total Selected Classes: {mySelectedClasses?.length}</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                #
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Class <br /> Image
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Class <br /> Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Instructor <br /> Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Instructor <br /> Email
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Available <br /> Seats
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Enrolled <br /> Students
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Price
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Payment <br /> Status
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              mySelectedClasses?.map((mySelectedClass, index) => <MySelectedClass key={mySelectedClass._id} handlePayment={handlePayment} handleDeleteBooking={handleDeleteBooking} mySelectedClass={mySelectedClass} index={index}></MySelectedClass>)
            }
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default MySelectedClasses;