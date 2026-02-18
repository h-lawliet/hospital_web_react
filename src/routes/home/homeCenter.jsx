import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { examinationImages } from "../../data/examinationdata";
import { useNavigate } from "react-router-dom";

const HomeCenterContainer = styled.div`

  background-image: url('/images/home/center_temp.png');
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 0;
  color: white;

  // .grid-opacity {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   background: rgba(0, 0, 0, 0.4);
  //   z-index: 1;
  // }

  .grid-container {
    display: grid;
    height: 100%;
    position: relative;
    z-index: 4;
    gap: 16px;
  }

  .grid-item {
    position: relative;
  }
  .grid-item > * {
    position: relative;
    z-index: 10;
  }
  
  @media (min-width: 1200px) {

    padding: 210px 10vw;

    .item1 { grid-area: box1; }
    .item2 { grid-area: box2; }
    .item3 { grid-area: box3; }
    .item4 { grid-area: box4; }
    .item5 { grid-area: box5; }
    .item6 { grid-area: box6; }
    .item7 { grid-area: box7; }

    h2 {
      color: black;
      position: relative;
      z-index: 4;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
      font-size: calc(30px + 0.12vw);
      font-weight: 300;
      text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    }

    .grid-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0;
      grid-template-areas:
        "box1 box1 box2 box5"
        "box4 box4 box3 box6";
      box-shadow: 0 0 7px rgba(255, 255, 255, 0.4);
    }


    .grid-item {
      background-color: white;
      padding: 35px;
      min-height: 200px;
    }

    .item1 {
      background: url("/images/temp/surgery1.jpg");
      background-size: cover;
      background-position: center center;
    }
    .grid-item-opacity-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .p-sub-1 {
      margin: 0;
      font-size: calc(14.5px + 0.1vw);
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      padding-bottom: 20px;
    }
    .p-main-1-1 {
      margin: 0;
      font-size: calc(20px + 0.12vw);
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
      padding-bottom: 3px;
    }
    .p-main-1-2 {
      font-weight: 1000;
      margin: 0;
      font-size: 25px;
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
      letter-spacing: 0.05em;
    }
    .p-main-1-2-sub {
      font-weight: 200;
      font-size: 20px;
      letter-spacing: 0;
    }
    .p-main-1-2-sub > span {
      font-weight: 800;
    }
    .p-1-btn {
      background-color: white;
      color: rgb(53, 53, 53);
      padding: 5px 15px;
      font-weight: 800;
      font-size: 16px;
      position: absolute;
      bottom: 35px;
      cursor: pointer;
    }

    .item2 {
      background-color: #7f99cf;
    }
    .p-main-2-1 {
      margin: 0;
      font-size: calc(20px + 0.12vw);
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
      padding-bottom: 8px;
    }
    .p-main-2-2 {
      margin: 0;
      font-weight: 300;
      font-size: 17px;
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
    }
    .p-main-2-2 > strong {
      font-weight: 800;
    }

    .item3 {
      background: url("/images/temp/emergency1.jpg");
      background-size: cover;
      background-position: center center;
    }
    .p-main-3 {
      margin: 0;
      font-size: calc(20px + 0.12vw);
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
    }

    .item4 {
      background: url("/images/facility/2-5.webp");
      background-size: cover;
      background-position: center center;
    }
    .p-main-4-2 {
      margin: 0;
      font-size: calc(18px + 0.12vw);
      text-shadow: 0px 0px 5px rgb(0, 0, 0);
    }

    .item5 {
      overflow: hidden;
      padding: 0;
      height: 100%;
      background-color: white;
    }

    .item5 .swiper {
      height: 100%;
    }
    .item5 .swiper-wrapper {
      height: 100%;
    }
    .center-element-box {
      width: 100%;
      height: 100%;
    }

    .item6 {
      background-color: #00319c;
    }
    .p-main-6 {
      margin: 0;
      font-size: calc(20px + 0.12vw);
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }

    .center2-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 15px;
    }
    .center2-item {
      display: flex;
      color: black;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 0 7px rgba(255, 255, 255, 0.4);
      padding: 30px;
      border-radius: 1vw;
    }
    .center2-container p {
      font-size: calc(20px + 0.12vw);
      margin: 10px 0;
    }
    .center2-h2 {
      padding-top: 110px;
    }

    .center2-container strong {
      font-weight: 1000;
    }
    
    .center2-item {
      background-color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
    .center2-item:hover {
      background-color: rgb(0, 51, 161);
      color: white;
    }
  }


  @media (min-width: 760px) and (max-width: 1200px) {
    padding: 200px 7vw 110px 7vw;

    .item1 { grid-area: box1; }
    .item2 { grid-area: box2; }
    .item3 { grid-area: box3; }
    .item4 { grid-area: box4; }
    .item5 { grid-area: box5; }

    h2 {
      color: black;
      position: relative;
      z-index: 4;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
      font-size: 25px;
      font-weight: 300;
      text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    }

    .grid-container {
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      grid-template-areas:
        "box1 box1"
        "box2 box3"
        "box4 box5";
    }

    .grid-item {
      padding: 25px 25px;
      position: relative;
      min-height: 150px;
    }

    .item1 {
      background: url("/images/temp/surgery1.jpg");
      background-size: cover;
      background-position: center center;
    }
    .grid-item-opacity-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .p-sub-1 {
      margin: 0;
      font-size: 13px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      padding-bottom: 10px;
    }
    .p-main-1-1 {
      margin: 0;
      font-size: 18px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .p-main-1-2 {
      font-weight: 1000;
      margin: 0;
      font-size: 20px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      letter-spacing: 0.05em;
      padding-bottom: 20px;
      padding-top: 2px;
    }
    .p-main-1-2-sub {
      font-weight: 200;
      font-size: 18px;
      letter-spacing: 0;
    }
    .p-main-1-2-sub > span {
      font-weight: 800;
    }
    .p-1-btn {
      background-color: white;
      position: absolute;
      padding: 5px 15px;
      color: black;
      font-weight: 500;
      font-size: 15px;
      bottom: 25px;
      cursor: pointer;
    }

    .item2 {
      background-color: rgb(0, 51, 161);
    }
    .p-main-2-2 {
      font-weight: 400;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      letter-spacing: 0.05em;
      padding-bottom: 20px;
    }

    .item3 {
      background: url("/images/home/home-slide5.webp");
      background-size: cover;
      background-position: center center;
    }
    .p-main-3-1 {
      padding-bottom: 2px;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .p-main-3-2 {
      padding-bottom: 20px;
      padding-top: 3px;
      margin: 0;
      font-size: 13px;
      font-weight: 200;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }

    .item4 {
      background-image: url("/images/facility/3-3.webp");
      background-size: cover;
      background-position: center center;
    }
    .p-main-4 {
      padding-bottom: 37px;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }

    .item5 {
      background-color: #7f99cf;
    }

    
    .center2-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 15px;
    }
    .center2-item {
      display: flex;
      color: black;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 0 7px rgba(255, 255, 255, 0.4);
      padding: 20px;
      border-radius: 1vw;
    }
    .center2-container p {
      font-size: calc(15px + 0.2vw);
      margin: 10px 0;
    }
    .center2-h2 {
      padding-top: 90px;
      line-height: 30px;
    }

    .center2-container strong {
      font-weight: 1000;
    }
    
    .center2-item {
      background-color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
    .center2-item:hover {
      background-color: rgb(0, 51, 161);
      color: white;
    }
  }


  @media (max-width: 760px) {
    
    padding: 190px 7vw 90px 7vw;

    .item1 { grid-area: box1; }
    .item2 { grid-area: box2; }
    .item3 { grid-area: box3; }
    .item4 { grid-area: box4; }
    .item5 { grid-area: box5; }

    h2 {
      color: black;
      position: relative;
      z-index: 4;
      text-align: center;
      margin: 0;
      padding-bottom: 30px;
      font-size: 23px;
      font-weight: 300;
      text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    }

    .grid-container {
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      gap: 0;
      grid-template-areas:
        "box1"
        "box2"
        "box3"
        "box5"
        "box4";
    }

    .grid-item {
      padding: 25px 12px;
      position: relative;
      min-height: 130px;
    }

    .item1 {
      background: url("/images/temp/surgery1.jpg");
      background-size: cover;
      background-position: center center;
    }
    .grid-item-opacity-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .p-sub-1 {
      margin: 0;
      font-size: 12px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      padding-bottom: 10px;
    }
    .p-main-1-1 {
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .p-main-1-2 {
      font-weight: 1000;
      margin: 0;
      padding-top: 2px;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      letter-spacing: 0.05em;
      padding-bottom: 20px;
    }
    .p-main-1-2-sub {
      font-weight: 200;
      font-size: 16px;
      letter-spacing: 0;
    }
    .p-main-1-2-sub > span {
      font-weight: 800;
    }
    .p-1-btn {
      background-color: white;
      position: absolute;
      padding: 5px 15px;
      color: black;
      font-weight: 500;
      font-size: 15px;
      bottom: 25px;
      cursor: pointer;
    }

    .item2 {
      background-color: rgb(0, 51, 161);
    }
    .p-main-2-2 {
      font-weight: 400;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      letter-spacing: 0.05em;
      padding-bottom: 20px;
    }

    .item3 {
      background: url("/images/home/home-slide5.webp");
      background-size: cover;
      background-position: center center;
    }
    .p-main-3-1 {
      padding-bottom: 2px;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .p-main-3-2 {
      padding-top: 3px;
      margin: 0;
      font-size: 13px;
      font-weight: 200;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }

    .item4 {
      background-image: url("/images/facility/3-3.webp");
      background-size: cover;
      background-position: center center;
    }
    .p-main-4 {
      padding-bottom: 37px;
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }

    .item5 {
      background-color: #7f99cf;
    }

    
    .center2-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 15px;
    }
    .center2-item {
      display: flex;
      color: black;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 0 7px rgba(255, 255, 255, 0.4);
      padding: 12px;
      border-radius: 1vw;
    }
    .center2-container p {
      font-size: calc(15px + 0.2vw);
      margin: 10px 0;
    }
    .center2-h2 {
      padding-top: 90px;
      line-height: 30px;
    }

    .center2-container strong {
      font-weight: 1000;
    }
    
    .center2-item {
      background-color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
    .center2-item:hover {
      background-color: rgb(0, 51, 161);
      color: white;
    }
  }
`


const HomeCenter = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  
  return (
    <HomeCenterContainer>

      {/* <div className="grid-opacity"/> */}
      <h2>홍지만신경과 소개</h2>
      <div className="grid-container">
      {
        isMobile ? 
        <>
        <div className="grid-item item1">
          <div className="grid-item-opacity-1"/>
          <p className="p-sub-1">수많은 결과로 입증된</p>
          <p className="p-main-1-1">독자적 모야모야병 최소침습치료</p>
          <p className="p-main-1-2">BASIS&nbsp;:&nbsp;<span className="p-main-1-2-sub">
            <span>B</span>ackward&nbsp;<span>A</span>rteriogene<span>SIS</span>
          </span></p>
          <span className="p-1-btn" onClick={()=> window.open('/center/1', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item2">
          <div className="grid-item-opacity-2"/>
          <p className="p-main-1-1">집중치료센터 : 정밀한 모니터링과 치료</p>
          <span className="p-1-btn" onClick={()=> window.open('/center/0', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item3">
          <div className="grid-item-opacity-1"/>
          <p className="p-sub-1">대학병원 수준의</p>
          <p className="p-main-1-1">영상실 및 검사실</p>
          <p className="p-main-3-2">CT · MRI · X-ray · 자율신경 등 <strong>30여개의 검사</strong> 운용</p>
          <span className="p-1-btn" onClick={()=> window.open('/examination/0', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item4">
          <div className="grid-item-opacity-1"/>
          <p className="p-sub-1">24시간 / 연중무휴</p>
          <p className="p-main-4">입원실 운영</p>
        </div>
        <div className="grid-item item5">
          {/* <div className="grid-item-opacity-1"/> */}
          <p className="p-main-1-1">온라인 상담예약</p>
          <span className="p-1-btn" onClick={()=> window.open('/community/0', '_self')}>바로가기</span>
        </div>
        </>

        :
        
        <>
        <div className="grid-item item1">
          <div className="grid-item-opacity-1"/>
          <p className="p-sub-1">수많은 결과로 입증된</p>
          <p className="p-main-1-1">홍지만신경과의 독자적 모야모야병 최소침습치료</p>
          <p className="p-main-1-2">BASIS&nbsp;:&nbsp;<span className="p-main-1-2-sub">
            <span>B</span>ackward&nbsp;<span>A</span>rteriogene<span>SIS</span>
          </span></p>
          <span className="p-1-btn" onClick={()=>window.open('/center/1', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item2">
          <div className="grid-item-opacity-2"/>
          <p className="p-sub-1">대학병원 수준의</p>
          <p className="p-main-2-1">영상실 및 검사실</p>
          <p className="p-main-2-2">CT · MRI · X-ray 외<br/><strong>30여개의 검사</strong> 운용</p>
          <span className="p-1-btn" onClick={()=> window.open('/examination/0', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item3">
          <div className="grid-item-opacity-1"/>
          <p className="p-sub-1">24시간 / 연중무휴</p>
          <p className="p-main-3">입원실 운영</p>
        </div>
        <div className="grid-item item4">
          <div className="grid-item-opacity-1"/>
          <p className="p-main-1-1">집중치료센터 : 정밀한 모니터링과 치료</p>
          {/* <p className="p-main-4-2">뇌졸중 · 기립성 어지럼증 · 실신 · 난치성 두통 · 안면마비</p> */}
          <span className="p-1-btn" onClick={()=> window.open('/center/0', '_self')}>바로가기</span>
        </div>
        <div className="grid-item item5">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className='swiper'
          >
          {
            examinationImages?.map((e, i) => {
              return (
                <SwiperSlide>
                  <div className='center-element-box' style={{ 
                    backgroundImage: `url(${e})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                  }} />
                </SwiperSlide>
              )
            })
          }
          </Swiper>
        </div>
        <div className="grid-item item6">
          <div className="grid-item-opacity-2"/>
          <p className="p-main-6">온라인 상담예약</p>
          {/* <p className="p-main-6-2">온라인 상담예약</p> */}
          <span className="p-1-btn" onClick={()=> window.open('/community/0', '_self')}>바로가기</span>
        </div>
        </>
      }
      </div>
      <h2 className="center2-h2"><span style={{
        color: 'rgb(0, 51, 161)',
        fontWeight: 800
      }}>모 · 기 · 난 · 안</span>으로 힘든 당신을 위한 명답</h2>
      <div className="center2-container">
        <div className="center2-item" onClick={()=>window.open('appointment/0', '_self')}>
          <p><strong>모</strong>야모야병<br/>최소침습 치료</p>
          <p>뇌졸중 집중치료</p>
        </div>
        <div className="center2-item" onClick={()=>window.open('appointment/3', '_self')}>
          <p><strong>기</strong>립성 어지럼증</p>
          <p>실신</p>
        </div>
        <div className="center2-item" onClick={()=>window.open('appointment/2', '_self')}>
          <p><strong>난</strong>치성 두통</p>
          <p>어지럼증</p>
        </div>
        <div className="center2-item">
          <p><strong>안</strong>면마비</p>
          <p>안면떨림</p>
        </div>
      </div>

    </HomeCenterContainer>
  )
}

export default HomeCenter