import { useEffect, useState } from "react"
import api from "../api"
import { Route, Routes, useLocation } from "react-router-dom"
import moment from "moment-timezone"

function AdminReserve() {

  let [reserveList, setReserveList] = useState([])
  let [renderer, setRenderer] = useState(0)
  const location = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/check", { withCredentials: true })
        if (res.data.loggedIn) {
          setUser(res.data.user)
        } else {
          setUser(null)
        }
      } catch (err) {
        console.log(err)
      }
    }

    checkUser()
  }, [location])

  useEffect(()=>{
    const getReserve = async () => {
      await api.get("/reserve", {withCredentials: true}).then((res)=>{
        if (res.data.status === 200) {
          setReserveList(res.data.content)
          setRenderer(0)
        } else if (res.data.status === 401) {
          alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
          window.location.href = "/api/admin/login"
        } else {
          alert("서버 또는 네트워크 에러 : 예약자 목록을 가져오지 못했습니다. 관리자에게 문의바랍니다.")
        }
      }).catch((err)=>{
        console.log(err)
        alert("서버 또는 네트워크 에러 : 예약자 목록을 가져오지 못했습니다. 관리자에게 문의바랍니다.")
      })
    }
    getReserve()
  }, [location, renderer])

  let content

  if (user === "admin") {
    if (reserveList.length === 0) {
      content = <p>현재 예약자가 없습니다.</p>
    } else {
      content = 
      <>
      {
        reserveList.map((e, i)=>{
          return (
            <div key={i} style={{
              border: "1px solid gray",
              margin: "20px 0",
              padding: "10px"
            }}>
              <span><strong>이름 : {e.name}</strong></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>연락처 : {e.phone}</span>
              <div style={{paddingTop: "10px", color: "blue"}}>예약 시각 : {moment.utc(e.createdAt).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss")}</div>
              <div style={{paddingTop: "10px"}}>
                내용 : {e.content}
              </div>
              <button style={{marginTop: "10px", cursor: "pointer"}} onClick={()=>{
                if (user) {
                  api.delete(`/reserve/${e._id}`, {withCredentials: true}).then((res)=>{
                    if (res.data.status === 200) {
                      alert(res.data.message)
                      setRenderer(1)
                    } else if (res.data.status === 401) {
                      alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
                      window.location.href = "/api/admin/login"
                    } else {
                      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
                    }
                  }).catch((err)=>{
                    console.log(err)
                    alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
                  })
                }
              }}>확인 후 삭제하기</button>
            </div>
          )
        })
      }
      </>
    }
  } else {
    content = <p>로그인이 필요합니다.</p>
  }

  return (
    <Routes>
      <Route path="" element={
        <div>
          <br/>
          <h2>예약자 관리 페이지</h2>
          <hr/>
          {content}
        </div>
      }/>
    </Routes>
  )
}

export default AdminReserve