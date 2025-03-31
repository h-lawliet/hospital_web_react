import styled from "styled-components";
import {centerData} from "../../data/centerdata.js"
import { useNavigate } from "react-router-dom";

const ThirdSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 88vh;

  @media (max-width: 1200px) {
    height: calc(100vh - 100px);
  }

  h2 {
    margin: 0;
    font-size: calc(22px + 0.1vw);
    color: rgb(0, 51, 161);
  }
  h2 > span {
    font-weight: 300;
    font-size: calc(20px + 0.1vw);
    color: black;
  }

  h4 {
    font-weight: 200;
    text-align: center;
    font-size: calc(13px + 0.1vw);
    line-height: calc(20px + 0.1vw);
    margin: 13px 10px;
  }

  .home-center-container {
    padding-top: 10px;
    display: grid;
    height: 70%;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .home-center-box {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .home-center-box:hover {

  }
    
`

function Section3() {

  const navigate = useNavigate()

  return (
    <ThirdSection>
      <h2><span>홍지만신경과</span>&nbsp;&nbsp;특화센터</h2>
      <h4>대학병원 수준의 집중치료실과 영상실을 통합한 시스템을 갖추어, 초기 진단부터 치료까지 한 곳에서 신속하게 진행할 수 있습니다</h4>
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
                backgroundSize: "cover"
              }}
              onClick={()=>{navigate(e.path)}}
            >
            
            </div>
          )
        })
      }
      </div>
    </ThirdSection>
  )
}

export default Section3