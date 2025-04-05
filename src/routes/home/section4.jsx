import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const videos = [
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/videoplayback.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Pixar+Lamp+Dude.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Galaxy+Brain+meme.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Send+this+to+all+your+friends.mp4"
]
const FourthSection = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  height: calc(88vh - 40px);

  @media (max-width: 1200px) {
    height: calc(100vh - 140px);
    width: 100%;
  }

  .video-container {
    flex-grow: 1;
    width: 100%;
    position: relative;
  }

  .video-swiper {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-wrapper {
    position: relative;
    width: calc(100% - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
  }

  video {
    width: 80%;
    aspect-ratio: 16/9;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100 !important;
    color: black;
    font-size: 24px;
  }

  // .swiper-button-prev {
  //   left: -30px;
  // }

  // .swiper-button-next {
  //   right: -30px; /* video 오른쪽에서 30px 떨어짐 */
  // }
`


function Section4() {
  const swiperRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!swiperRef.current || !swiperRef.current.autoplay) return

        if (entry.isIntersecting) {
          swiperRef.current.autoplay.start()
        } else {
          swiperRef.current.autoplay.stop()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <FourthSection>
      <div className="video-header">
        <h2>제목?</h2>
        <p>설명</p>
      </div>
      <div className="video-container" ref={containerRef}>
        <Swiper
          className='video-swiper'
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {videos.map((e, i) => (
            <SwiperSlide key={i} className="video-slider">
              <div className="video-wrapper">
                <video
                  src={e}
                  controls={true}
                  onPlay={() => {
                    swiperRef.current?.autoplay?.stop()
                  }}
                  onPause={() => {
                    swiperRef.current?.autoplay?.start()
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </FourthSection>
  )
}

export default Section4