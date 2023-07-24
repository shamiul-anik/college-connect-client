import axios from 'axios';
import { useRef, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import SearchCollegeCard from './SearchCollegeCard';
import useAuth from '../../../hooks/useAuth';

const SearchColleges = () => {

  const { loading, setLoading } = useAuth();

  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  const { data: searchColleges = [] } = useQuery({
    queryKey: ["searchColleges", search],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/colleges?search=${search}`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Search Colleges" subHeading="Find Your Perfect College"></SectionTitle>

      {/* Search */}
      <div className="flex gap-2 flex-col md:flex-row w-full mx-auto md:w-3/4">
        <label htmlFor="search" className="sr-only">Search by Toy Name</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input ref={searchRef} onChange={() => setSearch(searchRef.current.value)} type="text" id="search" name="search" className="block w-full px-2 py-4 pl-10 text-sm text-slate-800 border border-slate-300 rounded-lg bg-slate-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by College Name" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
        {
          searchColleges?.map((searchCollege) => <SearchCollegeCard key={searchCollege._id} searchCollege={searchCollege}></SearchCollegeCard>)
        }
      </div>
    </section>
  );
};

export default SearchColleges;