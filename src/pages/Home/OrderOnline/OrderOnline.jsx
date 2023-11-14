import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OrderOnline = () => {
  return (
    <section className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
      <SectionTitle
        heading="ORDER ONLINE"
        subheading="From 11:00am to 10:00pm"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-lg md:text-3xl text-white uppercase absolute left-1/2 bottom-6 transform -translate-x-1/2">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-lg md:text-3xl text-white uppercase absolute left-1/2 bottom-6 transform -translate-x-1/2">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-lg md:text-3xl text-white uppercase absolute left-1/2 bottom-6 transform -translate-x-1/2">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-lg md:text-3xl text-white uppercase absolute left-1/2 bottom-6 transform -translate-x-1/2">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-lg md:text-3xl text-white uppercase absolute left-1/2 bottom-6 transform -translate-x-1/2">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default OrderOnline;
