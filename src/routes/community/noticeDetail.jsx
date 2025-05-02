import { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import api from "../../api.js"
import DOMPurify from "dompurify"

const Noticedetail = styled.div`

  .noticeDetail-heading {
    padding-top: 25px;
  }

  .notice-img {
    text-align: center;
  }

  .notice-img > img {
    max-width: 100%;
    min-width: 75%;
    padding-top: 50px;
  }

  .notice-content {
    white-space: pre-line;
    width: 100%;
    word-break: break-word;
  }

  .horizontal-line {
    border: none;
    height: 0.5px;
    background-color: rgb(225, 225, 225);
    margin-top: 20px;
  }
  
  @media (min-width: 600px) {
    #title > h3 {
      font-size: calc(25px + 0.07vw);
      line-height: calc(35px + 0.07vw);
      margin-bottom: 10px;
    }

    .noticeDetail-info {
      color: rgb(90, 88, 88);
      font-size: calc(14px + 0.07vw);
    }

    .notice-content {
      font-size: calc(16px + 0.07vw);
      line-height: calc(27px + 0.07vw);
      padding-top: 30px;
    }
  }

  @media (max-width: 600px) {
    #title > h3 {
      font-size: calc(20px + 0.07vw);
      line-height: calc(35px + 0.07vw);
      margin-bottom: 10px;
    }

    .noticeDetail-info {
      color: rgb(90, 88, 88);
      font-size: calc(11px + 0.07vw);
    }

    .notice-content {
      font-size: calc(14px + 0.07vw);
      line-height: calc(22px + 0.07vw);
    }
  }
`


function NoticeDetail() {

  const navigate = useNavigate()

  let [noticeData, setNoticeData] = useState({})
  const location = useLocation()
  let {subId} = useParams()

  useEffect(()=>{
    api.get(`/notice/${subId}`)
    .then((res)=>{
      if (res.data.status === 200) {
        setNoticeData(res.data.content)
      } else {
        navigate("/404")
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [subId, location])

  return (
    <Noticedetail>
      <div className="noticeDetail-heading">
        <div id="title">
          <h3>{noticeData.title}</h3>
        </div>
        <div className="noticeDetail-info">
          <span id="time"><strong>작성일시&nbsp;&nbsp;</strong>|&nbsp;&nbsp;{noticeData.time}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="views"><strong>조회수&nbsp;&nbsp;</strong>|&nbsp;&nbsp;{noticeData.views}</span>
        </div>
        <hr className="horizontal-line"/>
        {noticeData.imageUrls ? 
          (noticeData.imageUrls.length !== 0 && <div className="notice-img"><img src={noticeData.imageUrls[0]}/></div>)
           : null
        }
        <div
          className="notice-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noticeData.content) }}
        />
      </div>
    </Noticedetail>
  )
}

export default NoticeDetail