import styled from "styled-components"

const Outside = styled.div`

  & > div {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    #kakao {
      display: inline-block;
      position: fixed;
      width: 42px;
      border-radius: 11px;
      aspect-ratio: 1;
      bottom: 50px;
      right: calc(4vw + 5px);
      background-image: url("/images/kakao_logo.png");
      background-size: 43px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }

    #blog {
      display: inline-block;
      position: fixed;
      width: 42px;
      border-radius: 11px;
      aspect-ratio: 1;
      bottom: 105px;
      right: calc(4vw + 5px);
      background-image: url("/images/naver_blog_logo.png");
      background-size: 43px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    #kakao {
      display: inline-block;
      position: fixed;
      width: 50px;
      border-radius: 11px;
      aspect-ratio: 1;
      bottom: 65px;
      right: calc(4vw + 15px);
      background-image: url("/images/kakao_logo.png");
      background-size: 52px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }

    #blog {
      display: inline-block;
      position: fixed;
      width: 50px;
      border-radius: 11px;
      aspect-ratio: 1;
      bottom: 130px;
      right: calc(4vw + 15px);
      background-image: url("/images/naver_blog_logo.png");
      background-size: 52px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }
  }

  @media (min-width: 1200px) {
    #kakao {
      display: inline-block;
      position: fixed;
      width: 54px;
      border-radius: 12px;
      aspect-ratio: 1;
      bottom: 65px;
      right: calc(4vw + 5px);
      background-image: url("/images/kakao_logo.png");
      background-size: 56px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }

    #blog {
      display: inline-block;
      position: fixed;
      width: 54px;
      border-radius: 12px;
      aspect-ratio: 1;
      bottom: 140px;
      right: calc(4vw + 5px);
      background-image: url("/images/naver_blog_logo.png");
      background-size: 56px;
      background-position: center center;
      box-shadow: 0 8px 10px rgba(0,0,0,0.30), 0 8px 6px rgba(0,0,0,0.22);
      z-index: 1300;
    }
  }

  #kakao:hover {
    transform: scale(1.07);
  }

  #blog:hover {
    transform: scale(1.07);
  }
`

export function OutsideLink() {
  return (
    <Outside>
      <div id="blog" onClick={() => 
        window.open("https://www.naver.com", "_blank", "noopener,noreferrer")
      }></div>
      <div id="kakao" onClick={() => 
        window.open("https://www.naver.com", "_blank", "noopener,noreferrer")
      }></div>
    </Outside>
  )
}