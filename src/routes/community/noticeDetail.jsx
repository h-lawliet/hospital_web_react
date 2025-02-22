import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import api from "../../api.js"

const Noticedetail = styled.div`

`


function NoticeDetail() {

  const navigate = useNavigate()

  let [noticeData, setNoticeData] = useState({})
  let {subId} = useParams()

  useEffect(()=>{
    api.get(`/notice/${subId}`)
    .then((res)=>{
      if (res.data.state === 0) {
        setNoticeData(res.data.content)
      } else {
        navigate("/404")
      }
    }).catch((err)=>{
      console.log(err)
    })
  }, [subId])

  return (
    <Noticedetail>
      <div className="noticeDetail-heading">
        <div id="title">
          {noticeData.title}
        </div>
        <div id="time">
          {noticeData.time}
        </div>
        <div id="views">
          {noticeData.views}
        </div>
      </div>
    </Noticedetail>
  )
}

export default NoticeDetail