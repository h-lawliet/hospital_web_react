import styled from "styled-components";
import Navermap from "./NaverMap";



const Information = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 35px 0;
  letter-spacing: 0.2em;
  font-weight: 200;
  background-color: white;
  font-size: calc(16px + 0.6vw);
`
const FooterInfo = styled.div`

  background-color: rgb(248, 248, 248);

  .footer-info {
    position: relative;
  }

  .vertical {
    position: absolute;
    right: 0;
    top: 50%;
    transform-origin: right top;
    transform: scaleY(0.43) scaleX(1.30) rotate(90deg) translateX(50%);
    pointer-events: none;
    white-space: nowrap;
    z-index: 1;
    font-family: "TheSignature";
  }


  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    .naver-map {
      width: 100%;
      aspect-ratio: 2;
      position: relative;
      z-index: 5;
    }

    .vertical{
      font-size: calc(83px + 0.1vw);
      opacity: 0.05;
    }


    .footer-info {

      overflow: hidden;
      padding: 40px 7vw;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-text-top {
        font-size: calc(18px + 0.2vw);
        font-weight: 400;
        color: rgb(0,51,161);
        margin: 0;
      }

      .info-text-top.last {
        margin-top: 30px;
      }

      .info-text-phone > h4 {
        font-size: 24px;
        font-weight: 700;
        margin: 12px 0 30px 0;
      }

      .info-heading {
        display: flex;
        justify-content: space-between;
        width: 70px;
        padding: 3px 0;
        font-size: 16px;
        font-weight: 600;
      }


      .time-container {
        display: flex;
        align-items: center;
        gap: 30px;
        flex-wrap: nowrap;
        padding: 3px 0;
      }
      .time-container.first {
        margin-top: 12px;
      }
      #time {
        font-size: 16px;
        font-weight: 600;
      }
      


      #rest {
        font-weight: 200;
        font-size: 13px;
        margin: 0;
        padding-top: 8px;
      }
      #location {
        font-size: 16px;
        font-weight: 400;
        margin: 12px 0 0 0;
      }
    }
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    display: flex;
    flex-direction: row;

    .naver-map {
      width: 50%;
      position: relative;
      z-index: 5;
    }

    .vertical{
      font-size: 86px;
      opacity: 0.05;
    }


    .footer-info {
      flex: 1;
      overflow: hidden;
      padding: 90px 7vw 90px 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-text-top {
        font-size: 20px;
        font-weight: 400;
        color: rgb(0,51,161);
        margin: 0;
      }

      .info-text-top.last {
        margin-top: 30px;
      }

      .info-text-phone > h4 {
        font-size: 25px;
        font-weight: 700;
        margin: 12px 0 30px 0;
      }

      .info-heading {
        display: flex;
        justify-content: space-between;
        width: 70px;
        padding: 3px 0;
        font-size: 17px;
        font-weight: 600;
      }


      .time-container {
        display: flex;
        align-items: center;
        gap: 35px;
        flex-wrap: nowrap;
        padding: 3px 0;
      }
      .time-container.first {
        margin-top: 12px;
      }
      #time {
        font-size: 17px;
        font-weight: 600;
      }
      


      #rest {
        font-weight: 200;
        font-size: 13.5px;
        margin: 0;
        padding-top: 8px;
      }
      #location {
        font-size: 17px;
        font-weight: 400;
        margin: 12px 0 0 0;
      }
    }
  }
  
  
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    height: 600px;

    .naver-map {
      width: 50%;
      padding-right: 25px;
    }

    .vertical {
      opacity: 0.05;
      font-size: 115px;
    }


    .footer-info {
      flex: 1;
      padding-left: 25px;
      padding-top: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-text-top {
        font-size: 24px;
        font-weight: 400;
        color: rgb(0,51,161);
        margin: 0;
      }

      .info-text-top.last {
        margin-top: 36px;
      }

      .info-text-phone > h4 {
        font-size: 35px;
        font-weight: 700;
        margin: 16px 0 36px 0;
      }

      .info-heading {
        display: flex;
        justify-content: space-between;
        width: 80px;
        padding: 3px 0;
        font-size: 18px;
        font-weight: 600;
      }


      .time-container {
        display: flex;
        align-items: center;
        gap: 40px;
        flex-wrap: nowrap;
        padding: 3px 0;
      }
      .time-container.first {
        margin-top: 16px;
      }
      #time {
        font-size: 18px;
        font-weight: 600;
      }
      


      #rest {
        font-weight: 200;
        font-size: 16px;
        margin: 10px 0;
      }
      #location {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
`


const HomeInfo = () => {
  return (
    <>
    <Information>- INFORMATION -</Information>
    <FooterInfo>

      <div className="naver-map">
        <Navermap/>
      </div>

      <div className="footer-info">
        <div className="vertical">
          Dr.Hong's Special Neurology Centre
        </div>
        <p className="info-text-top">CONTACT</p>
        <div className="info-text-phone">
          {/* <img src="/icon/call_icon.png"/> */}
          <h4>031-222-3317</h4>
        </div>
        <p className="info-text-top">CLINIC HOURS</p>
        <div className="time-container first">
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
        <p className="info-text-top last">LOCATION</p>
        <p id="location">수원시 팔달구 경수대로546 (인계동)</p>
      </div>
    </FooterInfo>
    </>
  )
};

export default HomeInfo;