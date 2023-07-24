import { useEffect } from "react";
import Aos from "aos";
import ReactHelmet from "../../components/reactHelmet";
import HomeBanner from './HomeBanner';
import SearchColleges from "./SearchColleges/SearchColleges";
import FeaturedColleges from "./FeaturedColleges/FeaturedColleges";
import HomeCarousel from './HomeCarousel/HomeCarousel';
// import Statistics from "./Statistics";
import Testimonial from "./Testimonial/Testimonial";
import Newsletter from "./Newsletter";


const Home = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

      <ReactHelmet documentTitle="College Connect | Home" metaDescription="Home"></ReactHelmet>

      {/* Home Page Banner */}
      <HomeBanner></HomeBanner>

      {/* Search Colleges */}
      <SearchColleges></SearchColleges>

      {/* Featured Colleges */}
      <FeaturedColleges></FeaturedColleges>

      {/* Home Carousel */}
      <HomeCarousel></HomeCarousel>
      
      {/* Statistics */}
      {/* <Statistics></Statistics> */}

      {/* Testimonial */}
      <Testimonial></Testimonial>

      {/* Newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;