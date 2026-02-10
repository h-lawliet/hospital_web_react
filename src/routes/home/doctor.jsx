import { useEffect, useState } from "react"
import styled from "styled-components"

const DoctorBox = styled.div`

  @media (min-width: 1200px) {

    .doctor-box {
      display: flex;
      padding: 130px 10vw 0 10vw;
      background-color: white;
    }

    .doctor-img-flex {
      width: calc(50% - 5vw);
      display: flex;
    }
    .doctor-img-box {
      width: 100%;
      margin-top: auto;
    }

    .doctor-text {
      flex: 1;
      padding-left: 5vw;
      padding-bottom: 110px;
    }

    .doctor-text > h2 {
      font-size: 45px;
      margin: 0;
      padding-bottom: 10px;
    }

    #h2-sub {
      color: rgb(0, 51, 161);
      font-size: 32px;
      padding-left: 12px;
      font-weight: 400;
    }

    .doctor-text > h3 {
      font-size: 21px;
      font-weight: 200;
      margin: 0;
    }

    #deco {
      width: calc(50px + 0.1vw);
      height: 5px;
      margin-bottom: 3px;
      margin-top: 20px;
    }

    .news-text-deco:last-of-type {
      margin-top: 35px;
    }

    .doctor-list {
      list-style: none;
      padding: 0;
      margin: 0;
      padding-top: 40px;
    }
    .doctor-list > li {
      padding: 6px 0;
      font-size: 17px;
      font-weight: 600;
    }


    .greeting-box {
      position: relative;
      height: 700px;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      
      padding: 0 10vw;
    }
    .greeting-box > h3 {
      margin: 0;
      position: relative;
      font-size: 30px;
      font-weight: 400;
      padding-top: 100px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      width: 60%;
      line-height: 50px;
    }
    hr {
      margin: 35px 0;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .greeting-box > p {
      margin: 0;
      font-size: 17px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      // width: 60%;
      // margin-left: auto;
      font-weight: 200;
      padding-top: 10px;
      line-height: 30px;
      text-align: justify;
      word-break: break-all;
    }
    .greeting-box > h4 {
      font-size: 30px;
      margin: 0;
      position: absolute;
      bottom: 110px;
      right: 10vw;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    #h4-sub {
      font-weight: 400;
      font-size: 20px;
    }
  }


  @media (min-width: 600px) and (max-width: 1200px) {

    .doctor-box {
      display: flex;
      flex-direction: row;
      padding: 90px 7vw 90px 7vw;
      background-color: white;
      align-items: center;
    }

    .doctor-img-flex {
      width: calc(50% - 5vw);
      display: flex;
      align-items: center;
    }
    .doctor-img-box {
      width: 100%;
      border-radius: 7vw;
    }

    .doctor-text {
      flex: 1;
      padding-left: 5vw;
    }

    .doctor-text > h2 {
      font-size: 30px;
      margin: 0;
      padding-bottom: 10px;
    }

    #h2-sub {
      color: rgb(0, 51, 161);
      font-size: 22px;
      padding-left: 10px;
      font-weight: 400;
    }

    .doctor-text > h3 {
      font-size: 18px;
      font-weight: 200;
      margin: 0;
      line-height: 25px;
    }

    .doctor-list {
      list-style: none;
      padding: 0;
      margin: 0;
      padding-top: 40px;
    }
    .doctor-list > li {
      padding: 6px 0;
      font-size: 15px;
      font-weight: 600;
    }


    .greeting-box {
      position: relative;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      
      padding: 0 7vw 170px 7vw;
    }
    .greeting-box > h3 {
      margin: 0;
      position: relative;
      font-size: 18px;
      font-weight: 400;
      padding-top: 90px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      line-height: 35px;
    }
    hr {
      margin: 35px 0;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .greeting-box > p {
      margin: 0;
      font-size: 14px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      font-weight: 200;
      padding-top: 10px;
      line-height: 30px;
      text-align: justify;
      word-break: break-all;
    }
    .greeting-box > h4 {
      font-size: 25px;
      margin: 0;
      position: absolute;
      bottom: 90px;
      right: 7vw;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    #h4-sub {
      font-weight: 400;
      font-size: 15px;
    }
  }


  @media (max-width: 600px) {

    .doctor-box {
      display: flex;
      flex-direction: column;
      padding: 90px 7vw 0 7vw;
      background-color: white;
    }


    .doctor-img-flex {
      width: 100%;
    }
    .doctor-img-box {
      width: 100%;
      border-radius: 7vw;
    }

    .doctor-text {
      width: 100%;
      padding: 40px 0 90px 0;
    }

    .doctor-text > h2 {
      font-size: 30px;
      margin: 0;
      padding-bottom: 10px;
    }

    #h2-sub {
      color: rgb(0, 51, 161);
      font-size: 22px;
      padding-left: 10px;
      font-weight: 400;
    }

    .doctor-text > h3 {
      font-size: 18px;
      font-weight: 200;
      margin: 0;
      line-height: 25px;
    }

    .doctor-list {
      list-style: none;
      padding: 0;
      margin: 0;
      padding-top: 30px;
    }
    .doctor-list > li {
      padding: 6px 0;
      font-size: 15px;
      font-weight: 600;
    }


    .greeting-box {
      position: relative;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      
      padding: 0 7vw 170px 7vw;
    }
    .greeting-box > h3 {
      margin: 0;
      position: relative;
      font-size: 18px;
      font-weight: 400;
      padding-top: 90px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      line-height: 35px;
    }
    hr {
      margin: 35px 0;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    .greeting-box > p {
      margin: 0;
      font-size: 14px;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
      font-weight: 200;
      padding-top: 10px;
      line-height: 30px;
      text-align: justify;
      word-break: break-all;
    }
    .greeting-box > h4 {
      font-size: 25px;
      margin: 0;
      position: absolute;
      bottom: 90px;
      right: 7vw;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
    #h4-sub {
      font-weight: 400;
      font-size: 15px;
    }
  }


`


const Doctor = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <DoctorBox>
      <div className="doctor-box">
        <div className="doctor-img-flex">
        {
          isMobile ? <img className="doctor-img-box" src="/images/home/member1_resized.jpg"/> : 
          <img className="doctor-img-box" src="/images/home/home2.png"/>
        }
        </div>
      

        <div className="doctor-text">
          <h2>홍지만<span id="h2-sub">대표원장 · 의학박사</span></h2>
          <h3>Elsevier, Stanford University 선정 <span id="h3-sub">세계 상위 2% 연구자</span></h3>
          
          <ul className="doctor-list">
            <li>2019년 보건복지부 장관상</li>
            <li>2020년 행정안전부(소방청) 장관상</li>
            <li>2023년 산업자원부 장관상</li>
          </ul>
          
          <ul className="doctor-list">
            <li>아주대학교 신경과 의학박사 학위</li>
            <li>텍사스 메디컬센터 신경계 집중치료학 교환교수</li>
            <li>아주대학교병원 신경과 정년 보장교수(Tenure)</li>
            <li>前 아주대학교 의과대학 신경과학교실 주임교수 및 임상과장</li>
            <li>前 아주대학교 일반대학원 융합의과학과 학과장</li>
            <li>前 대한뇌졸중학회 초대 병원전단계위원장</li>
            <li>前 아주대학교 연구중심병원 뇌혈관부분 세부책임자</li>
            <li>前 대한신경집중치료학회 교육이사 / 정책이사</li>
            <li>前 대한신경초음파학회 학술이사 / 연구이사</li>
          </ul>
        </div>
      </div>

      <div className="greeting-box">
        {
          isMobile ? <h3>신경계 질환으로 일상을 잃은 환자들이 다시 평범한 삶으로 돌아갈 수 있도록 <br/>항상 최선을 다하겠습니다.</h3> : 
          <h3>신경계 질환으로 일상을 잃은 환자들이 <br/>다시 평범한 삶으로 돌아갈 수 있도록 <br/>항상 최선을 다하겠습니다.</h3>
        }
    
        <hr/>
        <p>
          안녕하세요. 홍지만신경과 대표원장 홍지만입니다. 
          저는 신경과 전문의로 23년, 그리고 아주대학교병원에서 급성 중증 뇌졸중을 진료하고 
          학생들과 레지던트, 전임의를 교육한 지 20년이 넘었습니다. 
          이러한 경험을 바탕으로 신경계 질환으로 일상을 잃은 환자들이 다시 평범한 삶으로 돌아갈 수 있도록 
          돕겠다는 사명을 가지고 병원을 개원하였습니다.<br/>
          저희만의 철학을 바탕으로 저와 직원들은 환자분들의 작은 기적을 함께 만들어 가고자 합니다. 
          환자 한 분 한 분이 다시 평범한 일상으로 돌아가는 그날까지 최선을 다하겠습니다. 
          언제든지 병원을 방문하시거나 전화로 문의 주시면 친절히 상담해 드리겠습니다.<br/>
          감사합니다.
        </p>
        <h4><span id="h4-sub">신경과 전문의 / 대표원장</span> 홍지만</h4>
      </div>
    </DoctorBox>
  )
}

export default Doctor