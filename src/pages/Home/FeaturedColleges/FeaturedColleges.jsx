import SectionTitle from '../../../components/SectionTitle';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import FeaturedCollegeCard from './FeaturedCollegeCard';
import useAuth from '../../../hooks/useAuth';

const FeaturedColleges = () => {

  const { loading, setLoading } = useAuth();

  const { data: featuredColleges = [] } = useQuery({
    queryKey: ["featuredColleges"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/featured-colleges`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Featured Colleges" subHeading="Explore Our Featured Colleges"></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
        {
          featuredColleges?.map((featuredCollege) => <FeaturedCollegeCard key={featuredCollege._id} featuredCollege={featuredCollege}></FeaturedCollegeCard>)
        }
      </div>
    </section>
  );
};

export default FeaturedColleges;