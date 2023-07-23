import { useQuery } from "@tanstack/react-query";
import SingleUser from "./SingleUser";
import Swal from "sweetalert2";
import { useTitle } from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const ManageUsers = () => {

  useTitle("Manage Users");

  const { user, setUserRole, loading, setLoading } = useAuth();
  // const [disableInstructorBtn, setDisableInstructorBtn] = useState(false);
  // const [disableAdminBtn, setDisableAdminBtn] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  // TODO: Change to AxiosSecure
  const { data: usersData = [], refetch } = useQuery({
    queryKey: ["usersData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      // const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      const res = await axiosSecure.get(`/admin/manage-users`);
      // console.log(res);
      setLoading(false);
      return res?.data;
    },
  })

  const handleMakeInstructor = (userInfo) => {
    console.log("Inside Make Instructor: ", user._id);
    if (userInfo) {
      axiosSecure.patch(`/admin/make-instructor/${userInfo._id}`).then(
        (data) => {
          // console.log("Data:", data?.data);
          if (data?.data.modifiedCount) {
            if (user?.email === userInfo.email) {
              setUserRole("instructor");
            }
            refetch();
            // setDisableInstructorBtn(true);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${userInfo.name} is an Instructor Now!`,
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      );
    }
  };
  
  const handleMakeAdmin = (userInfo) => {
    console.log("Inside Make Admin: ", user._id);
    if (userInfo) {
      axiosSecure.patch(`/admin/make-admin/${userInfo._id}`).then(
        (data) => {
          // console.log("Data:", data?.data);
          if(data?.data.modifiedCount) {
            if (user?.email === userInfo.email) {
              setUserRole("admin");
            }
            refetch();
            // setDisableAdminBtn(true);
            // toast.success(`${user.name} is an Admin now!`);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${userInfo.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      );
    }
  };

  return (
    <section className="max-w-full mx-auto mt-4 lg:mt-8 p-4 md:px-0">
      
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">Total Users: {usersData.length}</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                #
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Photo
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Email
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Role
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              usersData?.map((user, index) => <SingleUser key={user._id} user={user} index={index} handleMakeInstructor={handleMakeInstructor} handleMakeAdmin={handleMakeAdmin}></SingleUser>)
            }
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default ManageUsers;