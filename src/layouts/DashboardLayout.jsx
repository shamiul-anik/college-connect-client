import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar/Sidebar";
import { useTitle } from "../hooks/useTitle";

const DashboardLayout = () => {

  useTitle("Dashboard");

  return (
    <div className='relative min-h-screen md:flex'>
      <Sidebar />
      <div className='flex-1 md:ml-72'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;