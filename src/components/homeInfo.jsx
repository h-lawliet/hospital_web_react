import styled from "styled-components";
import Navermap from "./NaverMap";


const FooterInfo = styled.div`

  position: relative;
  overflow-y: hidden;


  .vertical{
    position: absolute;
    right: 0;
    top: 50%;
    transform: scaleY(0.40) scaleX(1.30) translateY(480px) translateX(-60px) rotate(90deg);
    transform-origin: right center;
    white-space: nowrap;
    opacity: 0.05;
    font-size: 115px;
    font-family: "TheSignature";
  }
  
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    height: 500px;
    // padding: 20px 0;

    .naver-map {
      width: calc(50% - 25px);
      // max-width: 600px;
      padding-right: 25px;
    }


    .footer-info {

      padding-left: 25px;
      padding-top: 25px;

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
        font-weight: 600;
      }
    }
  }
`


const HomeInfo = () => {
  return (
    <>
    <div style={{
      width: "100%",
      textAlign: "center",
      padding: "150px 0 35px 0",
      letterSpacing: "0.2em",
      fontSize: "2vw",
      fontWeight: 200
    }}>- INFORMATION -</div>
    <FooterInfo>

      <div className="naver-map">
        <Navermap/>
      </div>

      <div className="footer-info">
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

      <div className="vertical">
        Dr.Hong's Special Neurology Centre.
      </div>
    </FooterInfo>
    </>
  )
};

export default HomeInfo;