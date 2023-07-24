import { GiOpenBook, GiTeacher } from "react-icons/gi";
import { FaDollarSign, FaInfo, FaUserAlt } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import SectionTitle from "../../components/SectionTitle";
import { BiBookContent } from "react-icons/bi";
import { Link } from "react-router-dom";

const RecommendedResearchPapers = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Recommended Research Papers" subHeading="Explore the Latest Insights and Discoveries"></SectionTitle>

      <div className="max-w-[240px] md:max-w-6xl grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 mt-8 mx-auto">

        <div className="card px-4 py-6 card-compact w-full bg-base-100 custom-box-shadow justify-center" data-aos="flip-left">
          <div className='px-2 pb-2 flex justify-center'>
            <FaDollarSign className='h-24 w-24 p-4 border-2 border-slate-200 rounded-xl text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-full">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">Harvard University</h2>
            <div className="flex gap-2 mt-2"><span className="font-semibold">Title:</span> <Link target="_blank" to="https://scholar.harvard.edu/files/danielgilbert/files/if-money-doesnt-make-you-happy.nov-12-20101.pdf" className="card-title justify-center text-base text-blue-500 hover:underline hover:underline-offset-2 font-medium">If Money Doesn't Make You Happy Then You Probably Aren't Spending It Right</Link></div>
          </div>
        </div>
        
        <div className="card px-4 py-6 card-compact w-full bg-base-100 custom-box-shadow justify-center" data-aos="flip-left">
          <div className='px-2 pb-2 flex justify-center'>
            <FaInfo className='h-24 w-24 p-4 border-2 border-slate-200 rounded-xl text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-full">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">Stanford University</h2>
            <div className="flex gap-2 mt-2"><span className="font-semibold">Title:</span> <Link target="_blank" to="https://web.stanford.edu/~chadj/IdeaPF.pdf" className="card-title justify-center text-base text-blue-500 hover:underline hover:underline-offset-2 font-medium">Are Ideas Getting Harder to Find?</Link></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default RecommendedResearchPapers;