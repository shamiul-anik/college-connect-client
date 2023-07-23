import { GrTrash } from 'react-icons/gr';
import { MdOutlinePayments } from 'react-icons/md';

const MyEnrolledClass = ({ myEnrolledClass, index }) => {

  const { class_name, class_image, instructor_name, instructor_email, available_seats, enrolled_students, class_price, payment_status } = myEnrolledClass || {};

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
      {/* <td className="px-2 py-2 text-center border-r-2">
        {available_seats}
      </td>
      <td className="px-2 py-2 text-center border-r-2">
        {enrolled_students}
      </td> */}
      <td className="px-2 py-2 text-center border-r-2">
        ${class_price}
      </td>
      <td className="px-2 py-2 text-center uppercase border-r-2">
        {payment_status}
      </td>
    </tr>
  );
};

export default MyEnrolledClass;