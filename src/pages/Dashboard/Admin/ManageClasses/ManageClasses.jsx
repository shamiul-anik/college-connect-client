import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import SingleClass from "./SingleClass";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useTitle } from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ManageClasses = () => {
  
  useTitle("Manage Classes");

  const { user, loading, setLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  
  // Feedback Modal Open/Close State
  const [isOpen, setIsOpen] = useState(false);

  // Setting Class ID for Feedback
  const [feedbackID, setFeedbackID] = useState("");

  // Opening Feedback Modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Closing Feedback Modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // TODO: Change to AxiosSecure
  const { data: allClassData = [], refetch } = useQuery({
    queryKey: ["allClassData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      // const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
      const res = await axiosSecure.get(`/admin/manage-classes`);
      setLoading(false);
      // console.log(res?.data);
      return res?.data;
    },
  });

  const handleApprove = (classData) => {
    console.log("Inside Approve: ", classData._id);
    if (classData) {
      axiosSecure.patch(`/admin/approve-class/${classData._id}`).then(
        (data) => {
          console.log("Approve Status:", data?.data);
          if (data?.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${classData.class_name} is approved!`,
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      );
    }
  };
  
  const handleDeny = (classData) => {
    console.log("Inside Deny: ", classData._id);
    if (classData) {
      axiosSecure.patch(`/admin/deny-class/${classData._id}`).then(
        (data) => {
          console.log("Deny Status:", data?.data);
          if (data?.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${classData.class_name} is denied!`,
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      );
    }
  };

  const handleFeedback = (classData) => {
    openModal();
    // console.log("Feedback ID: ", classData._id);
    setFeedbackID(classData._id);
  };
  
  return (
    <>
      <section className="max-w-full mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Total Classes: {allClassData?.length}</h1>
        </div>

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class <br/> Image
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class <br/> Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor <br/> Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Instructor <br/> Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Available <br/> Seats
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Enrolled <br/> Students
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Price
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Status
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Feedback
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allClassData?.map((classData, index) => <SingleClass key={classData._id} classData={classData} index={index} handleApprove={handleApprove} handleDeny={handleDeny} handleFeedback={handleFeedback} openModal={openModal} closeModal={closeModal} ></SingleClass>)
              }
            </tbody>
          </table>
        </div>

      </section>

      {/* FeedbackModal */}
      <FeedbackModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} feedbackID={feedbackID}></FeedbackModal>
    </>
  );
};

export default ManageClasses;