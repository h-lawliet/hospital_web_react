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
      spaceBetween={0}
      slidesPerView={1}
      navigation={false}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide className='home-swiper-content swiper1'>
        <div className='opacity-cover-swiper'/>
        <p className='slogan'>전국 유일 모야모야 특화병원</p>
        <h2>홍지만 신경과</h2>
        <p className='swiper-text'>23년 경력 아주대학교 신경과 교수 출신 대표원장</p>
      </SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper2'>
        <div className='opacity-cover-swiper'/>
        <p className='slogan'>전국 유일 모야모야 특화병원</p>
        <h2>홍지만 신경과</h2>
        <p className='swiper-text'>최고사양 Siemens MAGNETOM Essenza 1.5T MRI</p>
      </SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper3'>
      <div className='opacity-cover-swiper'/>
        <p className='slogan'>전국 유일 모야모야 특화병원</p>
        <h2>홍지만 신경과</h2>
        <p className='swiper-text'>홍지만신경과는 오직 "뇌"만 생각합니다</p>
      </SwiperSlide>
      <SwiperSlide className='home-swiper-content swiper4'>
      <div className='opacity-cover-swiper'/>
        <p className='slogan'>전국 유일 모야모야 특화병원</p>
        <h2>홍지만 신경과</h2>
        <p className='swiper-text'>무슨 말 써야될지 잘 모르겠음</p>
      </SwiperSlide>
      
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