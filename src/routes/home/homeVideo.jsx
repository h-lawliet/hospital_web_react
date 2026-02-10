import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { useEffect, useMemo, useRef, useState } from "react"

const videos = [
  { id: 1, thumb: "/images/thumb2.png", src: "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%B3%91%EC%9B%90%EC%86%8C%EA%B0%9C%EC%98%81%EC%83%81+(1440p).mp4" },
  { id: 2, thumb: "/images/thumb1.png", src: "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/%ED%99%8D%EC%A7%80%EB%A7%8C%EC%84%A0%EC%83%9D%EB%8B%98_%EC%9D%B8%ED%84%B0%EB%B7%B0_0418+(1080p).mp4" },
  { id: 3, thumb: "/images/thumb3.png", src: "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EA%B8%B0%EC%98%81%EC%83%81%EB%93%A4_%EB%A3%A8%ED%95%91_ver._2+(1080p).mp4" },
  { id: 4, thumb: "/images/thumb4.png", src: "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%8C%80%ED%91%9C%EC%A6%9D%EC%83%81+(1440p).mp4" },
  { id: 5, thumb: "/images/thumb5.png", src: "https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/20250724_%EB%AC%B4%EC%97%87%EC%9D%B4%EB%93%A0%EB%AC%BC%EC%96%B4%EB%B3%B4%EC%84%B8%EC%9A%94+(1080p).mp4" }
]

const VideoDeco = styled.div`
  h3 {
    margin: 0;
  }

  @media (max-width: 600px) {
    background-color: white;
    padding: 170px 7vw 0 7vw;


    p {
      font-weight: 200;
      font-size: 14px;
      text-align: center;
    }

    h4 {
      text-align: center;
      margin: 10px 0;
      font-weight: 300;
    }
    div {
      text-align: center;
      color: rgb(0, 51, 161);
      font-weight: 400;
      font-size: 15px;
    }
    h3 {
      text-align: center;
      font-weight: 300;
      font-size: 21.5px;
      padding-bottom: 20px;
    }
  }


  @media (min-width: 600px) and (max-width: 1200px) {
    background-color: white;
    padding: 180px 7vw 0 7vw;

    p {
      font-weight: 200;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
    }

    h4 {
      text-align: center;
      margin: 10px 0;
      font-weight: 300;
    }
    div {
      text-align: center;
      color: rgb(0, 51, 161);
      font-weight: 400;
      font-size: 17px;
      padding-bottom: 5px;
    }
    h3 {
      text-align: center;
      font-weight: 300;
      font-size: 24.2px;
      padding-bottom: 25px;
    }
  }

  @media (min-width: 1200px) {
    background-color: white;
    padding: 180px 7vw 0 7vw;

    p {
      font-weight: 200;
      font-size: 17px;
      text-align: center;
      line-height: 24px;

    }

    h4 {
      text-align: center;
      margin: 10px 0;
      font-weight: 300;
    }
    div {
      text-align: center;
      color: rgb(0, 51, 161);
      font-weight: 300;
      font-size: 22px;
      margin: 17px 0 5px 0;
    }
    h3 {
      text-align: center;
      font-weight: 300;
      font-size: 31px;
      padding-bottom: 40px;
    }
  }
`

const VideoContainer = styled.div`
  background-color: white;
  display: flex;

  .thumb_deco {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: auto;
    opacity: 0.8;
  }

  .video-element-box::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }

  @media (min-width: 1200px) {
    padding: 10px 10vw 130px 10vw;
    gap: 20px;
    width: 80vw;
    .video-box {
      flex: 3;
      aspect-ratio: 16 / 9;
      position: relative;
      background: #000;
      overflow: hidden;
      border-radius: 10px;
    }
    video {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      cursor: pointer;
    }
    .video-thumb-wrapper {
      flex: 1;
      position: relative;
      min-width: 0;
    }
    .video-thumb-box {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .video-element-box {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      border-radius: 5px;
    }
  }

  @media (max-width: 600px) {
    padding: 20px 7vw 90px 7vw;
    gap: 15px;
    width: 86vw;
    flex-direction: column;
    .video-box {
      width: 100%;
      aspect-ratio: 16 / 9;
      position: relative;
      background: #000;
      overflow: hidden;
      border-radius: 5px;
    }
    video {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      cursor: pointer;
    }
    .video-thumb-wrapper {
      width: 100%;
      position: relative;
      aspect-ratio: 6;
    }
    .video-thumb-box {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .video-element-box {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      border-radius: 5px;
    }
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    padding: 20px 7vw 110px 7vw;
    gap: 15px;
    width: 86vw;
    .video-box {
      flex: 3;
      aspect-ratio: 16 / 9;
      position: relative;
      background: #000;
      overflow: hidden;
    }
    video {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      cursor: pointer;
    }
    .video-thumb-wrapper {
      flex: 1;
      position: relative;
      min-width: 0;
    }
    .video-thumb-box {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .video-element-box {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      border-radius: 5px;
    }
  }
`

const MainPlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15%;
  height: auto;
  z-index: 5;
  pointer-events: none;
  
  /* 애니메이션 설정 */
  transition: opacity 0.4s ease, transform 0.4s ease;
  
  /* 재생 중(사라질 때): 커지면서 투명해짐 */
  opacity: ${(p) => (p.$isPlaying ? 0 : 0.8)};
  transform: ${(p) => (p.$isPlaying 
    ? "translate(-50%, -50%) scale(1.5)" 
    : "translate(-50%, -50%) scale(1)"
  )};
`

const Controls = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 10px 12px 10px;
  background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 10px;
  z-index: 10;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? "translateY(0)" : "translateY(10px)")};
  transition: opacity 500ms ease, transform 500ms ease;
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};

  button {
    border: 0;
    background: rgba(255,255,255,0.12);
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    line-height: 0;
    display: grid;
    place-items: center;
  }
  button img {
    width: 18px;
    height: 18px;
    display: block;
  }
  input[type="range"] {
    width: 100%;
    cursor: pointer;
    accent-color: rgb(15, 74, 201);
  }
  .time {
    color: #fff;
    font-size: 12px;
    opacity: 0.9;
    white-space: nowrap;
    text-align: center;
  }
`

const HomeVideo = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  const [activeId, setActiveId] = useState(videos[0].id)
  const activeVideo = useMemo(() => videos.find(v => v.id === activeId) ?? videos[0], [activeId])

  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const [hovered, setHovered] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const hideTimerRef = useRef(null)

  const formatTime = (t) => {
    if (!Number.isFinite(t) || t < 0) return "0:00"
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${String(s).padStart(2, "0")}`
  }

  const showControls = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setControlsVisible(true)
    hideTimerRef.current = setTimeout(() => setControlsVisible(false), 4000)
  }

  const hideControlsNow = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setControlsVisible(false)
  }

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onLoadedMetadata = () => setDuration(Number.isFinite(v.duration) ? v.duration : 0)
    const onTimeUpdate = () => setCurrentTime(v.currentTime || 0)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    v.addEventListener("loadedmetadata", onLoadedMetadata)
    v.addEventListener("timeupdate", onTimeUpdate)
    v.addEventListener("play", onPlay)
    v.addEventListener("pause", onPause)

    return () => {
      v.removeEventListener("loadedmetadata", onLoadedMetadata)
      v.removeEventListener("timeupdate", onTimeUpdate)
      v.removeEventListener("play", onPlay)
      v.removeEventListener("pause", onPause)
    }
  }, [])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", onFsChange)
    return () => document.removeEventListener("fullscreenchange", onFsChange)
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.src = activeVideo.src
    v.currentTime = 0
    v.play().catch(() => {})
    setControlsVisible(true)
  }, [activeVideo.src])

  useEffect(() => {
    if (!hovered) {
      hideControlsNow()
      return
    }
    setControlsVisible(true)
    showControls()
  }, [hovered, isPlaying])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const seek = (val) => {
    const v = videoRef.current
    if (!v) return
    const t = Number(val)
    v.currentTime = Math.max(0, Math.min(t, duration || 0))
  }

  const toggleFullscreen = () => {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) el.requestFullscreen?.()
    else document.exitFullscreen?.()
  }

  const onMouseMove = () => {
    if (!hovered) return
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    setControlsVisible(true)
    hideTimerRef.current = setTimeout(() => setControlsVisible(false), 4000)
  }

  return (
    <>
    {/* <VideoDeco>
      <p>치료를 마친 모든 환자들이 11자로 일어서는<br/>
      평범한 생활로 돌아가도록 돕겠습니다</p>
      <h4>-</h4>
      <div>평범한 11호님의 꿈</div>
      <h3>홍지만신경과</h3>
    </VideoDeco> */}
    <VideoContainer>
      <div
        className="video-box"
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={onMouseMove}
        onTouchStart={showControls}
      >
        {/* 메인 중앙 재생 버튼 애니메이션 적용 부분 */}
        <MainPlayButton 
          src="/images/home/btn_thumb.png" 
          $isPlaying={isPlaying} 
        />

        <video
          ref={videoRef}
          src={activeVideo.src}
          controls={false}
          playsInline
          onClick={() => {
            togglePlay()
            showControls()
          }}
        />

        <Controls
          $visible={controlsVisible}
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" onClick={() => { togglePlay(); showControls() }}>
            <img
              src={isPlaying ? "/images/home/btn_pause.png" : "/images/home/btn_play.png"}
              alt={isPlaying ? "pause" : "play"}
            />
          </button>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step="0.05"
            value={Math.min(currentTime, duration || 0)}
            onChange={(e) => { seek(e.target.value); showControls() }}
          />

          <div className="time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <button type="button" onClick={() => { toggleFullscreen(); showControls() }}>
            <img
              src={isFullscreen ? "/images/home/btn_full_exit.png" : "/images/home/btn_full.png"}
              alt={isFullscreen ? "exit fullscreen" : "fullscreen"}
            />
          </button>
        </Controls>
      </div>

      <div className="video-thumb-wrapper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="video-thumb-box"
          breakpoints={{
            600: {
              direction: "vertical",
              spaceBetween: 15,
            }
          }}
        >
          {videos.map((e) => (
            <SwiperSlide key={e.id}>
              <div
                className="video-element-box"
                style={{ backgroundImage: `url(${e.thumb})`, cursor: "pointer", position: "relative" }}
                onClick={(ev) => {
                  ev.stopPropagation()
                  setActiveId(e.id)
                }}
              >
                <img className="thumb_deco" src="/images/home/btn_thumb.png" alt="thumbnail decoration"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </VideoContainer>
    </>
  )
}

export default HomeVideo