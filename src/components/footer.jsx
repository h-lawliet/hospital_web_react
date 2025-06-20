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
      color:rgb(227, 227, 227);
      padding: 2.5px 0;
      font-size: 16px;
    }
    .address {
      padding-bottom: 5px;
    }
    .copyright {
      font-weight: 100;
      font-size: 15px;
      opacity: 0.7;
      padding-top: 15px;
      line-height: 20px;
      padding-bottom: 20px;
    }
    .footer-logo {
      width: 200px;
      height: auto;
      padding-top: 30px;
      padding-bottom: 20px;
      opacity: 0.8;
      position: absolute;
      right: 10vw;
      bottom: 20px;
    }

    .bold {
      font-weight: 700;
    }

    .space {
      padding: 8px 0;
    }

    #gray {
      color: #a5a5a5;
    }

    @media (min-width: 1200px) {
      padding: 10px 10vw;

      .policy {
        position: absolute;
        right: 10vw;
        top: 74px;
      }
    }
    @media (min-width: 700px) and (max-width: 1200px) {
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
    @media (max-width: 700px) {
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
      <p className="address">
        <span className="bold">(16484)</span> 수원시 팔달구 경수대로546 (인계동)
      </p>
      <p>
        <span id="gray">Tel.</span> 031.222.3317
      </p>
      <p>
        <span id="gray">Fax.</span> 031.221.3318
      </p>
      <p className="space">
        <span id="gray">대표자</span>&nbsp;<span className="bold">홍지만</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span id="gray">사업자 등록번호</span>&nbsp;221-96-57705
      </p>
      <p className="copyright">
        Copyright©2025 Dr.Hong's Special Neurology Centre.<br/>
        Designed by noryangjinLab
      </p>
      <p className="policy"><span style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/0"}>개인정보처리방침</span>&nbsp;&nbsp;|&nbsp;&nbsp; 
      <span style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/1"}>비급여항목</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/2"}>환자권리장전</span></p>
      <img className="footer-logo" src="/images/logo_white.png"/>
    </Footer>
  )
})

export default Footer