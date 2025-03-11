import styled from "styled-components"
import ImageSlider from "../components/imageSlide"
import { useState } from "react"
// import ResponsiveSlider from "../components/homeNoticeSlide"
import NaverMap from "../components/NaverMap"
import { HomeMovie } from "../components/homemovie"
import { centerData } from "../data/centerdata"

function Home() {

  let [clinicList] = useState(centerData)

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
      margin-top: 60px;
      margin-bottom: 10px;
      height: 3.5px;
      min-height: 3.5px;
      max-height: 3.5px;
      width: 60px;
      background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
    }

    .home-member-btn, .special-clinic-btn {
      border: 1px solid rgb(0, 51, 161);
    }

    .home-member-btn:hover {
      color: rgb(0, 51, 161);
      background-color: rgb(255, 255, 255);
      margin-bottom: 5px;
    }

    .special-clinic-btn: hover {
      color: rgb(0, 51, 161);
      background-color: rgb(255, 255, 255);
      margin-bottom: 5px;
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

      & > h2 {
        font-size: calc(20px + 0.05vw);
      }
      & > p {
        font-size: calc(16px + 0.05vw);
        line-height: calc(27px + 0.05vw);
      }

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
        gap: 17px;
        padding-top: 12px;
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
        font-size: calc(16px + 0.1vw);
        border-radius: calc(22px + 0.1vw);
        color: #FFFFFF;
        padding: 10px 15px;
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

      & > h2 {
        font-size: calc(18px + 0.05vw);
      }
      & > p {
        font-size: calc(16px + 0.05vw);
        line-height: 25px;
      }

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
        grid-template-columns: repeat(2, 1fr);
        gap: 17px;
        padding-top: 12px;
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
        font-size: calc(14px + 0.1vw);
        border-radius: calc(20px + 0.1vw);
        color: #FFFFFF;
        padding: 8px 12px;
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
        font-size: calc(19px + 0.05vw);
      }
      & > p {
        font-size: calc(14px + 0.05vw);
        line-height: 22px;
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
        font-size: calc(18px + 0.05vw);
      }
      & > p {
        font-size: calc(13px + 0.05vw);
        line-height: 21px;
      }

      padding: 0 4vw;

      .home-member-container {
        display: flex;
        padding-top: 0;
      }
      .home-member-content {
        flex-grow: 1;
        text-align: center;
        margin: 5px 3px;
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
        font-size: 11.5px;
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
        font-size: 12px;
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
            {/* <img src="/images/logo/only_logo.png" className="home-member-content-img"/> */}
            <h4>전국 유일 모야모야 특화 병원</h4>
            <h3>홍지만신경과</h3>
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
        <h2>영상 (서비스 예정)</h2>
        <p>아직 꾸미지는 않았고 영상 들어오면 꾸밀 예정이에요</p>
        <HomeMovie></HomeMovie>

        <div className="line-deco"/>
        <h2>특화센터 소개</h2>
        <p>대학병원 수준의 집중치료실과 영상실을 통합한 시스템을 갖추어, 초기 진단부터 치료까지 한 곳에서 신속하게 진행할 수 있습니다. 
          이를 통해 신경학적 악화, 섬망, 내과적 합병증 등의 위험 요소를 최소화하며 환자의 치료 결과를 현저하게 향상시킵니다.</p>
        <div className="special-clinic-container">
          {
            clinicList.map((e, i)=>{
              return (
                <div key={i} className="special-clinic-content">
                  {/* 무조건 가로가 더 긴 사진이여야됨. */}
                  <div className="special-clinic-img" style={{backgroundImage: `url(${e.homeImg})`}}/>
                  <div className="special-clinic-text">
                    <h3>{e.hometitle}</h3>
                    <p>{e.title}</p>
                    <div id="button-container">
                      <div className="special-clinic-btn">
                        <a href={e.path}>
                          &gt;&gt;&nbsp;{e.hometitle.length > 13 ? <>뇌졸중 · 치매 통합센터</> : e.hometitle}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>

        {/*
        공지사항 폐기
        <div className="line-deco"/>
        <h2>병원 공지사항</h2>
        <ResponsiveSlider/>
        */}

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