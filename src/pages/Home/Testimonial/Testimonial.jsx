import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

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
          autoplay={{ delay: 2500, disableOnInteraction: false, }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            allReviews?.map((review) => <SwiperSlide key={review._id}>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <blockquote className="text-base md:text-lg mx-8 flex justify-center items-center flex-col gap-4 mt-6">
                <BiSolidQuoteLeft className="text-6xl text-slate-500" />
                <p>{review.details}</p>
                <img className="h-20 md:h-40 w-20 md:w-40 rounded-full ring-2 ring-offset-2 ring-teal-500 object-cover" src={review.image} alt={review.name} />
                <p className="text-xl md:text-2xl font-bold text-teal-700">{review.name}</p>
              </blockquote>
            </SwiperSlide>
            )
          }
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;