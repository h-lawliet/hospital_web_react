import { useEffect, useState } from "react"
import api from "../api"
import { Route, Routes } from "react-router-dom"
import moment from "moment-timezone"

function AdminReserve({ user }) {

  let [reserveList, setReserveList] = useState([])
  let [renderer, setRenderer] = useState(0)

  useEffect(()=>{
    if (user) {
      api.get("/reserve", {withCredentials: true}).then((res)=>{
        setReserveList(res.data)
        setRenderer(0)
      }).catch((err)=>{
        console.log(err)
        alert(err + "관리자에게 문의바랍니다. (010-8681-0930)")
      })
    }
  }, [user, location, renderer])

  return (
    <Routes>
      <Route path="" element={
        <div>
          <br/>
          <h2>예약자 관리 페이지</h2>
          <hr/>
          {
            user ? (
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
                      <button style={{marginTop: "10px"}} onClick={()=>{
                        if (user) {
                          api.delete(`/reserve/${e._id}`, {withCredentials: true}).then((res)=>{
                            if (res.data.state === 0) {
                              alert(res.data.message)
                              setRenderer(1)
                            } else {
                              alert(res.data.message + ": 관리자에게 문의바랍니다")
                            }
                          }).catch((err)=>{
                            console.log(err)
                            alert(err + "관리자에게 문의바랍니다. (010-8681-0930)")
                          })
                        }
                      }}>확인 후 삭제하기</button>
                    </div>
                  )
                })
              }
              </>
            ) : (
              <p>로그인이 필요합니다.</p>
            )
          }
        </div>
      }/>
    </Routes>
  )
}

export default AdminReserve