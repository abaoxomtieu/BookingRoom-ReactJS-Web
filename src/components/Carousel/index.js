import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "../../App.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CarouselItem = () => {
  return <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        // navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={20}
        style={{marginBottom:'20px'}}
      >
        <SwiperSlide>
          <img
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
            src="https://th.bing.com/th/id/OIP.lzxTmkT_jAMrNnvuscBiEgHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
            src="https://th.bing.com/th/id/R.c2a5e483506986aeb58cc7d68bcc01f9?rik=vDhmidSY3N17bQ&pid=ImgRaw&r=0"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
            src="https://th.bing.com/th/id/OIP.9FHY0TYBcLGqfxfNdawTyAHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
            src="https://th.bing.com/th/id/OIP.oAF3klC47I1T15ywaztHCAHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
  </>;
};

export default CarouselItem;
