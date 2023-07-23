import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeCarousel.css";
import CarouselImage1 from '../../../assets/images/carousel/tinified/image1.jpg';
import CarouselImage2 from '../../../assets/images/carousel/tinified/image2.jpg';
import CarouselImage3 from '../../../assets/images/carousel/tinified/image3.jpg';
import CarouselImage4 from '../../../assets/images/carousel/tinified/image4.jpg';
import SectionTitle from '../../../components/SectionTitle';

const HomeCarousel = () => {
  return (
    // <section>
    <section className="mt-12 lg:mt-24 p-4 md:px-0">
      <SectionTitle heading="Unlock the Power of Languages" subHeading="Expand Your Horizons and Embrace Multilingual Proficiency"></SectionTitle>

      <Carousel animationHandler="fade" infiniteLoop="true">
        <div>
          <img src={CarouselImage1} alt="Carousel Image" />
          <p className="legend">
            To have another language is to possess a second soul.
          </p>
        </div>
        <div>
          <img src={CarouselImage2} alt="Carousel Image" />
          <p className="legend">
            Teaching Turning Today’s Learners Into Tomorrow’s Leaders
          </p>
        </div>
        <div>
          <img src={CarouselImage3} alt="Carousel Image" />
          <p className="legend">
            LANGUAGE SCHOOL <br/>
            Every student matters, every moment counts.
          </p>
        </div>
        <div>
          <img src={CarouselImage4} alt="Carousel Image" />
          <p className="legend">
            Putting Children First. <br/>
            Preparing Children For Success In Life
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeCarousel;