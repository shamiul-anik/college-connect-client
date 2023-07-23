import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeCarousel.css";
import CarouselImage1 from '../../../assets/images/carousel/cropped/image1.jpg';
import CarouselImage2 from '../../../assets/images/carousel/cropped/image2.jpg';
import CarouselImage3 from '../../../assets/images/carousel/cropped/image3.jpg';
import CarouselImage4 from '../../../assets/images/carousel/cropped/image4.jpg';
import SectionTitle from '../../../components/SectionTitle';

const HomeCarousel = () => {
  return (
    // <section>
    <section className="mt-12 lg:mt-24 p-4 md:px-0">
      <SectionTitle heading="Gallery" subHeading="Capturing Unforgettable Moments of College Graduates"></SectionTitle>
      {/* <SectionTitle heading="College Graduate Memories" subHeading="Capturing Unforgettable Moments of College Graduates"></SectionTitle> */}

      <Carousel animationHandler="fade" infiniteLoop="true">
        <div>
          <img src={CarouselImage1} alt="Carousel Image" />
          <p className="legend">
            "A Bond That Lasts a Lifetime: College Graduates Celebrating Their Journey Together."
          </p>
        </div>
        <div>
          <img src={CarouselImage2} alt="Carousel Image" />
          <p className="legend">
            "Friends Forever: College Days Filled with Laughter, Memories, and Dreams."
          </p>
        </div>
        <div>
          <img src={CarouselImage3} alt="Carousel Image" />
          <p className="legend">
            "Embracing Success: College Graduates Proudly Posing for the Future."
          </p>
        </div>
        <div>
          <img src={CarouselImage4} alt="Carousel Image" />
          <p className="legend">
            "Achieving Milestones Together: College Graduates Rejoicing in Their Accomplishments."
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeCarousel;