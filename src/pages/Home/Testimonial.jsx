import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testomonial.css';


const Testimonial = () => {

  const { loading, setLoading } = useAuth();

  const { data: allReviews = []} = useQuery({
    queryKey: ["allReviews"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
      setLoading(false);
      // console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <div>
      <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0" data-aos="flip-right">

        <SectionTitle heading="Testimonials" subHeading="Check out what our students says about us."></SectionTitle>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            allReviews.map((review) => <SwiperSlide key={review._id}>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <blockquote className="mx-8 flex justify-center items-center flex-col gap-4 mt-6">
                <BiSolidQuoteLeft className="text-6xl text-slate-500" />
                <p>{review.details}</p>
                <img className="h-40 w-40 rounded-full ring-2 ring-offset-2 ring-teal-500 object-cover" src={review.image} alt={review.name} />
                <p className="text-2xl font-bold text-teal-700">{review.name}</p>
              </blockquote>
            </SwiperSlide>
            )
          }
          
          
        </Swiper>
        {/* <div className="mt-4 md:mt-8 grid mb-8 border-2 border-slate-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase">Awesome!</h3>
              <p className="my-4">"Language School has been a game-changer for me. I enrolled in their Spanish course with zero knowledge of the language, and now I can confidently hold conversations with native speakers. The instructors are incredibly patient and supportive, creating a comfortable and encouraging learning environment. I highly recommend Language School to anyone looking to learn a new language.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-20 h-20" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">Spanish Course Student</div>
                  <Rating style={{ maxWidth: 90 }} value="5" readOnly />
                </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-slate-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase">High Quality!</h3>
              <p className="my-4">"I can't speak highly enough about Language School. The German course I took exceeded my expectations. The curriculum was well-structured, and the instructors made the learning process enjoyable and interactive. The small class size allowed for personalized attention, and the cultural activities added an extra dimension to the learning experience. Language School truly goes above and beyond to ensure student success."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-20 h-20" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">German Course Student</div>
                  <Rating style={{ maxWidth: 90 }} value="5" readOnly />
                </div>
            </figcaption>
          </figure>
        </div> */}
      </section>
    </div>
  );
};

export default Testimonial;