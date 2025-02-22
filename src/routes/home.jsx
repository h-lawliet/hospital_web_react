import styled from "styled-components"
import ImageSlider from "../components/imageSlide"
import { useState } from "react"
import ResponsiveSlider from "../components/homeNoticeSlide"
import NaverMap from "../components/NaverMap"

function Home() {

  let [clinicList] = useState(
    [
      {
        title: "모야모야 특화센터",
        content: "최고 전문의의 효과적인 예방법과 차별화된 비수술·최소침습시술로 모야모야 병기에 따른 최적 맞춤치료!",
        image: "/images/image1.jpg",
        path: "/center/0"
      },
      {
        title: "뇌졸중 특화센터",
        content: "전문적팀으로 정확한 진단과 차별화된 집중치료 모니터링으로 고위험 환자에서도 최적 맞춤치료!",
        image: "/images/image1.jpg",
        path: "/center/1"
      },
      {
        title: "두통·어지럼증센터",
        content: "최고 전문의의 효과적인 진단과 차별화된 치료시스템으로 개인화된 최적의 맞춤치료!",
        image: "/images/image1.jpg",
        path: "/center/2"
      },
      {
        title: "뇌졸중·치매 통합 예방센터",
        content: "최고 전문의의 친절한 설명과 함께 차별화된 뇌졸중·치매를 통합하는 개인위험도에 따른 최적의 예방치료!",
        image: "/images/image1.jpg",
        path: "/center/3"
      },
      {
        title: "운동 · 이완센터",
        content: "자세, 체성분, 운동능력 분석으로 차별화된 운동치료로 최적의 맞춤치료!",
        image: "/images/image1.jpg",
        path: "/center/4"
      }
    ]
  )

  const HomePictureFrame = styled.div`

    @media (max-width: 600px) {
      width: 100%;
      aspect-ratio: 1.2;
    }

    @media (min-width: 600px) {
      width: 100%;
      height: 88vh;
    }
  `
  
  const HomeContentFrame = styled.div`

    margin-bottom: 10vh;
    
    .line-deco {
      margin-top: 70px;
      height: 3.5px;
      width: 60px;
      background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
    }
    
    .special-clinic-container {
      display: grid;
    }
    .special-clinic-text {
      padding: 1vh 2vh;
      flex-grow: 1;
      background-color: rgb(247, 247, 247);
    }


    .special-clinic-content:hover .special-clinic-img {
      background-size: auto 130%;
    }

    .home-info-map {
      display: flex;
      align-items: center;
    }

    
    @media (min-width: 1200px) {
      padding: 0 10vw;

      .home-member-container {
        display: flex;
        padding-top: 0;
      }
      .home-member-content {
        flex-grow: 1;
        text-align: center;
        
      }

      .home-member-content > h4 {
        font-size: calc(17px + 0.05vw);
        margin: 8px 0;
      }
      .home-member-content-img {
        width: 55px;
      }
      .home-member-content > h3 {
        color: rgb(0, 51, 161);
        font-size: calc(21px + 0.05vw);
        margin: 3px 0;
      }
      .home-member-text {
        font-size: calc(16px + 0.05vw);
        margin: 15px 0;
      }
      .home-member-name {
        font-size: calc(16px + 0.05vw);
        margin: 8px 0;
        font-weight: 600;
      }
      .home-member-img {
        width: clamp(100px, 50%, 400px);
        flex-shrink: 0;
        background-image: url("/images/image1.jpg");
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
      }

      .home-member-btn {
        display: inline-block;
        cursor: pointer;
        font-size: calc(16px + 0.05vw);
        border-radius: calc(0.05vw + 18px);
        color: rgb(255, 255, 255);
        padding: 8px 15px;
        background-color: rgb(0, 51, 161);
        margin-bottom: 5px;
        margin-top: 5px;
      }
      .home-member-btn > a {
        color: inherit;
        text-decoration: none;
      }

      .special-clinic-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        padding-top: 40px;
      }
      .special-clinic-content {
        display: flex;
        flex-direction: row;
      }
      .special-clinic-text {
        padding: 10px 15px;
        flex-grow: 1;
        background-color: rgb(247, 247, 247);
      }
      .special-clinic-text > h3 {
        margin: 0.5em 0;
        font-weight: 600;
        font-size: calc(17.5px + 0.05vw);
        color: rgb(0, 51, 161);
      }
      .special-clinic-text > p {
        font-size: calc(16px + 0.05vw);
        line-height: calc(22px + 0.05vw);
        font-weight: 200;
      }
      .special-clinic-btn {
        display: inline-block;
        cursor: pointer;
        font-size: calc(16px + 0.05vw);
        border-radius: calc(0.05vw + 20px);
        background-color: rgb(0, 51, 161);
        color: #FFFFFF;
        padding: 9px 15px;
      }
      .special-clinic-btn:hover {
        // background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
        // // background-color: rgb(0, 51, 161);
        // border: none;
        // color: rgb(244, 240, 240);
      }
      .special-clinic-btn > a {
        color: inherit;
        text-decoration: none;
      }


      .special-clinic-content:hover .special-clinic-img {
        background-size: auto 130%;
      }



      .special-clinic-img {
        height: 32vh;
        width: 32vh;
        flex-shrink: 0;
        background-position: center;
        transition: background-size 0.7s ease-in-out;
        background-size: auto 100%;
        background-repeat: no-repeat;
      }

      .home-info {
        display: flex;
        flex-direction: row;
      }

      .home-info-map {
        width: 55%;
      }

      .home-info-content {
        width: 45%;
        padding-left: 3vw;
      }
      .home-info-call-above {
        color: rgb(81, 79, 79);
        font-size: clamp(19px, calc(18px + 0.1vw), 22px);
        font-weight: 500;
        margin: 15px 0;
      }
      .home-info-call {
        display: flex;
        align-items: center;
        color: rgb(97, 96, 96);
        font-size: clamp(26px, calc(25px + 0.1vw), 30px);
        font-weight: 800;
        margin: 10px 0;
        padding-bottom: 25px;
      }
      #info-img {
        width: clamp(22px, calc(21px + 0.1vw), 25px);
      }

      .home-info-time {
        display: flex;
        padding-bottom: 12px;
      }
      .home-info-time > div {
        white-space: nowrap;
        display: flex;
        width: 70px;
        justify-content: space-between;
      }

      .home-info-red {
        color: rgb(184, 37, 37);
        font-size: calc(16px + 0.1vw);
      }

      #time {
        color: rgb(101, 99, 99);
      }
    }

    @media (max-width: 1200px) and (min-width: 600px) {
      padding: 0 4vw;

      .home-member-container {
        display: flex;
        padding-top: 0;
      }
      .home-member-content {
        flex-grow: 1;
        text-align: center;
        
      }

      .home-member-content > h4 {
        font-size: calc(16px + 0.05vw);
        margin: 6px 0;
      }
      .home-member-content-img {
        width: 50px;
      }
      .home-member-content > h3 {
        color: rgb(0, 51, 161);
        font-size: calc(20px + 0.05vw);
        margin: 2px 0;
      }
      .home-member-text {
        font-size: calc(15px + 0.05vw);
        margin: 10px 0;
      }
      .home-member-name {
        font-size: calc(15px + 0.05vw);
        margin: 8px 0;
        font-weight: 600;
      }
      .home-member-img {
        width: clamp(100px, 50%, 400px);
        flex-shrink: 0;
        background-image: url("/images/image1.jpg");
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
      }

      .home-member-btn {
        display: inline-block;
        cursor: pointer;
        font-size: calc(15px + 0.05vw);
        border-radius: calc(0.05vw + 17px);
        color: rgb(255, 255, 255);
        padding: 8px 15px;
        background-color: rgb(0, 51, 161);
        margin-bottom: 5px;
        margin-top: 5px;
      }
      .home-member-btn > a {
        color: inherit;
        text-decoration: none;
      }

      .special-clinic-container {
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;
        padding-top: 10px;
      }

      .special-clinic-content {
        display: flex;
        flex-direction: row;
      }

      .special-clinic-img {
        width: clamp(200px, 30%, 250px);
        flex-shrink: 0;
        aspect-ratio: 1;
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        transition: background-size 0.7s ease-in-out;
      }
      .special-clinic-text {
        padding: 5px 10px;
        flex-grow: 1;
        background-color: rgb(247, 247, 247);
      }
      .special-clinic-text > h3 {
        margin: 10px 0;
        padding-bottom: 5px;
        font-weight: 600;
        font-size: calc(16px + 0.1vw);
        color: rgb(0, 51, 161);
      }
      .special-clinic-text > p {
        font-size: calc(14px + 0.1vw);
        line-height: calc(23px + 0.1vw);
        font-weight: 300;
        padding-bottom: 15px;
        margin: 0;
      }
      .special-clinic-btn {
        display: inline-block;
        cursor: pointer;
        font-size: 15px;
        border-radius: 15px;
        color: #FFFFFF;
        padding: 6px 10px;
        background-color: rgb(0, 51, 161);
        margin-bottom: 5px;
      }
      .special-clinic-btn > a {
        color: inherit;
        text-decoration: none;
      }

      .home-info {
        display: flex;
        flex-direction: row;
      }

      .home-info-map {
        width: 55%;
      }

      .home-info-content {
        width: 45%;
        padding-left: 2.5vw;
      }
      .home-info-call-above {
        color: rgb(81, 79, 79);
        font-size: clamp(18px, calc(17px + 0.1vw), 21px);
        font-weight: 500;
        margin: 12px 0;
      }
      .home-info-call {
        display: flex;
        align-items: center;
        color: rgb(97, 96, 96);
        font-size: clamp(23px, calc(22px + 0.1vw), 25px);
        font-weight: 800;
        margin: 7px 0;
        padding-bottom: 15px;
      }
      #info-img {
        width: clamp(21px, calc(20px + 0.1vw), 24px);
      }

      .home-info-time {
        display: flex;
        padding-bottom: 7px;
        font-size: 15px;
      }
      .home-info-time > div {
        white-space: nowrap;
        display: flex;
        width: 60px;
        justify-content: space-between;
      }

      .home-info-red {
        color: rgb(184, 37, 37);
        font-size: 15px;
        margin: 10px 0;
      }
      .home-info-location {
        font-size: 15px;
        margin: 10px 0;
      }

      #time {
        color: rgb(101, 99, 99);
      }

    }
    @media (min-width: 400px) and (max-width: 600px) {

      & > h2 {
        font-size: calc(16px + 0.05vw);
      }
      & > p {
        font-size: calc(13px + 0.05vw);
      }

      padding: 0 4vw;

      .home-member-container {
        display: flex;
        padding-top: 0;
      }
      .home-member-content {
        flex-grow: 1;
        text-align: center;
        
      }

      .home-member-content > h4 {
        font-size: 13px;
        margin: 5px 0;
      }
      .home-member-content-img {
        width: 40px;
      }
      .home-member-content > h3 {
        color: rgb(0, 51, 161);
        font-size: 16px;
        margin: 3px 0;
      }
      .home-member-text {
        font-size: 12px;
        margin: 5px 0;
      }
      .home-member-name {
        font-size: 12px;
        margin: 5px 0;
        font-weight: 700;
      }
      .home-member-img {
        width: clamp(100px, 50%, 300px);
        flex-shrink: 0;
        background-image: url("/images/image1.jpg");
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        
      }

      .home-member-btn {
        display: inline-block;
        cursor: pointer;
        font-size: 12px;
        border-radius: 15px;
        color: rgb(255, 255, 255);
        padding: 6px 12px;
        background-color: rgb(0, 51, 161);
        margin-bottom: 5px;
      }
      .home-member-btn > a {
        color: inherit;
        text-decoration: none;
      }

      .special-clinic-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        padding-top: 10px;
      }

      .special-clinic-content {
        display: flex;
        flex-direction: column;
      }

      .special-clinic-img {
        width: 100%;
        aspect-ratio: 1;
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        transition: background-size 0.7s ease-in-out;
      }
      .special-clinic-text {
        padding: 5px 3px;
        flex-grow: 1;
        background-color: rgb(247, 247, 247);
      }
      .special-clinic-text > h3 {
        margin: 5px 0;
        font-weight: 500;
        font-size: 14px;
        color: rgb(0, 51, 161);
        display: none;
      }
      .special-clinic-text > p {
        font-size: calc(11px + 0.1vw);
        line-height: calc(18px + 0.1vw);
        font-weight: 300;
        margin: 0;
        display: none;
      }
      .special-clinic-btn {
        display: inline-block;
        cursor: pointer;
        font-size: 10.5px;
        border-radius: 12px;
        color: #FFFFFF;
        padding: 6px 8px;
        background-color: rgb(0, 51, 161);
        margin: 10px 0;
      }
      .special-clinic-btn > a {
        color: inherit;
        text-decoration: none;
      }
      #button-container {
        text-align: center;
      }

      .home-info {
        display: flex;
        flex-direction: row;
      }

      .home-info-map {
        width: 45%;
        flex-shrink: 0;
      }

      .home-info-content {
        width: 55%;
        padding-left: 2vw;
        padding-top: 5px;
      }
      .home-info-call-above {
        color: rgb(81, 79, 79);
        font-size: 13px;
        margin: 0;
        font-weight: 500;
      }
      .home-info-call {
        display: flex;
        align-items: center;
        color: rgb(97, 96, 96);
        font-size: 17px;
        font-weight: 800;
        margin-top: 5px;
        margin-bottom: 10px;
      }
      #info-img {
        width: 15px;
      }

      .home-info-time {
        display: flex;
        padding-bottom: 3px;
        font-size: 10px;
      }
      .home-info-time > div {
        white-space: nowrap;
        display: flex;
        width: 40px;
        justify-content: space-between;
      }

      .home-info-red {
        color: rgb(184, 37, 37);
        font-size: 11px;
        margin: 5px 0;
      }

      .home-info-location {
        font-size: 11.5px;
        margin: 0;
      }

      #time {
        color: rgb(101, 99, 99);
      }
    }

    @media (max-width: 400px) {
      & > h2 {
        font-size: calc(16px + 0.05vw);
      }
      & > p {
        font-size: calc(12px + 0.05vw);
        line-height: 20px;
      }

      padding: 0 4vw;

      .home-member-container {
        display: flex;
        padding-top: 0;
      }
      .home-member-content {
        flex-grow: 1;
        text-align: center;
        
      }

      .home-member-content > h4 {
        font-size: 12px;
        margin: 2px 0;
      }
      .home-member-content-img {
        width: 30px;
      }
      .home-member-content > h3 {
        color: rgb(0, 51, 161);
        font-size: 14px;
        margin: 2px 0;
      }
      .home-member-text {
        font-size: 10px;
        margin: 5px 0;
      }
      .home-member-name {
        font-size: 12px;
        margin: 4px 0;
        font-weight: 700;
      }
      .home-member-img {
        width: clamp(100px, 50%, 300px);
        flex-shrink: 0;
        background-image: url("/images/image1.jpg");
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        
      }

      .home-member-btn {
        display: inline-block;
        cursor: pointer;
        font-size: 11px;
        border-radius: 15px;
        color: rgb(255, 255, 255);
        padding: 5px 11px;
        background-color: rgb(0, 51, 161);
        margin-bottom: 5px;
      }
      .home-member-btn > a {
        color: inherit;
        text-decoration: none;
      }

      .special-clinic-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        padding-top: 10px;
      }

      .special-clinic-content {
        display: flex;
        flex-direction: column;
      }

      .special-clinic-img {
        width: 100%;
        aspect-ratio: 1;
        background-position: center;
        background-size: auto 100%;
        background-repeat: no-repeat;
        transition: background-size 0.7s ease-in-out;
      }
      .special-clinic-text {
        padding: 5px 3px;
        flex-grow: 1;
        background-color: rgb(247, 247, 247);
      }
      .special-clinic-text > h3 {
        margin: 5px 0;
        font-weight: 500;
        font-size: 14px;
        color: rgb(0, 51, 161);
        display: none;
      }
      .special-clinic-text > p {
        font-size: calc(11px + 0.1vw);
        line-height: calc(18px + 0.1vw);
        font-weight: 300;
        margin: 0;
        display: none;
      }
      .special-clinic-btn {
        display: inline-block;
        cursor: pointer;
        font-size: 10.5px;
        border-radius: 12px;
        color: #FFFFFF;
        padding: 6px 8px;
        background-color: rgb(0, 51, 161);
        margin: 10px 0;
      }
      .special-clinic-btn > a {
        color: inherit;
        text-decoration: none;
      }
      #button-container {
        text-align: center;
      }

      .home-info {
        display: flex;
        flex-direction: row;
      }

      .home-info-map {
        width: 45%;
        flex-shrink: 0;
      }

      .home-info-content {
        width: 55%;
        padding-left: 2vw;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .home-info-call-above {
        color: rgb(81, 79, 79);
        font-size: 13px;
        margin: 0;
        font-weight: 500;
      }
      .home-info-call {
        display: flex;
        align-items: center;
        color: rgb(97, 96, 96);
        font-size: 17px;
        font-weight: 800;
        margin-top: 5px;
        margin-bottom: 10px;
      }
      #info-img {
        width: 15px;
      }

      .home-info-time {
        display: flex;
        padding-bottom: 3px;
        font-size: 10px;
      }
      .home-info-time > div {
        white-space: nowrap;
        display: flex;
        width: 40px;
        justify-content: space-between;
      }

      .home-info-red {
        color: rgb(184, 37, 37);
        font-size: 11px;
        margin: 5px 0;
      }

      .home-info-location {
        font-size: 10px;
        margin: 0;
      }

      #time {
        color: rgb(101, 99, 99);
      }
    }
  `


  return (
    <>
      <HomePictureFrame>
        <ImageSlider/>
      </HomePictureFrame>
      <HomeContentFrame>
        <div className="line-deco"/>
        <h2>의료진 소개</h2>
        <div className="home-member-container">
          <div className="home-member-content">
            <img src="/images/only_logo.png" className="home-member-content-img"/>
            <h4>전국 유일 모야모야 특화 병원</h4>
            <h3>홍지만신경과의원</h3>
            <p className="home-member-text">신경계 질환으로 일상을 잃은 환자들이 다시 평범한 삶으로 돌아갈 수 있도록 항상 최선을 다하겠습니다</p>
            <p className="home-member-name">대표원장 홍지만 / 원장 김홍남</p>
            <div className="home-member-btn">
              <a href="/about/1">
                &gt;&gt;&nbsp;의료진 소개
              </a>
            </div>
          </div>
          <div className="home-member-img"></div>
        </div>

        <div className="line-deco"/>
        <h2>특화센터 소개</h2>
        <p>홍지만신경과에는 개쩌는 특수센터가 있으니까 많이많이 오십셔</p>
        <div className="special-clinic-container">
          {
            clinicList.map((e, i)=>{
              return (
                <div key={i} className="special-clinic-content">
                  {/* 무조건 가로가 더 긴 사진이여야됨. */}
                  <div className="special-clinic-img" style={{backgroundImage: `url(${e.image})`}}/>
                  <div className="special-clinic-text">
                    <h3>{e.title}</h3>
                    <p>{e.content}</p>
                    <div id="button-container">
                      <div className="special-clinic-btn">
                        <a href={e.path}>
                          &gt;&gt;&nbsp;{e.title.length > 13 ? <>뇌졸중 · 치매 통합센터</> : e.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>

        <div className="line-deco"/>
        <h2>병원 공지사항</h2>
        <ResponsiveSlider/>

        <div className="line-deco"/>
        <h2>진료 안내</h2>
        <div className="home-info">
          <div className="home-info-map"><NaverMap/></div>
          <div className="home-info-content">
            <p className="home-info-call-above">예약 및 상담 문의</p>
            <p className="home-info-call"><img src="/images/call_icon.png" id="info-img"/>
            &nbsp;031-222-3317
            </p>
            <div className="home-info-time"><div><span>평</span><span>일</span></div>
            <div id="time"></div></div>
            <div className="home-info-time"><div><span>토</span><span>요</span><span>일</span></div>
            <div id="time"></div></div>
            <div className="home-info-time"><div><span>점</span><span>심</span><span>시</span><span>간</span></div>
            <div id="time">&nbsp;&nbsp;&nbsp;&nbsp;하루종일</div></div>
            <p className="home-info-red">* 일요일 · 공휴일 휴진</p>
            <p className="home-info-location">수원시 팔달구 경수대로546 (인계동)</p>
          </div>
        </div>
      </HomeContentFrame>
    </>
  )
}

export default Home