import styled from "styled-components";



const Footer = () => {

  const FooterBox = styled.div`

    #hr {
      height: 0.5px;
      background-color: rgba(255, 255, 255, 0.5);
    }

  `

  
  const FooterText = styled.div`

    background-color: #222222;
    color: #EEEEEE;

    @media (min-width: 1200px) {
      padding: 65px 10vw;

    }

    & > h3 {
      padding-bottom: 40px;
      padding-top: 20px;
      margin: 0;
      font-size: 25px;
      font-weight: 500;
    }
    & > p {
      font-weight: 300;
      margin: 0;
      color:rgb(217, 217, 217);
      padding: 2.5px 0;
      font-size: 15px;
    }
    .address {
      padding-bottom: 25px;
      display: flex;
      align-items: center;
    }
    .address-text {
      margin-right: auto;
      font-size: 16px;
    }
    #info {
      font-size: 16px;
      opacity: 0.7;
    }

    .copyright {
      font-weight: 100;
      font-size: 14px;
      opacity: 0.7;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
    }
    
    .copyright > div {
      margin-right: auto;
    }
    .copyright-p {
      margin: 0;
      padding: 2px 0;
    }

    .footer-logo {
      height: 40px;
      width: auto;
      opacity: 0.8;
    }

    .space {
      padding: 8px 0;
    }

    #gray {
      color:rgb(157, 157, 157);
    }

    @media (min-width: 600px) and (max-width: 1200px) {
      padding: 30px 7vw;

      & > h3 {
        padding-bottom: 28px;
        padding-top: 20px;
        margin: 0;
        font-size: 22px;
        font-weight: 500;
      }
      & > p {
        font-weight: 300;
        margin: 0;
        color:rgb(217, 217, 217);
        padding: 2.5px 0;
        font-size: 14px;
      }
      .address {
        padding-bottom: 15px;
        display: flex;
        align-items: center;
      }
      .address-text {
        margin-right: auto;
      }

      #info {
        font-size: 14px;
        opacity: 0.7;
      }

      .copyright {
        font-weight: 100;
        font-size: 13px;
        opacity: 0.7;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
      }
      
      .copyright > div {
        margin-right: auto;
      }
      .copyright-p {
        margin: 0;
        padding: 2px 0;
      }

      .footer-logo {
        height: 40px;
        width: auto;
        opacity: 0.8;
      }

      .space {
        padding: 8px 0;
      }

      #gray {
        color:rgb(157, 157, 157);
      }
    }
      
    @media (max-width: 600px) {
      padding: 30px 7vw;

      & > h3 {
        font-size: 17px;
        padding-bottom: 35px;
        padding-top: 10px;
      }

      .address {
        display: block;
        padding-bottom: 17px;
      }
      .address-text {
        display: block;
        padding-bottom: 5px;
        font-size: 12px;
      }
      #info {
        font-size: 11px;
        opacity: 0.7;
      }

      & > p {
        font-size: 12px;
      }
      .copyright {
        font-size: 11px;
        padding-top: 3px;
        display: block;
        padding-bottom: 0;
      }
      .footer-logo {
        width: 140px;
        height: auto;
        padding-bottom: 10px;
        padding-top: 30px;
      }
    }
  `
  return (

    <FooterBox>

      {/* <div id="hr"/> */}
      
      <FooterText>
        <h3>홍지만신경과의원</h3>

        <p className="address">
          <span className="address-text">수원시 팔달구 경수대로546 (인계동)</span>
          <span id="info" style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/0"}>개인정보처리방침&nbsp;&nbsp;|&nbsp;&nbsp;</span> 
          <span id="info" style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/1"}>비급여항목&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span id="info" style={{cursor: "pointer"}} onClick={()=>window.location.href = "/info/2"}>환자권리장전</span>
        </p>

        <p>
          <span id="gray">Tel.</span> 031.222.3317
        </p>
        <p>
          <span id="gray">Fax.</span> 031.221.3318
        </p>
        <p className="space">
          <span id="gray">대표자</span>&nbsp;<span className="bold">홍지만</span>
          <span id="gray">&nbsp;&nbsp;|&nbsp;&nbsp;사업자 등록번호</span>&nbsp;221-96-57705
        </p>

        <p className="copyright">
          <div>
            <p className="copyright-p">Copyright©2025 Dr.Hong's Special Neurology Centre.</p>
            <p className="copyright-p">Designed and Deployed by <span 
              style={{ fontFamily: "Galmuri9", opacity: 0.7, cursor: "pointer" }}
              onClick={() => { window.open("https://noryangjinlab.org", "_blank", "noopener,noreferrer") }}
            >noryangjinLAB</span></p>
          </div>

          <img className="footer-logo" src="/images/logo_white.png"/>
          {/* <img className="footer-logo" src="/images/logo/astron_logo.png"/> */}
        </p>
      </FooterText>

    </FooterBox>
  )
}

export default Footer