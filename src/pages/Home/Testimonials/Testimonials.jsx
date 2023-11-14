import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
      <SectionTitle heading="TESTIMONIALS" subheading="What Our Cliets Say" />
      <Swiper modules={[Navigation]} navigation={true}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-20 text-center">
              <Rating
                  style={{ maxWidth: 180 }}
                  className="w-fit mx-auto"
                value={review?.rating}
                readOnly
              />
              <FaQuoteLeft className="text-5xl w-fit mx-auto my-8" />
              <p className="text-[#444444] text-xl leading-8 mb-2">
                {review?.details}
              </p>
              <p className="text-[#CD9003] text-3xl font-medium">
                {review?.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
