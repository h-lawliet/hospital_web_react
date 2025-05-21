import { motion } from 'framer-motion';
import styled from 'styled-components';
import LineDeco from '../../components/line';


const Styledmembers = styled.div`
  width: 100%;

  .member-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 70px;
  }
  
  .motion-member-img {
    width: 45%;
    height: auto;
    position: relative;
    display: inline-block;
    padding: 10px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .motion-member-text {
    display: inline-block;
    position: relative;
    flex: 1;
  }

  .member-name {
    display: inline;
    color: rgb(80, 78, 78);
    font-size: 35px;
    padding: 20px;
  }
  .member-name-2 {
    font-size: 24px;
    color: rgb(115, 113, 113);
  }
  .member-name-3 {
    padding: 20px;
    color: rgb(0, 51, 161);
    font-weight: 500;
    font-size: 18px;
  }
  
  ul {
    color: rgb(115, 113, 113);
    line-height: 2em;
    margin-top: 30px;
    padding-right: 10px;
  }
  li {
    word-break: break-all;
  }

  & > hr {
    margin: 8vh 10%;
  }

  @media (max-width: 700px) {
    .member-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .member-container.second-container {
      flex-direction: column-reverse;
    }
    
    .motion-member-img {
      width: 80%;
      height: auto;
      position: relative;
      display: inline-block;
      padding: 10px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
    }

    .motion-member-text {
      display: inline-block;
      position: relative;
      text-align: justify;
      font-size: 14px;
      margin-top: 20px;
      width: 100%;
    }

    .member-name {
      display: inline;
      color: rgb(80, 78, 78);
      font-size: 30px;
      padding: 15px;
      padding-left: 20px;
    }
    .member-name-2 {
      font-size: 22px;
      color: rgb(115, 113, 113);
    }
    .member-name-3 {
      padding: 15px;
      padding-left: 20px;
      color: rgb(0, 51, 161);
      font-weight: 500;
      font-size: 16px;
    }
    
    ul {
      color: rgb(115, 113, 113);
      line-height: 2em;
      margin-top: 20px;
      padding-left: 20px;
    }
  }
`


function Members() {
  return (
    <Styledmembers>
      <div className='member-container'>
        <div
          className='motion-member-img'
        ><img className='member-image-1' src='/images/about/member1.jpg' style={{
          width: "100%", height: "auto", borderRadius: "20px"
        }}/>
        </div>
        <div
          className='motion-member-text'
        >
        <h3 className='member-name'>홍지만</h3><span className='member-name-2'>대표원장</span>
        <div className='member-name-3'>신경과 전문의 / 뇌졸중 인증의</div>
        <ul>
          <li>2007년: 의학 박사학위 취득</li>
          <li>2013년~2014년: 미국 텍사스 메디컬센터에서 신경계 집중치료학 교환교수로 활동하며 귀국하고, 
            한국에서 신경집중치료 분야의 전문성을 강화하고 국내 전문가를 지속적으로 양성하였음.</li>
          <li>2015년~2021년: 아주대학교 의과대학 신경과학교실 주임교수 및 임상과장으로 6년간 임명되어, 
            신경과의 전반적인 교육과 임상 진료를 이끌었음.</li>
          <li>2018년: 아주대학교병원 신경과 정년 보장교수(Tenure)로 임명되어, 뇌졸중 치료와 연구</li>
          <li>2021년: 아주대학교 일반대학원 융합의과학과 학과장으로 취임하여, 
            융합-의과학 연구 및 석-박사 지도</li>
          <li>대한뇌졸중학회 초대 병원전단계위원장 역임 (한국형 뇌졸중 
            캠페인 “이웃-손-발-시선” 창시, 소방청과 MOU)</li>
          <li>대한신경집중치료학회 교육이사 (신경집중 Hand zone workshop: NICE 아카데미 개발) 
            / 정책이사 역임 (아시아태평양 신경집중치료학회 국제교류 위원장)</li>
          <li>대한신경초음파학회 학술이사 / 연구이사 역임</li>
          <li>現) 전자약 명품화 연구회 부회장</li>
        </ul>
        </div>
      </div>
      <hr/>
      <div className='member-container second-container'>
        <div
          className='motion-member-text'
        >
        <h3 className='member-name'>김홍남</h3><span className='member-name-2'>원장</span>
        <div className='member-name-3'>신경과 전문의</div>
        <ul>
          <li>고려대학교 생명공학 학사</li>
          <li>아주대학교 의학전문대학원 의무 석사</li>
          <li>공중보건의 / 우정보건지소장</li>
          <li>아주대학교 병원 인턴</li>
          <li>아주대학교 병원 신경과 전공의</li>
          <li>아주대학교 병원 신경과 뇌졸중 / 신경이안과 전임의</li>
          <li>대한신경과학회</li>
          <li>대한뇌졸중학회</li>
          <li>대한평형의학회</li>
          <li>대한안신경의학회</li>
          <li>대한두통학회</li>
          <li>급성뇌졸중 인증의</li>
          <li>두통 전문가 과정 수료</li>
          <li>지도 전문의 교육 이수</li>
          <li>TPI 교육 이수</li>
          <li>분당서울대 병원 신경이안과 파견근무</li>
        </ul>
        </div>
        <div
          className='motion-member-img'
        ><img className='member-image-1' src='/images/about/member3.jpg' style={{
          width: "100%", height: "auto", borderRadius: "20px"
        }}/>
        </div>
      </div>
      <hr/>
      <div className='member-container'>
        <div
          className='motion-member-img'
        ><img className='member-image-1' src='/images/about/member2.jpg' style={{
          width: "100%", height: "auto", borderRadius: "20px"
        }}/>
        </div>
        <div
          className='motion-member-text'
        >
        <h3 className='member-name'>김윤희</h3><span className='member-name-2'>원장</span>
        <div className='member-name-3'>영상의학과 전문의</div>
        <ul>
          <li>영남대학교 의과대학</li>
          <li>카톨릭중앙의료원 인턴 및 수련의</li>
          <li>서울대학교병원 전임의(신경두경부)</li>
          <li>분당제생병원 영상의학과 교수</li>
          <li>대한영상의학회 정회원</li>
        </ul>
        </div>
      </div>
    </Styledmembers>
  )
}

export default Members