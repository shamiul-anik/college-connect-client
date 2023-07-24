import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Aos from "aos";
import CommonBanner from "../../components/CommonBanner";
import SectionTitle from '../../components/SectionTitle';
import AdmissionCard from "./AdmissionCard";
import ReactHelmet from "../../components/reactHelmet";
import useAuth from "../../hooks/useAuth";

const Admission = () => {

  const { loading, setLoading } = useAuth();

  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { data: allColleges = [] } = useQuery({
    queryKey: ["allColleges", search],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/colleges?search=${search}`);
      setLoading(false);
      console.log(res?.data);
      return res?.data;
    },
  });


  return (
    <div>

      <ReactHelmet documentTitle="College Connect | Admission" metaDescription="Admission"></ReactHelmet>

      {/* Colleges Page Banner */}
      <CommonBanner bannerHeading="Admission"></CommonBanner>
      
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        {/* Search */}
        <div className="flex gap-2 flex-col md:flex-row w-full mx-auto md:w-3/4 mb-6 md:mb-12">
          <label htmlFor="search" className="sr-only">Search by College Name</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input ref={searchRef} onChange={() => setSearch(searchRef.current.value)} type="text" id="search" name="search" className="block w-full px-2 py-4 pl-10 text-sm text-slate-800 border border-slate-300 rounded-lg bg-slate-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by College Name" />
          </div>
        </div>

        <SectionTitle heading="Admission" subHeading="Join the College Community – Apply Today!"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Number of Colleges: {allColleges?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            allColleges?.map((college) => <AdmissionCard key={college._id} college={college}></AdmissionCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Admission;