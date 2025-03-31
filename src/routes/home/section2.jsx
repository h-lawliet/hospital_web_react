import { useEffect, useRef } from 'react';
import styled from 'styled-components';


const SecondSection = styled.div`
  width: 100%;
  height: 100%;

  .home-doctor-img {
    position: absolute;
    bottom: 0;
    height: 80%;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  .home-doctor-img.visible {
    opacity: 1;
  }

  @media (max-width: 600px) {
    .home-doctor-img {
      position: absolute;
      bottom: 0;
      height: 80%;
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
      max-width: 300px;
      text-shadow: 2px 2px 3.5px rgba(201, 197, 197, 0.5);
    }
    .doctor-img-text.visible {
      opacity: 1;
    }

    .doctor-img-title {
      color: white;
      font-size: 17px;
      font-weight: 200;
      line-height: 25px;
      word-break: keep-all;
      overflow-wrap: break-word;
    }

    .doctor-name {
      color: white;
      font-size: 15px;
      font-weight: 100;
      margin: 20px 0;
    }

    #name {
      font-size: 22px;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }
`

function Section2() {
  const elementsRef = useRef([]);

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
        src='/images/home/home2.webp'
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
        <div className='doctor-name'>
          신경과 전문의 / 대표원장&nbsp;&nbsp;&nbsp;
          <span id='name'>홍지만</span>
        </div>
      </div>
    </SecondSection>
  );
}

export default Section2;