import { BsFillSendFill } from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20" data-aos="zoom-in">
      
      <SectionTitle heading="Newsletter" subHeading="Stay in the loop by subscribing to our Newsletter!"></SectionTitle>

      <div className="mx-4 p-6 lg:p-12 rounded-lg border-2 shadow-lg border-teal-400 mt-6">
        <p className='content-description text-center'>Are you eager to stay informed about the latest updates, exclusive offers, and exciting opportunities from College Connect? Don't miss out on the chance to embark on an exceptional college journey with us!</p>
        <p className='content-description text-center mt-2'>Joining our newsletter is quick and easy! Simply enter your email address below and click 'Subscribe.' You'll immediately start receiving the latest updates, valuable resources, and exciting opportunities tailored to your college journey.</p>
        <p className='content-description text-center mt-2'>At College Connect, we believe in empowering students with the knowledge and tools to make the most of their college years. Don't miss out on this opportunity to stay connected, inspired, and informed.</p>
        <p className='content-description text-center mt-2 mb-6'>Subscribe today and unlock the potential of your college adventure with College Connect!</p>
        <div className="relative mt-6 mb-3 md:mb-7 max-w-xl mx-auto">
          <input type="text" placeholder="Enter your email address" className="input input-bordered input-accent focus:border-teal-500 focus:ring-teal-500 outline:border-teal-500 w-full pr-16" />
          <button className="btn absolute btn-accent top-0 right-0 rounded-l-none">
            <BsFillSendFill className='text-lg md:text-xl font-bold' />
            <span className='hidden md:block ml-1'>Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;