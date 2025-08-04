import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useLocation } from 'react-router-dom';

/*  16 : 9(1920 × 1080) 고정 비율 영상 목록 */
const videos = [
  {
    id: 1,
    thumb: '/images/thumb2.png',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%B3%91%EC%9B%90%EC%86%8C%EA%B0%9C%EC%98%81%EC%83%81+(1440p).mp4',
  },
  {
    id: 2,
    thumb: '/images/thumb1.png',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/%ED%99%8D%EC%A7%80%EB%A7%8C%EC%84%A0%EC%83%9D%EB%8B%98_%EC%9D%B8%ED%84%B0%EB%B7%B0_0418+(1080p).mp4',
  },
  {
    id: 3,
    thumb: '/images/thumb3.png',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EA%B8%B0%EC%98%81%EC%83%81%EB%93%A4_%EB%A3%A8%ED%95%91_ver._2+(1080p).mp4',
  },
  {
    id: 4,
    thumb: '/images/thumb4.png',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%8C%80%ED%91%9C%EC%A6%9D%EC%83%81+(1440p).mp4',
  },
  {
    id: 5,
    thumb: '/images/thumb5.png',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%AC%B4%EC%97%87%EC%9D%B4%EB%93%A0%EB%AC%BC%EC%96%B4%EB%B3%B4%EC%84%B8%EC%9A%94+(1080p).mp4',
  }
];

const Section4 = () => {
  const swiperRef = useRef(null);
  const [playing, setPlaying] = useState(null);
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    /* ① 진입 전 상태 초기화 */
    el.classList.remove('visible');          // opacity:0 으로 되돌림
    swiperRef.current?.autoplay.stop();      // 슬라이더 자동 재생도 잠시 중단

    /* ② Observer 생성 */
    const observer = new IntersectionObserver(
      ([entry]) => {
        const onScreen = entry.isIntersecting && entry.intersectionRatio >= 0.3;

        if (onScreen) {
          el.classList.add('visible');               // fade-in
          if (playing === null) {                    // 비디오가 재생 중이 아닐 때만
            swiperRef.current?.autoplay.start();     // 자동 재생 재개
          }
        } else {
          swiperRef.current?.autoplay.stop();        // 화면에서 벗어나면 중단
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    /* ③ cleanup */
    return () => {
      observer.disconnect();
    };
  }, [location]);   // location 변화마다 재실행
  

  /* 썸네일 클릭 → 해당 슬라이드로 이동하고 재생 준비 */
  const handleThumb = (idx) => {
    setPlaying(idx);
    swiperRef.current?.slideToLoop(idx);
  };

  /* 슬라이드 전환 시 모든 비디오 정지, autoplay 재개 */
  const handleSlideChange = (sw) => {
    document.querySelectorAll('.swiper-slide video').forEach((v) => v.pause());
    if (sw.realIndex !== playing) {
      setPlaying(null);
      sw.autoplay.start();   // 재생 중이 아닐 때만 재개
    }
  };

  /* 개별 비디오 컴포넌트 (16:9 비율 가정) */
  const VideoBox = ({ src }) => {
    const ref = useRef(null);

    /* 비디오 로드 완료 후 자동 재생 */
    useEffect(() => {
      const v = ref.current;
      if (!v) return;

      const onReady = () => {
        v.play().catch(() => {});
        swiperRef.current?.autoplay.stop();
        v.removeEventListener('loadedmetadata', onReady);
      };
      v.addEventListener('loadedmetadata', onReady);
      v.load();

      return () => {
        v.pause();
        v.removeEventListener('loadedmetadata', onReady);
      };
    }, [src]);

    /* 종료 후 autoplay 재개 */
    const onEnded = () => {
      swiperRef.current?.autoplay.start();
      setPlaying(null);
    };

    return <Video ref={ref} src={src} playsInline controls onEnded={onEnded} />;
  };

  /* 슬라이드 렌더 */
  const renderSlide = (v, i) => (
    <SwiperSlide key={v.id} virtualIndex={i}>
      <SlideBox>
        <PrevArrow />
        <NextArrow />
        {playing === i ? (
          <VideoBox src={v.src} />
        ) : (
          <Thumb className='thumb' onClick={() => handleThumb(i)}>
            <img src={v.thumb} className='thumb-img'/>
            <div className='thumb-img-btn'/>
          </Thumb>
        )}
      </SlideBox>
    </SwiperSlide>
  );

  return (
    <Wrapper ref={sectionRef}>
      <div className='video-text'>
        <h2>홍지만신경과 <span id='bold'>소개영상</span></h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        }}
        speed={600}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
      >
        {videos.map(renderSlide)}
      </Swiper>
    </Wrapper>
  );
};

export default Section4;

/* -------- styled‑components -------- */

/* 주어진 Wrapper 유지 */
const Wrapper = styled.div`

  opacity: 0;

  &.visible {
    opacity: 1;
    transition: opacity 1.5s ease-in-out;
  }

  
  @media (min-width: 1200px) {
    width: calc(100% - 20vw);
    margin: 0 10vw;
  }
  @media (max-width: 1200px) {
    width: calc(100% - 8vw);
    margin: 0 4vw;
  }
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  .video-text {
    display: block;
    z-index: 30;
    color: black;
  }

  .video-text > h2 {
    font-size: calc(20px + 0.1vw);
    font-weight: 300;
  }
  #bold {
    font-size: calc(22px + 0.1vw);
    color: rgb(0, 51, 161);
    font-weight: 700;
  }

  @media (min-aspect-ratio: 17/9) and (min-width: 1200px) {
    .swiper {
      width: 100%;
      height: 100%;
      max-width: 80vw;
      max-height: calc(100% - 120px);
    }

    swiper-wrapper,
    .swiper-slide {
      height: 100%;
      width: 100%;
    }
  }

  @media (min-aspect-ratio: 17/9) and (max-width: 1200px) {
    .swiper {
      width: 100%;
      height: 100%;
      max-width: 92vw;
      max-height: calc(100% - 120px);
    }

    swiper-wrapper,
    .swiper-slide {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-aspect-ratio: 17/9) and (min-width: 1200px) {
    .swiper {
      width: 100%;
      height: 100%;
      max-width: 80vw;
      max-height: calc(100% - 120px);
    }

    swiper-wrapper,
    .swiper-slide {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-aspect-ratio: 17/9) and (max-width: 1200px) {
    .swiper {
      width: 100%;
      height: 100%;
      max-width: 92vw;
      max-height: calc(100% - 120px);
    }

    swiper-wrapper,
    .swiper-slide {
      height: 100%;
      width: 100%;
    }
  }
`;

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  overflow: hidden;

  container-type: size;
`;

const Video = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
  display: block;
`;

const Thumb = styled.div`

  width: auto;
  height: 100%;

  @container (aspect-ratio < 16 / 9) {
    width: 100%;
    height: auto;
  }

  .thumb-img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }

  .thumb-img-btn {
    width: 60px;
    aspect-ratio: 1;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 50;
    cursor: pointer;
    pointer-events: none;
  }

  .thumb-img-btn::before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 17px 0 17px 29.5px;
    border-color: transparent transparent transparent #fff;
    margin-left: 18px;
    margin-top: 13px;
    opacity: 0.9;
  }

  &:hover .thumb-img-btn {
    opacity: 1;
    background: rgba(0, 0, 0, 0.6);
  }
`

/* 화살표 공통 스타일 */
const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  

  &::before {
    content: '';
    display: block;
    width: calc(0.1vw + 20px);
    height: calc(0.1vw + 20px);
    border-top: 3px solid rgba(255, 255, 255, 0.5);
    border-right: 3px solid rgba(255, 255, 255, 0.5);

    filter: drop-shadow(0px 0px 3px rgb(0, 0, 0));
  }
`;

/* 왼쪽 ← */
const PrevArrow = styled(Arrow).attrs({ className: 'arrow-prev' })`
  left: calc(0.03vw + 5px);

  &::before {
    transform: rotate(-135deg);   /* 화살표 왼쪽 방향 */
  }
`;

/* 오른쪽 → */
const NextArrow = styled(Arrow).attrs({ className: 'arrow-next' })`
  right: calc(0.03vw + 5px);

  &::before {
    transform: rotate(45deg);     /* 화살표 오른쪽 방향 */
  }
`;