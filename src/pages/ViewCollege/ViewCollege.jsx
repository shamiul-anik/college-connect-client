// import UpdateToyImage from '../../assets/images/update-a-toy.png';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CommonBanner from '../../components/CommonBanner';
import ReactHelmet from '../../components/reactHelmet';
import { Rating } from "@smastrom/react-rating";


const ViewToy = () => {

  const loadedCollege = useLoaderData();
  const { _id, college_image, college_name, college_rating, admission_process, admission_date, research_number, featured, events_details, research_history, sports_details } = loadedCollege || {};
  // console.log(photo_url, toy_name);

  return (
    <div>

      <ReactHelmet documentTitle="College Connect | View College" metaDescription="Colleges"></ReactHelmet>

      {/* View College Page Banner */}
      <CommonBanner bannerHeading="View College"></CommonBanner>

      <div className='max-w-7xl mx-auto mt-8 mb-4 lg:mt-12 px-4'>
        <Link to="/colleges" className="relative flex w-56 items-center justify-center p-0.5 overflow-hidden text-md font-semibold text-teal-700 rounded-lg group bg-gradient-to-br from-teal-600 to-teal-500 group-hover:from-teal-600 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800">
          <span className="flex items-center justify-center w-full px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
            <FaArrowLeft className="mr-2 self-center" /> Back to Colleges
          </span>
        </Link>
      </div>

      <section className="flex flex-col md:flex-row gap-4 md:gap-16 items-center max-w-7xl mx-auto mt-4 lg:mt-8 p-4">
        {/* <div>
          <img className="w-full min-w-[350px] max-w-xl rounded-xl image-full" src={college_image} alt={`${college_name} Image`} />
        </div> */}

        <div className="flex card card-compact w-full bg-base-100 px-4 md:px-8 py-4 md:py-8 border-2 border-slate-200">
          <div>
            <img className="w-full h-48 md:h-[36rem] object-cover rounded-xl image-full" src={college_image} alt={`${college_name} Image`} />
          </div>

          <div className="!px-2 md:!px-0 !pt-2 md:!pt-4 card-body">
            
            <div className='divider my-0'></div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="CollegeName">
                <span className="label-text text-lg md:text-xl font-semibold">College Name</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{college_name}</p>
            </div>

            <div className='divider my-0'></div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="sellerEmail">
                <span className="label-text text-lg md:text-xl font-semibold">Admission Date</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{admission_date}</p>
            </div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="sellerName">
                <span className="label-text text-lg md:text-xl font-semibold">Admission Process</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{admission_process}</p>
            </div>

            <div className='divider my-0'></div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="researchNumber">
                <span className="label-text text-lg md:text-xl font-semibold">Number of Research</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{research_number}</p>
            </div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="researchHistory">
                <span className="label-text text-lg md:text-xl font-semibold">Research History</span>
              </label>
              <p className='text-lg text-slate-500 mb-2'>{research_history}</p>
            </div>

            <div className='divider my-0'></div>

            {/* <div className="grid gap-x-4 gap-y-2 md:grid-cols-2"> */}
            <div className="form-control">
              <label className="label pl-0" htmlFor="featured">
                <span className="label-text text-lg md:text-xl font-semibold">Events</span>
              </label>
              <ul className="list-disc">
                {events_details.map((detail, index) => <li className="ml-5 text-lg text-slate-500" key={index}> <span className="font-semibold">{detail?.eventName}</span> : {detail?.description}</li>)}
              </ul>
            </div>

            <div className='divider my-0'></div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="rating">
                <span className="label-text text-lg md:text-xl font-semibold">Sports</span>
              </label>
              <ul className="list-disc">
                {sports_details.map((detail, index) => <li className="ml-5 text-lg text-slate-500" key={index}> <span className="font-semibold">{detail?.sportName}</span> : {detail?.facilities}</li>)}
              </ul>
            </div>
            {/* </div> */}

            <div className='divider my-0'></div>

            <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
              <div className="form-control">
                <label className="label pl-0" htmlFor="rating">
                  <span className="label-text text-lg md:text-xl font-semibold">Rating</span>
                </label>
                <p className='flex items-center gap-2 text-lg text-slate-500 mb-2'><Rating style={{ maxWidth: 110 }} value={college_rating} readOnly /> {college_rating}</p>
              </div>
              <div className="form-control">
                <label className="label pl-0" htmlFor="featured">
                  <span className="label-text text-lg md:text-xl font-semibold">Featured College</span>
                </label>
                <p className='text-lg text-slate-500 mb-2'>{featured ? "Yes" : "No"}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewToy;