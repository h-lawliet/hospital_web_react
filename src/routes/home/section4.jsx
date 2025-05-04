import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

/*  16 : 9(1920 × 1080) 고정 비율 영상 목록 */
const videos = [
  {
    id: 1,
    thumb: '/images/image1.jpg',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/%ED%99%8D%EC%A7%80%EB%A7%8C%EC%84%A0%EC%83%9D%EB%8B%98_%EC%9D%B8%ED%84%B0%EB%B7%B0_0418+(1080p).mp4',
  },
  {
    id: 2,
    thumb: '/images/image2.jpg',
    src: 'https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/16_9+Aspect+ratio+video+test.mp4',
  },
];

const Section4 = () => {
  const swiperRef = useRef(null);
  const [playing, setPlaying] = useState(null);       // 현재 재생 중 인덱스

  /* 썸네일 클릭 → 해당 슬라이드로 이동하고 재생 준비 */
  const handleThumb = (idx) => {
    setPlaying(idx);
    swiperRef.current?.slideToLoop(idx);
  };

  /* 슬라이드 전환 시 모든 비디오 정지, autoplay 재개 */
  const handleSlideChange = (sw) => {
    document.querySelectorAll('.swiper-slide video').forEach((v) => v.pause());
    if (sw.realIndex !== playing) setPlaying(null);
    sw.autoplay.start();
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

    return <Video ref={ref} src={src} controls onEnded={onEnded} />;
  };

  /* 슬라이드 렌더 */
  const renderSlide = (v, i) => (
    <SwiperSlide key={v.id} virtualIndex={i}>
      <SlideBox>
        {playing === i ? (
          <VideoBox src={v.src} />
        ) : (
          <Thumb $src={v.thumb} className='thumb' onClick={() => handleThumb(i)}/>
        )}
      </SlideBox>
    </SwiperSlide>
  );

  return (
    <Wrapper>
      <div className='video-text'>
        <h2>홍지만신경과 <span id='bold'>소개영상</span></h2>
      </div>
      <PrevArrow />
      <NextArrow />

      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        }}
        speed={600}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={handleSlideChange}
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
  justify-content: center;
  align-items: center;
  position: relative;

  .video-text {
    display: none;
    position: absolute;
    top: 10px;
    color: black;
  }

  @media (max-aspect-ratio: 1) {
    .video-text {
      display: block;
      z-index: 30;
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
  }

  @media (min-aspect-ratio: 17/9) and (min-width: 1200px) {
    .swiper {
      width: 100%;
      height: 100%;
      max-width: 80vw;
      max-height: calc(100% - 100px);
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
      max-height: calc(100% - 100px);
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
      max-height: calc(100% - 100px);
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
      max-height: calc(100% - 100px);
    }

    swiper-wrapper,
    .swiper-slide {
      height: 100%;
      width: 100%;
    }
  }
`;

/* 16:9 박스 — flex 중앙 정렬 */
const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  overflow: hidden;

  container-type: size;
`;

const Video = styled.video`
  width: auto;
  height: 100%;
  background: #fff;
  display: block;

  @container (aspect-ratio < 16 / 9) {
    width: 100%;
    height: auto;
  }
`;

const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-image: url(${(p) => p.$src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
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
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;

    filter: drop-shadow(0px 0px 6px rgb(0, 0, 0));
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
