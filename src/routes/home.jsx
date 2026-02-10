import { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./home.css"
import Footer from '../components/footer';
import HomeSlider from '../components/homeslider1';
import PopNotice from '../components/PopNotice';
import styled from 'styled-components';
import HomeInfo from '../components/homeInfo';
import News from './home/news';
import Doctor from './home/doctor';
import HomeCenter from './home/homeCenter';
import HomeVideo from './home/homeVideo';



const History = styled.div`
  background-color: white;


  @media (min-width: 1200px) {
    padding: 130px 10vw;

    #deco {
      width: calc(50px + 0.1vw);
      height: 5px;
      padding-bottom: 3px;
    }

    h3 {
      font-weight: 400;
      margin: 0;
      font-size: 30px;
    }
    p {
      font-weight: 200;
      font-size: 13px;
    }

    .history-overflow {
      overflow-x: auto;
      height: 500px;
    }

    .history-overflow > img {
      height: calc(100% - 10px);
    }
  }

  
  @media (min-width: 600px) and (max-width: 1200px) {
    padding: 90px 7vw;

    .news-text-deco {
      width: calc(30px + 1vw);
      height: 4px;
      background-color: rgb(0, 51, 161);
      margin-bottom: 10px;
    }

    h3 {
      font-weight: 500;
      margin: 0;
      font-size: calc(20px + 0.4vw);
    }
    p {
      font-weight: 200;
      font-size: 13px;
    }

    .history-overflow {
      overflow-x: auto;
      height: 400px;
    }

    .history-overflow > img {
      height: calc(100% - 10px);
    }
  }


  @media (max-width: 600px) {
    padding: 90px 7vw;

    .news-text-deco {
      width: calc(30px + 1vw);
      height: 4px;
      background-color: rgb(0, 51, 161);
      margin-bottom: 10px;
    }

    h3 {
      font-weight: 500;
      margin: 0;
      font-size: calc(18px + 0.5vw);
    }
    p {
      font-weight: 200;
      font-size: 13px;
    }

    .history-overflow {
      overflow-x: auto;
      height: 350px;
    }

    .history-overflow > img {
      height: calc(100% - 10px);
    }
  }
`


const FullpageComponent = () => {
  const fullpageRef = useRef(null);
  
  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: (window.__ENV__ && window.__ENV__.FULLPAGE_KEY) || "",
      scrollingSpeed: 700,
      touchSensitivity: 30,
      autoScrolling: true,
      fitToSection: true,
      autoHeight: true,
      fitToSectionDelay: 2300,
      scrollBar: false,
      css3: false
    });

  }, []);
  

  return (
    <div id="fullpage" ref={fullpageRef}>
      <PopNotice/>
      <div className="section">
        <HomeSlider/>
      </div>


      <div className="section section-home">
        <div style={{ backgroundColor: "white" }}>

          <HomeCenter/>
        </div>
        
        <Doctor/>

        <div style={{ backgroundColor: "white" }}>
          <News/>
        
          <History>
            
            <h3>모야모야병 · 뇌졸중&nbsp;<span style={{
              color: "rgb(0, 51, 161)",
              fontWeight: 800
            }}>특화 연구 발자취</span></h3>
            <p>&#8251; 좌우로 스크롤하여 확인하실 수 있습니다</p>
            <div className='history-overflow'>
              <img src='/images/home/history.png'/>
            </div>
          </History>

          <HomeVideo/>

          <HomeInfo/>
          
          <Footer/>
        </div>
        
      </div>
    </div>
  );
};

export default FullpageComponent;