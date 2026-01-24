import { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./home.css"
import Footer from '../components/footer';
import HomeSlider from '../components/homeslider1';
import PopNotice from '../components/PopNotice';
import styled from 'styled-components';
import HomeInfo from '../components/homeInfo';



const HomeContant = styled.div`
  @media (min-width: 1200px) {
    padding: 0 10vw;
  }
`

const History = styled.div`

  h3 {
    // color: rgb(0, 51, 161);
    font-weight: 500;
    
    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
  p {
    font-weight: 200;
    font-size: 13px;
  }


  .history-overflow {
    overflow-x: auto;

    @media (min-width: 1200px) {
      height: 500px;
    }
  }

  .history-overflow::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }

  .history-overflow > img {
    height: calc(100% - 10px);
  }
`

const FullpageComponent = () => {
  const fullpageRef = useRef(null);
  
  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: (window.__ENV__ && window.__ENV__.FULLPAGE_KEY) || "",
      scrollingSpeed: 700,
      touchSensitivity: 20,
      autoScrolling: true,
      fitToSection: true,
      autoHeight: true,
      fitToSectionDelay: 2300
    });

  }, []);
  

  return (
    <div id="fullpage" ref={fullpageRef}>
      <PopNotice/>
      <div className="section">
        <HomeSlider/>
      </div>


      <div className="section section-home">
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <HomeContant>


          <History>
            <h3>모야모야병, 뇌졸중 <span style={{color: "#7f99cf"}}>특화 연구 발자취</span></h3>
            <p>&#8251; 좌우로 스크롤하여 확인하실 수 있습니다</p>
            <div className='history-overflow'>
              <img src='/images/home/history.png'/>
            </div>
          </History>


        </HomeContant>

        <HomeInfo/>
        
        <Footer/>
      </div>
    </div>
  );
};

export default FullpageComponent;