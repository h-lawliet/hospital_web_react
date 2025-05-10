import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CreateNotice from "./CreateNotice";
import api from "../api";
import AdminNoticeDetail from "./adminNoticeDetail";

const AdminNotice = () => {

  const location = useLocation()

  let [noticeList, setNoticeList] = useState([])
  let [renderer, setRenderer] = useState(0)
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
    api.get("/notice", {withCredentials: true}).then((res)=>{
      if (res.data.status === 200) {
        setNoticeList(res.data.content.reverse())
        setRenderer(0)
      } else {
        alert("공지사항 리스트를 가져오지 못했습니다 : 관리자에게 문의바랍니다.")
      }
    }).catch((err)=>{
      console.log(err)
      alert("공지사항 리스트를 가져오지 못했습니다 : 관리자에게 문의바랍니다.")
    })
  }, [location, renderer])

  return (
    <Routes>
      <Route path="" element={
        <div>
          <br/><br/><hr/>
          <h2>공지사항 관리 페이지</h2>
          {(user === "admin") ? (
            <>
              <button style={{cursor: "pointer"}}><Link style={{
                textDecoration: "none",
                color: "inherit"
              }} to="/api/admin/notice/create">공지사항 추가</Link></button><br/><br/><hr/>
              <br/><div><strong>아래의 리스트는 공지사항 글 목록 입니다. 
              글 제목 옆의 버튼을 눌러서 삭제 또는 수정하실 수 있습니다.</strong><br/><br/>
              * 최근 작성한 공지사항이 상단에 표시됩니다
              </div><br/>
              {
                noticeList.map((e, i)=>{
                  return(
                  <div key={i}>
                    <br/><span>{e.title}</span>&nbsp;
                    <button style={{cursor: "pointer"}}><Link style={{
                      textDecoration: "none",
                      color: "inherit"
                    }} to={`/api/admin/notice/${e._id}`}>수정하기</Link></button>&nbsp;
                    <button style={{cursor: "pointer"}} onClick={()=>{
                      api.delete(`/notice/${e._id}`, {withCredentials: true}).then((res)=>{
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
                    }}>삭제하기</button>
                  </div>
                  )
                })
              }
              
            </>
          ) : (
            <p>로그인이 필요합니다.</p>
          )}
        </div>
      }/>
      <Route path="create" element={<CreateNotice/>}/>
      <Route path="/:id" element={<AdminNoticeDetail/>}/>
    </Routes>
  );
};

export default AdminNotice