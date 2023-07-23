import { Link } from "react-router-dom";
import { GrUserAdmin } from 'react-icons/gr';
import { FaChalkboardTeacher } from "react-icons/fa";

const SingleUser = ({ user, index, handleMakeInstructor, handleMakeAdmin }) => {
  
  const { photo_url, name, email, role } = user || {};

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
        {index + 1}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        <div className="avatar flex items-center justify-center">
          <div className="w-24 rounded-xl">
            <img src={photo_url} alt={`Profile of ${name}`} />
          </div>
        </div>
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {name}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {email}
      </td>
      <td className="px-2 py-2 text-center uppercase border-r-2">
        {role}
      </td>
      <td className="px-2 py-2 text-center">
        <Link onClick={() => handleMakeInstructor(user)}>
          <button type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={role === "instructor"}>
            <FaChalkboardTeacher className='w-4 h-4 mr-2' />
            Make Instructor
          </button>
        </Link>
        <Link onClick={() => handleMakeAdmin(user)}>
          <button type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={role === "admin"}>
            <GrUserAdmin className='gr-icon w-4 h-4 mr-2' />
            Make Admin
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleUser;