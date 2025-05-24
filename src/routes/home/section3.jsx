import styled from "styled-components";
import {centerData} from "../../data/centerdata.js"
import { useNavigate } from "react-router-dom";
import { useEffect,useRef } from "react";

const ThirdSection = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0 10vw;
  width: calc(100% - 20vw);

  @media (max-width: 1200px) {
    padding: 0 4vw;
    width: calc(100% - 8vw);
  }

  h2 {
    margin: 0;
    font-size: calc(22px + 0.1vw);
    color: rgb(0, 51, 161);
    opacity: 0;
  }
  h2 > span {
    font-weight: 300;
    font-size: calc(20px + 0.1vw);
    color: black;
  }

  h2.visible {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  h4 {
    opacity: 0;
    font-weight: 200;
    text-align: center;
    font-size: calc(13px + 0.1vw);
    line-height: calc(20px + 0.1vw);
    margin: 13px 10px;
  }

  h4.visible {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .home-center-container {
    padding-top: 10px;
    display: grid;
    height: 70%;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }

  .home-center-box {
    opacity: 0;
    position: relative;
    will-change: opacity, transform;
    transition: opacity 0.9s ease-in-out, transform 0.9s ease-in-out;
    transform: translateY(15px);
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;
  }

  .home-center-box::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4); /* 안쪽 그림자 */
    z-index: 5;
    pointer-events: none;
  }

  .home-center-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .home-center-title {
    color: white;
    margin: 0;
    position: absolute;
    top: 15%;
    width: 100%;
    z-index: 10;
    opacity: 1;
    font-size: calc(0.05vw + 16px);
    font-weight: 500;
    text-shadow: 0 0 4px rgb(0, 0, 0);

    @media (max-width: 600px) {
      font-size: 13.5px;
    }
  }

  .home-center-box.visible {
    opacity: 1;
    transform: translateY(0);
  }
    
`

function Section3() {

  const navigate = useNavigate()
  const elementsRef = useRef([])

  useEffect(()=>{
    
    const targets = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 200);
        }
      });
    }, {
      threshold: 0.01
    });

    targets.forEach((el) => el && observer.observe(el));

    return () => {
      targets.forEach((el) => el && observer.unobserve(el));
    };
  }, )

  return (
    <ThirdSection>
      <h2 ref={(el) => elementsRef.current[6] = el}><span>홍지만신경과</span>&nbsp;&nbsp;특화센터</h2>
      <h4
        ref={(el) => elementsRef.current[7] = el}
      >대학병원 수준의 집중치료실과 영상실을 통합한 시스템을 갖추어, 초기 진단부터 치료까지 한 곳에서 신속하게 진행할 수 있습니다</h4>
      <div className="home-center-container">
      {
        centerData.map((e, i)=>{
          return(
            <div
              className="home-center-box"
              onClick={()=>{navigate(e.path)}}
              ref={(el) => elementsRef.current[i] = el}
            >
              <img loading="lazy" className="home-center-img" src={e.homeImg}/>
              <h4 className="home-center-title">{e.hometitle}</h4>
            </div>
          )
        })
      }
      </div>
    </ThirdSection>
  )
}

export default Section3