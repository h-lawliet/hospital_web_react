import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const FacilityImage = [
  {
    url: "/images/facility/1-1.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-2.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-4.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-5.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-6.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-7.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-8.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-9.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-10.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-11.webp",
    floor: 1
  },
  {
    url: "/images/facility/1-12.webp",
    floor: 1
  },
  {
    url: "/images/facility/2-1.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-2.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-3.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-4.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-5.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-6.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-7.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-8.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-9.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-10.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-11.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-12.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-13.webp",
    floor: 2
  },
  {
    url: "/images/facility/2-14.webp",
    floor: 2
  },
  {
    url: "/images/facility/3-1.webp",
    floor: 3
  },
  {
    url: "/images/facility/3-2.webp",
    floor: 3
  },
  {
    url: "/images/facility/3-3.webp",
    floor: 3
  },
  {
    url: "/images/facility/3-4.webp",
    floor: 3
  },
  {
    url: "/images/facility/3-5.webp",
    floor: 3
  },
]

const SliderContainer = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .facility-slider {
    width: 100%;
    padding: 0 
  }

  .facility-slider-second {
    width: calc(100% - 6vw - 40px);
    padding: 0;
    margin-top: 20px;
  }
  .slick-prev:before, .slick-next:before {
    color: black;
    opacity: 0.4;
  }

  .facility-slider-second .slick-slide > div {
    margin: 0 5px;
  }
`
const SlideItem = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  aspect-ratio: 1.6;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const SlideItemPadding = styled.div`
  box-sizing: border-box;
  aspect-ratio: 1.6;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`

function AsNavFor({images}) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <SliderContainer>
      <Slider 
        className="facility-slider"
        asNavFor={nav2}
        autoplay={true}
        autoplaySpeed={7000}
        infinite={true}
        arrows={false}
        ref={slider => (sliderRef1 = slider)}>
      {
        images.map((e)=>{
          return(
            <SlideItem img={e.url}/>
          )
        })
      }
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={true}
        centerMode={true}
        className="facility-slider-second"
        arrows={true}
      >
      {
        images.map((e)=>{
          return(
            <SlideItemPadding img={e.url}/>
          )
        })
      }
      </Slider>
    </SliderContainer>
  );
}



function Facility() {
  let [floor, setFloor] = useState(1)
  let [floorImage, setFloorImage] = useState(FacilityImage.filter(item => item.floor === 1))

  useEffect(()=>{
    setFloorImage(FacilityImage.filter(item => item.floor === floor))
  }, [floor])
  

  const StyledFacility = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;

    h3 {
      margin: 0;
      margin-bottom: 20px;
      font-size: calc(20px + 0.1vw);
      color: rgb(0, 51, 161);
    }
    #name {
      color: black;
      font-weight: 400;
    }
    p {
      font-size: calc(15px + 0.1vw);
      line-height: calc(30px + 0.1vw);
      text-align: justify;
    }
    .facility-floor {
      width: 100%;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .facility-floor-img {
      width: 100%;
    }


    @media (max-width: 600px) {
      .facility-floor {
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      h3 {
        font-size: 18px;
      }
      & > p {
        font-size: 14px;
        line-height: 27px;
      }
    }
  `
  const ScrollFloor = styled.div`
    margin-top: 50px;
    overflow: auto;

    .scroll-wrap-floor {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .scroll-element {
      display: flex;
      width: 120px;
      height: 50px;
      font-size: 18px;
      text-align: center;
      justify-content: center;
      align-items: center;
      background-color: #f7f3f3;
      color: #838282;
      flex-shrink: 0;
      cursor: pointer;
    }
    .scroll-element-selected {
      display: flex;
      width: 120px;
      height: 50px;
      font-size: 18px;
      text-align: center;
      justify-content: center;
      align-items: center;
      background-color: rgb(0, 51, 161);
      color:rgb(244, 243, 243);
      flex-shrink: 0;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      margin-top: 30px;

      .scroll-element {
        display: flex;
        width: 90px;
        height: 40px;
        font-size: 14px;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: #f7f3f3;
        color: #838282;
        flex-shrink: 0;
        cursor: pointer;
      }
      .scroll-element-selected {
        display: flex;
        width: 90px;
        height: 40px;
        font-size: 14px;
        text-align: center;
        justify-content: center;
        align-items: center;
        background-color: rgb(0, 51, 161);
        color:rgb(244, 243, 243);
        flex-shrink: 0;
        cursor: pointer;
      }
    }
  `

  const floors = [1, 2, 3]
  
  return(
    <StyledFacility>

      <h3><span id="name">홍지만신경과</span> 시설 소개</h3>
      <p>저희 병원은 각 층이 특수한 목적을 지닌 테마로 구성되어 있습니다. 1층의 테마는 <strong>11호님의 산책</strong>으로, 
      운동치료센터가 위치하고 있어 이곳을 이용하시는 분들이 마음껏 걸을 수 있도록 구성하였습니다.
      2층의 테마는 <strong>11호님의 희망</strong>으로, <strong>대학병원 수준의 집중치료실과 영상실</strong>을 갖추고 있어, 
      초기 진단부터 치료까지 한곳에서 신속하게 진행할 수 있습니다. 
      그리고 3층은 <strong>11호님을 위한 배려</strong>로, 환자분들이 휴식을 취할 수 있는 입원실과 옥상조경이 위치하고 있습니다. 
      환자와 보호자 모두에게 편안함과 최고의 치료를 제공하도록 많은 고민을 거쳐 설계된 장소입니다.</p>

      <ScrollFloor>
        <div className="scroll-wrap-floor">
          {
            floors.map((e, i)=>{
              return (
                <div key={i} className={
                  e === floor ? 
                  "scroll-element-selected" : 
                  "scroll-element"
                } onClick={()=>{setFloor(e)}}>{`${e}층`}</div>
              )
            })
          }
        </div>
      </ScrollFloor>

      <div className="facility-floor">
        <img className="facility-floor-img" src={`/images/about/floor${floor}.png`}/>
      </div>
      <div className="facility-image">
        <h3>{`${floor}층 둘러보기`}</h3>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <AsNavFor images={floorImage}/>
      </div>
    </StyledFacility>
  )
}

export default Facility