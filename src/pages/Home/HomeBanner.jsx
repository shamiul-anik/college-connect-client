import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import College from '../../assets/lottie/college.json';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Rotate } from "react-awesome-reveal";

const HomeBanner = () => {
  
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-xl p-4" data-aos="fade-left">
          <header className="banner-title !text-teal-100">
            <Fade cascade triggerOnce={true}>
              <h1 className="font-medium !text-slate-50">Welcome to</h1>
            </Fade>
            <Fade duration={300} triggerOnce={true} cascade>College Connect</Fade>
          </header>
          <p className="banner-description mt-4 mb-8 lg:mb-12">Discover Your Academic Journey- Where Aspirations Find Their Path to Success!</p>
          <Link to="/">
            <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white w-48 bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-offset-1 ring-teal-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-xl px-5 py-4 text-center">Explore <FaArrowRight /></button>
          </Link>
        </div>
        <div className="p-2" data-aos="zoom-in">
          <Rotate triggerOnce={true}>
            <Lottie className="max-w-xl mx-auto w-full bg-slate-50 rounded-2xl" animationData={College} loop={true} />
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;