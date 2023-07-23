import LazyLoad from 'react-lazy-load';
// import { FaMoneyBillAlt } from 'react-icons/fa';
// import { Rating } from '@smastrom/react-rating';
import SectionTitle from '../../../components/SectionTitle';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PopularInstructorsCard from './PopularInstructorsCard';

const PopularInstructors = () => {

  const { user, setUserRole, loading, setLoading } = useContext(AuthContext);

  const { data: popularInstructors = [], refetch } = useQuery({
    queryKey: ["popularInstructors", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/popular-instructors`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Popular Instructors" subHeading="Meet Our Exceptional Language Instructors"></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
        {
          popularInstructors?.map((popularInstructor) => <PopularInstructorsCard key={popularInstructor._id} popularInstructor={popularInstructor}></PopularInstructorsCard>)
        }
      </div>
    </section>
  );
};

export default PopularInstructors;