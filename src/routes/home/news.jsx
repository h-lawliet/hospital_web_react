import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';


const NewsBox = styled.div`
  display: flex;
  background-color: rgb(245, 245, 245);
  position: relative;

  .news-box-deco {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: rgb(220, 220, 220);
  }

  @media (min-width: 1200px) {
    padding: 130px 10vw;

    .news-text {
      min-width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;
      position: relative;
      z-index: 10;
    }

    .news-text > h3 {
      font-weight: 400;
      margin: 0;
      font-size: 30px;
      line-height: 45px;
    }

    .news-text-sub {
      font-weight: 200;
      margin: 0;
      padding-top: 10px;
    }

    .news-element-box {
      height: 100%;
      position: relative;
      color: white;
      background-color: white;
      aspect-ratio: 1.3;
      overflow: hidden;
      cursor: pointer;

      &:hover .news-img {
        transform: scale(1.2);
      }
    }
    .news-img {
      height: 55%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      position: relative;
      transition: transform 0.5s ease-in-out;
    }
    // .news-img::before {
    //   content: "";
    //   position: absolute;
    //   inset: 0;
    //   background: rgba(0, 0, 0, 0.1);
    // }

    .news-content {
      height: calc(45% - 2vw);
      background-color: rgb(0, 51, 161);
      padding: 1vw;
    }
    #news-title {
      margin: 0;
      font-size: 1.3vw;
      line-height: 1.8vw;
      font-weight: 400;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* 보여줄 줄 수 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #news-time {
      position: absolute;
      bottom: 1vw;
      font-size: 1vw;
      font-weight: 200;
    }

    .news-element-box > * {
      position: relative;
    }

  }


  @media (min-width: 600px) and (max-width: 1200px) {
    padding: 90px 7vw;
    width: calc(100%- 14vw);
    flex-direction: column;

    padding: 110px 10vw;

    .news-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;
      position: relative;
      z-index: 10;
    }

    .news-text > h3 {
      font-weight: 400;
      margin: 0;
      font-size: 30px;
      line-height: 45px;
    }

    .news-text-sub {
      font-weight: 200;
      margin: 0;
      padding-top: 10px;
    }

    .swiper {
      width: 100%;
    }

    .news-element-box {
      height: 100%;
      position: relative;
      color: white;
      background-color: white;
      aspect-ratio: 1.3;
      overflow: hidden;
      cursor: pointer;

      &:hover .news-img {
        transform: scale(1.2);
      }
    }
    .news-img {
      height: 55%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      position: relative;
      transition: transform 0.5s ease-in-out;
    }

    .news-content {
      height: calc(45% - 24px);
      background-color: rgb(0, 51, 161);
      padding: 12px;
    }
    #news-title {
      margin: 0;
      font-size: 15px;
      line-height: 19px;
      font-weight: 400;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* 보여줄 줄 수 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #news-time {
      position: absolute;
      bottom: 12px;
      font-size: 13px;
      font-weight: 200;
    }

    .news-element-box > * {
      position: relative;
    }
  }


  @media (max-width: 600px) {
    padding: 90px 7vw;
    flex-direction: column;
    width: calc(100% - 14vw);

    .news-text {
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      position: relative;
      z-index: 10;
    }

    .news-text > h3 {
      font-weight: 400;
      margin: 0;
      font-size: 25px;
      line-height: 35px;
    }

    .news-text-sub {
      font-weight: 200;
      margin: 0;
      padding-top: 5px;
    }

    .swiper {
      width: 100%;
    }
    .news-element-box {
      height: 100%;
      width: 100%;
      position: relative;
      color: white;
      background-color: white;
      aspect-ratio: 1.3;
      overflow: hidden;
      cursor: pointer;

      &:hover .news-img {
        transform: scale(1.2);
      }
    }
    .news-img {
      height: 55%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      position: relative;
      transition: transform 0.5s ease-in-out;
    }
    // .news-img::before {
    //   content: "";
    //   position: absolute;
    //   inset: 0;
    //   background: rgba(0, 0, 0, 0.1);
    // }

    .news-content {
      height: calc(45% - 24px);
      background-color: rgb(0, 51, 161);
      padding: 12px;
    }
    #news-title {
      margin: 0;
      font-size: 13px;
      line-height: 17px;
      font-weight: 400;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* 보여줄 줄 수 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #news-time {
      position: absolute;
      bottom: 12px;
      font-size: 11px;
      font-weight: 200;
    }

    .news-element-box > * {
      position: relative;
    }
  }
`


const News = () => {

  const [ noticeList, setNoticeList ] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    api.get("/notice", {withCredentials: true}).then((res)=>{
      if (res.data.status === 200) {
        setNoticeList(res.data.content)
      } else {
        console.log(res.data)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [])


  return (
    <NewsBox>
      <div className='news-box-deco'/>
      <div className='news-text'>
        
        <h3>홍지만신경과 <span style={{
          color: "rgb(0, 51, 161)",
          fontWeight: 800
        }}>NEWS</span></h3>
        <p className='news-text-sub'>우리 병원의 최신 소식들을 전해드립니다</p>
      </div>
      {
        noticeList.length &&
          <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            slidesPerView={1.3}
            slidesPerGroup={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              600: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1800: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 25,
              }
            }}
            className='swiper'
          >
          {
            noticeList?.map((e, i) => {
              console.log(e)
              return (
                <SwiperSlide>
                  <div className='news-element-box' onClick={()=>{
                    if (e.url) window.open(e.url, '_blank')
                    else window.open(`/community/2/${e._id}`, '_blank')
                  }}>
                    <div className='news-img' style={{
                      backgroundImage: `url(${e.imageUrls[0]})`
                    }}/>
                    <div className='news-content'>
                      <h4 id='news-title'>{e.title}</h4>
                      <div id='news-time'>{e.time}</div>
                    </div>
                    
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      }
    </NewsBox>
  )
};

export default News;