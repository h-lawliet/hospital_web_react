import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const SecondSection = styled.div`
  width: 100%;
  height: 100%;

  .home-doctor-img.visible {
    opacity: 1;
  }

  @media (max-width: 600px) {
    .home-doctor-img {
      position: absolute;
      bottom: 0;
      height: 63%;
      left: 30%;
      z-index: 100;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .doctor-img-text {
      position: absolute;
      opacity: 0;
      padding-right: 4vw;
      transition: opacity 1.2s ease-in-out;
      left: 4vw;
      top: 120px;
      z-index: 101;
      max-width: 300px;
      text-shadow: 2px 2px 3.5px rgba(201, 197, 197, 0.5);
    }
    .doctor-img-text.visible {
      opacity: 1;
    }

    .doctor-img-title {
      color: white;
      font-size: 15px;
      font-weight: 200;
      opacity: 1;
      line-height: 25px;
      word-break: keep-all;
      overflow-wrap: break-word;
    }

    .doctor-paragraph {
      display: none;
    }

    .jasehi {
      color: white;
      opacity: 0.4;
      font-size: 13px;
      cursor: pointer;
      font-weight: 100;
    }

    .doctor-name {
      color: white;
      font-size: 14px;
      font-weight: 100;
      margin: 30px 0;
      position: relative;
    }

    .handwrite {
      position: absolute;
      left: 145px;
      width: 80px;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    .home-doctor-img {
      position: absolute;
      bottom: 0;
      height: 63%;
      right: 4vw;
      z-index: 100;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .doctor-img-text {
      position: absolute;
      opacity: 0;
      transition: opacity 1.2s ease-in-out;
      left: 4vw;
      top: 120px;
      z-index: 101;
      width: clamp(400px, 60%, 800px);
      text-shadow: 2px 2px 3.5px rgba(201, 197, 197, 0.5);
    }
    .doctor-img-text.visible {
      opacity: 1;
    }

    .doctor-img-title {
      color: white;
      font-size: 19px;
      font-weight: 200;
      line-height: 35px;
      word-break: keep-all;
      overflow-wrap: break-word;
    }

    .doctor-paragraph {
      padding-top: 18px;
      opacity: 0.8;
      color: white;
      font-size: 15px;
      font-weight: 200;
      line-height: 27px;
      word-break: keep-all;
      overflow-wrap: break-word;
      padding-bottom: 10px;
    }

    .jasehi {
      color: white;
      opacity: 0.4;
      font-size: 14px;
      cursor: pointer;
      font-weight: 100;
    }

    .doctor-name {
      color: white;
      font-size: 15px;
      font-weight: 100;
      margin: 35px 0;
      position: relative;
    }

    .handwrite {
      position: absolute;
      left: 155px;
      width: 106px;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 1200px) {
    .home-doctor-img {
      position: absolute;
      bottom: 0;
      height: 70%;
      right: 10vw;
      z-index: 100;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .doctor-img-text {
      position: absolute;
      opacity: 0;
      transition: opacity 1.2s ease-in-out;
      left: 10vw;
      top: 120px;
      z-index: 101;
      width: 57%;
      text-shadow: 0 0 3.5px rgba(201, 197, 197, 0.5);
    }
    .doctor-img-text.visible {
      opacity: 1;
    }

    .doctor-img-title {
      color: white;
      font-size: 22px;
      font-weight: 200;
      line-height: 35px;
      word-break: keep-all;
      overflow-wrap: break-word;
      padding-top: 20px;
    }

    .doctor-paragraph {
      padding-top: 20px;
      opacity: 0.8;
      color: white;
      font-size: 17px;
      font-weight: 200;
      line-height: 30px;
      word-break: keep-all;
      overflow-wrap: break-word;
      padding-bottom: 10px;
    }

    .jasehi {
      color: white;
      opacity: 0.4;
      font-size: 15px;
      cursor: pointer;
      font-weight: 100;
    }

    .doctor-name {
      color: white;
      font-size: 16px;
      font-weight: 100;
      margin: 35px 0;
      position: relative;
    }

    .handwrite {
      position: absolute;
      left: 170px;
      width: 106px;
      transform: translateY(-50%);
    }
  }
`

function Section2() {
  const elementsRef = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const targets = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('doctor-img-text')) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 800);
          }

          if (entry.target.classList.contains('home-doctor-img')) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 200);
          }
        }
      });
    }, {
      threshold: 0.01
    });

    targets.forEach((el) => el && observer.observe(el));

    return () => {
      targets.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <SecondSection>
      <img
        ref={(el) => elementsRef.current[0] = el}
        src='/images/home/home2.png'
        loading="lazy"
        decoding="async"
        className='home-doctor-img'
      />
      <div
        ref={(el) => elementsRef.current[1] = el}
        className='doctor-img-text'
      >
        <h1 className='doctor-img-title'>
          신경계 질환으로 일상을 잃은 환자들이 다시 평범한 삶으로 돌아갈 수 있도록 항상 최선을 다하겠습니다
        </h1>
        <div className='doctor-paragraph'>
          안녕하세요. 홍지만신경과 대표원장 홍지만입니다.
          저는 신경과 전문의로 23년, 그리고 아주대학교병원에서 급성 중증 뇌졸중을 진료하고 학생들과 레지던트, 
          전임의를 교육한 지 20년이 넘었습니다. 이러한 경험을 바탕으로 신경계 질환으로 일상을 잃은 환자들이 
          다시 평범한 삶으로 돌아갈 수 있도록 돕겠다는 사명을 가지고 병원을 개원하였습니다.<br/>
          저희만의 철학을 바탕으로 저와 직원들은 환자분들의 작은 기적을 함께 만들어 가고자 합니다. 
          환자 한 분 한 분이 다시 평범한 일상으로 돌아가는 그날까지 최선을 다하겠습니다. 
          언제든지 병원을 방문하시거나 전화로 문의 주시면 친절히 상담해 드리겠습니다.<br/>
          감사합니다.
        </div>
        <div className='jasehi' onClick={()=>{navigate("/about/0")}}>&gt;&gt; 자세히보기</div>
        <div className='doctor-name'>
          신경과 전문의 / 대표원장&nbsp;&nbsp;&nbsp;
          <img src='/images/home/name-handwrite.png' className='handwrite'/>
        </div>
      </div>
    </SecondSection>
  );
}

export default Section2;