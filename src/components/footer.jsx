import styled from "styled-components";
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  
  const Footer = styled.div`
    background-color: #222222;
    color: #EEEEEE;
    position: relative;

    & > h3 {
      padding-bottom: 20px;
      padding-top: 20px;
      margin: 0;
      font-size: 20px;
      font-weight: 500;
    }
    & > p {
      font-weight: 300;
      margin: 0;
      color: #BBBBBB;
      padding: 3px 0;
      font-size: 16px;
    }
    .copyright {
      font-weight: 100;
      font-size: 15px;
      opacity: 0.7;
      padding-top: 15px;
    }
    .footer-logo {
      width: 200px;
      height: auto;
      padding-top: 30px;
      padding-bottom: 20px;
      opacity: 0.8;
    }

    @media (min-width: 1200px) {
      padding: 10px 10vw;

      .policy {
        position: absolute;
        right: 10vw;
        top: 74px;
      }
    }
    @media (min-width: 600px) and (max-width: 1200px) {
      padding: 10px 4vw;
      & > h3 {
        font-size: 18px;
      }
      & > p {
        font-size: 15px;
      }
      .copyright {
        font-size: 14px;
        padding-top: 12px;
        padding-bottom: 20px;
      }
      .footer-logo {
        width: 160px;
        position: absolute;
        right: 4vw;
        bottom: 20px;
      }

      .policy {
        position: absolute;
        right: 4vw;
        top: 70.8px;
      }
    }
    @media (max-width: 600px) {
      padding: 1.5vh 4vw;

      & > h3 {
        font-size: 16px;
        padding-bottom: 10px;
        padding-top: 10px;
      }
      & > p {
        font-size: 12px;
      }
      .copyright {
        font-size: 11px;
        padding-top: 10px;
        line-height: 16px;
      }
      .policy {
        padding-top: 10px;
        font-size: 11px;
      }
      .footer-logo {
        width: 140px;
        padding-bottom: 10px;
        padding-top: 20px;
      }
    }
  `
  return (
    <Footer ref={ref}>
      <h3>홍지만 신경과</h3>
      <p>
        수원시 팔달구 경수대로546 (인계동)
      </p>
      <p>
        Tel. 031.222.3317
      </p>
      <p>
        Fax. 031.221.3318
      </p>
      <p className="copyright">
        Copyright©2025 Dr.Hong's Special Neurology Centre.<br/>
        Designed by noryangjinLab
      </p>
      <p className="policy"><span style={{cursor: "pointer"}} onClick={()=>window.location.href = "/privacy-policy"}>개인정보처리방침</span>&nbsp;&nbsp;|&nbsp;&nbsp; 
      <span style={{cursor: "pointer"}} onClick={()=>window.location.href = "/patient-rights"}>환자권리장전</span></p>
      <img className="footer-logo" src="/images/logo_white.png"/>
    </Footer>
  )
})

export default Footer