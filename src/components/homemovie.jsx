import styled from "styled-components";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const videoList = [
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/%5BFake%5D+%EC%98%A4%EC%A7%95%EC%96%B4%EA%B2%8C%EC%9E%84+%EC%8A%A4%ED%95%80%EC%98%A4%ED%94%84+_+%EB%88%84%EC%9E%AC%EC%95%99+%EA%B2%8C%EC%9E%84+(feat.+%EC%BC%80%EC%9D%B8%2C%ED%9D%A5%EB%AF%BC).mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Pixar+Lamp+Dude.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Galaxy+Brain+meme.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Send+this+to+all+your+friends.mp4"
]

const SliderContainer = styled.div`
  .slider-thumbnail {
    aspect-ratio: 1.7;
  }
`

export function HomeMovie() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    if (sliderRef1.current) {
      setNav1(sliderRef1.current);
    }
    if (sliderRef2.current) {
      setNav2(sliderRef2.current);
    }
  }, []);

  const handlePlay = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPause() // 비디오 재생 시 자동 슬라이드 정지
    }
  }

  const handlePause = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPlay() // 비디오 정지 시 다시 자동 슬라이드 시작
    }
  }

  return (
    <SliderContainer>
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={4}
        slidesToScroll={4}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={true}
        className="movie-slider-thumb"
        arrows={true}
      >
      {
        videoList.map((e)=>{
          return(
            <video className="movie-slider-thumbnail" src={e}/>
          )
        })
      }
      </Slider>

      <Slider 
        className="movie-slider"
        asNavFor={nav2}
        autoplay={true}
        autoplaySpeed={7000}
        infinite={true}
        arrows={false}
        ref={sliderRef1}>
      {
        videoList.map((e, i)=>{
          return(
            <video
              key={i}
              src={e}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handlePause}
            />
          )
        })
      }
      </Slider>
    </SliderContainer>
  )
}