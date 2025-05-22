import styled from "styled-components";
import {centerData} from "../../data/centerdata.js"
import { useNavigate } from "react-router-dom";
import { useEffect,useRef } from "react";

const ThirdSection = styled.div`

  @keyframes downToUp {
    0% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

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
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    cursor: pointer;
  }

  .home-center-box.visible {
    opacity: 1;
    transition: opacity 1s ease-in-out;
    animation: downToUp 1s ease-in-out;

    & > h4 {
      position: absolute;
      opacity: 1;
      width: 100%;
      margin: 0;
      color: white;
      text-shadow: 0 0 5px rgb(0,0,0);
      font-size: calc(0.1vw + 16px);
      padding-top: calc(0.1vw + 20px);
      font-weight: 600;

      @media (max-width: 800px) {
        font-size: calc(0.1vw + 12.5px);
      }
    }
  }

  .home-center-box:hover {
    background-image: none;
    background-color: rgb(0, 51, 161);
  }
    
`

function Section3() {

  const navigate = useNavigate()
  const elementsRef = useRef([])

  useEffect(()=>{
    
    const targets = elementsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 500);
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
              style={{
                backgroundImage: `url(${e.homeImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                position: "relative"
              }}
              onClick={()=>{navigate(e.path)}}
              ref={(el) => elementsRef.current[i] = el}
            >
              <h4>{e.hometitle}</h4>
            </div>
          )
        })
      }
      </div>
    </ThirdSection>
  )
}

export default Section3