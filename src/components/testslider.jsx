// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySwiper = () => {
  return (
    <Swiper
      style={{
        height: "300px"
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
  );
};

export default MySwiper;