import { GrTrash } from 'react-icons/gr';
import { MdOutlinePayments } from 'react-icons/md';

const MySelectedClass = ({ mySelectedClass, index, handleDeleteBooking, handlePayment }) => {

  const { class_name, class_image, instructor_name, instructor_email, available_seats, enrolled_students, class_price, payment_status } = mySelectedClass || {};

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
        {index + 1}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        <div className="avatar flex items-center justify-center ">
          <div className="w-24 rounded-xl">
            <img src={class_image} alt={`Image of ${class_name} class`} />
          </div>
        </div>
      </td>
      <td className="px-2 py-2 border-r-2">
        {class_name}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {instructor_name}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {instructor_email}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {available_seats}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {enrolled_students}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        ${class_price}
      </td>
      <td className="px-2 py-2 text-center uppercase border-r-2">
        {payment_status}
      </td>
      <td className="px-2 py-2 text-center">
        <button onClick={() => handlePayment(mySelectedClass)} type="button" className="flex w-24 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
          <MdOutlinePayments className='gr-icon w-4 h-4 mr-2' />
          Pay
        </button>
        <button onClick={() => handleDeleteBooking(mySelectedClass._id)} type="button" className="flex w-24 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
          <GrTrash className='gr-icon w-4 h-4 mr-2' />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MySelectedClass;