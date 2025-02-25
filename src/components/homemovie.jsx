import styled from "styled-components";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const videoList = [
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/videoplayback.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Pixar+Lamp+Dude.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Galaxy+Brain+meme.mp4",
  "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/Send+this+to+all+your+friends.mp4"
];

const SliderContainer = styled.div`
  position: relative;
  
  .movie-slider-thumbnail {
    cursor: pointer;
    width: 100%;
  }

  .slick-slide {
    aspect-ratio: 1.7;
  }
  
  .movie-slider-main {
    aspect-ratio: 1.7;
    display: none;
    position: relative;
  }

  .movie-slider-main.active {
    display: block;
    width: 100%;
  }

  .close-button {
    position: absolute;
    top: 5%;
    right: 5%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    font-size: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }

  .close-button:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export function HomeMovie() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (sliderRef1.current) {
      setNav1(sliderRef1.current);
    }
    if (sliderRef2.current) {
      setNav2(sliderRef2.current);
    }
  }, []);

  const handleThumbnailClick = (videoSrc) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(videoSrc);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  const handlePlay = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPause();
    }
  };

  const handlePause = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPlay();
    }
  };

  return (
    <SliderContainer>
      {/* Thumbnail Slider */}
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={4}
        slidesToScroll={4}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
        className="movie-slider-thumb"
        arrows={true}
      >
        {videoList.map((e, i) => (
          <video
            key={i}
            className="movie-slider-thumbnail"
            src={e}
            onClick={() => handleThumbnailClick(e)}
            crossOrigin="anonymous"
          />
        ))}
      </Slider>

      {/* Main Video Display */}
      {selectedVideo && (
        <div style={{ position: "relative" }}>
          <video
            ref={videoRef}
            src={selectedVideo}
            controls
            autoPlay
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
            className="movie-slider-main active"
            crossOrigin="anonymous"
          />
          <button className="close-button" onClick={handleCloseVideo}>×</button>
        </div>
      )}
    </SliderContainer>
  );
}
