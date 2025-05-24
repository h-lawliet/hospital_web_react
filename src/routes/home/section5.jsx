import { useEffect, useRef } from "react"
import styled from "styled-components"
import Navermap from "../../components/NaverMap.jsx"

const FifthSection = styled.div`

  @keyframes downToUp {
    0% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  padding-left: 10vw;
  padding-right: 10vw;
  height: 100%;
  display: flex;

  .map-img {
    opacity: 0;
    width: 100%;
    aspect-ratio: 1.5;
    background-image: url("/images/home/map.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .info-text {
    flex: 1;
    margin: 3vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .text-container {
    opacity: 0;
  }

  .visible {
    opacity: 1;
    transition: opacity 1s ease-in-out;
    animation: downToUp 1s ease-in-out;
  }

  @media (max-width: 1200px) {
    padding-left: 4vw;
    padding-right: 4vw;
  }

  @media (max-aspect-ratio: 1) {
    flex-direction: column;
  }
  

  @media (max-width: 600px) {

    .info-img {
      flex: 1;
      margin: 1vh 3vw;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .info-text {
      flex: 1;
      margin: 1vh 3vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
    }

    .info-text-top {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 10px;
    }
    
    .info-text-phone {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
    }
    .info-text-phone > h4 {
      margin: 0;
      display: inline;
      font-size: 20px;
      font-weight: 800;
      padding-left: 3px;
      color: rgb(90, 90, 90);
    }
    .info-text-phone > img {
      display: inline-block;
      width: 20px;
    }

    .time-container {
      display: flex;
      align-items: center;
    }

    .info-heading {
      display: flex;
      justify-content: space-between;
      width: 60px;
      padding: 3px 0;
      font-size: 14px;
      color: rgb(90, 90, 90);
    }

    #notice {
      padding-bottom: 6px;
      font-weight: 700;
      font-size: 15px;
    }

    #time {
      display: inline;
      font-size: 14px;
      padding-left: 15px;
    }

    #rest {
      color: rgb(238, 81, 81);
      margin: 12px 0;
      font-size: 14px;
    }

    #location {
      font-size: 15px;
      margin: 0;
    }
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    .info-img {
      flex: 1;
      margin: 2vh 2vw;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .info-text {
      flex: 1;
      margin: 2vh 2vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }

    .info-text-top {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 10px;
    }
    
    .info-text-phone {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
    }
    .info-text-phone > h4 {
      margin: 0;
      display: inline;
      font-size: 20px;
      font-weight: 800;
      padding-left: 3px;
      color: rgb(90, 90, 90);
    }
    .info-text-phone > img {
      display: inline-block;
      width: 20px;
    }

    .time-container {
      display: flex;
      align-items: center;
    }

    .info-heading {
      display: flex;
      justify-content: space-between;
      width: 60px;
      padding: 3px 0;
      font-size: 14px;
      color: rgb(90, 90, 90);
    }

    #notice {
      padding-bottom: 10px;
      font-weight: 700;
      font-size: 16px;
    }

    #time {
      display: inline;
      font-size: 14px;
      padding-left: 15px;
    }

    #rest {
      color: rgb(238, 81, 81);
      margin: 12px 0;
      font-size: 14px;
    }

    #location {
      font-size: 15px;
      margin: 0;
    }
  }

  @media (min-width: 1200px) {
    .info-img {
      flex: 1;
      margin: 3vh 1.5vw;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .info-text {
      flex: 1;
      margin: 3vh 1.5vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }

    .info-text-top {
      margin: 0;
      font-size: calc(17px + 0.1vw);
      font-weight: 500;
      padding-bottom: 12px;
    }
    
    .info-text-phone {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
    }
    .info-text-phone > h4 {
      margin: 0;
      display: inline;
      font-size: calc(30px + 0.1vw);
      font-weight: 800;
      padding-left: 6px;
      color: rgb(90, 90, 90);
    }
    .info-text-phone > img {
      display: inline-block;
      width: calc(25px + 0.1vw);
    }

    #notice {
      padding-bottom: 10px;
      font-weight: 700;
      font-size: calc(16px + 0.1vw);
    }

    .time-container {
      display: flex;
      align-items: center;
    }

    .info-heading {
      display: flex;
      justify-content: space-between;
      width: 80px;
      padding: 3px 0;
      font-size: calc(15px + 0.1vw);
      color: rgb(90, 90, 90);
    }

    #time {
      display: inline;
      font-size: calc(15px + 0.1vw);
      padding-left: 20px;
    }

    #rest {
      color: rgb(238, 81, 81);
      margin: 12px 0;
      font-size: calc(15px + 0.1vw);
    }

    #location {
      font-size: calc(16px + 0.1vw);
      margin: 0;
    }
  }
`


function Section5() {
  
  const elementsRef = useRef([])
  
  useEffect(()=>{
    
    const targets = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 500);
        }
      });
    }, {
      threshold: 0.01
    });

    targets.forEach((el) => el && observer.observe(el));

    return () => {
      targets.forEach((el) => el && observer.unobserve(el));
    };
  })


  return (
    <FifthSection>
      <div className="info-img">
        <div className="map-img" ref={(el) => elementsRef.current[0] = el}>
          <Navermap/>
        </div>
      </div>
      <div className="info-text">
        <div class="text-container" ref={(el) => elementsRef.current[1] = el}>
          <p className="info-text-top">예약 및 상담 문의</p>
          <div className="info-text-phone">
            <img src="/icon/call_icon.png"/>
            <h4>031-222-3317</h4>
          </div>
          <div id="notice">외래 진료시간</div>
          <div className="time-container">
            <span className="info-heading">
              <span>평</span>
              <span>일</span>
            </span><span id="time">09:00 - 18:00</span>
          </div>
          <div className="time-container">
            <span className="info-heading">
              <span>토</span>
              <span>요</span>
              <span>일</span>
            </span><span id="time">09:00 - 13:00</span>
          </div>
          <div className="time-container">
            <span className="info-heading">
              <span>점</span>
              <span>심</span>
              <span>시</span>
              <span>간</span>
            </span><span id="time">13:00 - 14:00</span>
          </div>
          
          <p id="rest">* 일요일 · 공휴일 휴진 (입원실은 휴무없이 운영합니다)</p>
          <p id="location">수원시 팔달구 경수대로546 (인계동)</p>
        </div>
        
      </div>
    </FifthSection>
  )
}

export default Section5