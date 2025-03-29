// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./homeslider.css";

const HomeSlider = () => {
  return (
    <>
    <Swiper
      className='home-swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua"
      }}
      >Slide 1</SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aqua"
        }}
      >Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
    <div className='scroll-info'>
      <span className='scroll-info-text'>SCROLL</span>
    </div>
    </>
  );
};

export default HomeSlider