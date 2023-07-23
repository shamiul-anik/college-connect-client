import SectionTitle from '../../../components/SectionTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {

  const { user, setUserRole, loading, setLoading } = useContext(AuthContext);

  const { data: popularClasses = [], refetch } = useQuery({
    queryKey: ["popularClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/popular-classes`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Popular Classes" subHeading="Explore Our Highly Regarded Language Programs"></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
        {
          popularClasses?.map((popularClass) => <PopularClassCard key={popularClass._id} popularClass={popularClass}></PopularClassCard>)
        }
      </div>
    </section>
  );
};

export default PopularClasses;