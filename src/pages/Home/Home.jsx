import Aos from "aos";
import ReactHelmet from "../../components/reactHelmet";
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import { useEffect } from "react";
import Statistics from "./Statistics";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import PopularClasses from "./PopularClasses/PopularClasses";


const Home = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

      <ReactHelmet documentTitle="College Connect | Home" metaDescription="Home"></ReactHelmet>

      {/* Home Page Banner */}
      <HomeBanner></HomeBanner>

      {/* Home Carousel */}
      {/* <HomeCarousel></HomeCarousel> */}

      {/* Popular Classes */}
      {/* <PopularClasses></PopularClasses> */}
      
      {/* Popular Instructors */}
      {/* <PopularInstructors></PopularInstructors> */}

      {/* Statistics */}
      {/* <Statistics></Statistics> */}

      {/* Testimonial */}
      {/* <Testimonial></Testimonial> */}

      {/* Newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;