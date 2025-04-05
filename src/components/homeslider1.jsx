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
      navigation={false}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide className='home-swiper-content swiper1'>Slide 1</SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper2'>Slide 2</SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper3'>Slide 3</SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper4'>Slide 4</SwiperSlide>
      
    </Swiper>
    <div className='scroll-info'>
      <div className='scroll-info-text'>S&nbsp;C&nbsp;R&nbsp;O&nbsp;L&nbsp;L</div>
      <div className='mouse-border'/>
      <div className='mouse-dot'/>
      <div class="chevron-down"/>
    </div>
    </>
  );
};

export default HomeSlider