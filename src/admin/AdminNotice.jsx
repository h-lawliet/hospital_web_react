import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CreateNotice from "./CreateNotice";
import api from "../api";
import AdminNoticeDetail from "./adminNoticeDetail";

const AdminNotice = ({ user }) => {

  const location = useLocation()

  let [noticeList, setNoticeList] = useState([])
  let [renderer, setRenderer] = useState(0)

  useEffect(()=>{
    if (user) {
      api.get("/notice", {withCredentials: true}).then((res)=>{
        setNoticeList(res.data.reverse())
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
          <br/><br/><hr/>
          <h2>공지사항 관리 페이지</h2>
          {user ? (
            <>
              <button><Link style={{
                textDecoration: "none",
                color: "inherit"
              }} to="/api/admin/notice/create">공지사항 추가</Link></button><br/><br/><hr/>
              <div><strong>아래의 리스트는 공지사항 글 목록 입니다. 
              글 제목 옆의 버튼을 눌러서 삭제 또는 수정하실 수 있습니다.</strong><br/><br/>
              * 최근 작성한 공지사항이 상단에 표시됩니다
              </div><br/>
              {
                noticeList.map((e, i)=>{
                  return(
                  <div key={i}>
                    <br/><span>{e.title}</span>&nbsp;
                    <button><Link style={{
                      textDecoration: "none",
                      color: "inherit"
                    }} to={`/api/admin/notice/${e._id}`}>수정하기</Link></button>&nbsp;
                    <button onClick={()=>{
                      if (user) {
                        api.delete(`/notice/${e._id}`, {withCredentials: true}).then((res)=>{
                          if (res.data.state === 0) {
                            alert(res.data.message)
                            setRenderer(1)
                          } else {
                            alert(res.data.message + ": 관리자에게 문의바랍니다")
                          }
                        }).catch((err)=>{
                          console.log(err)
                          alert(err + "관리자에게 문의바랍니다.")
                        })
                      } else {
                        console.log("로그인 필요")
                      }
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
      <Route path="create" element={<CreateNotice user={user}/>}/>
      <Route path="/:id" element={<AdminNoticeDetail user={user}/>}/>
    </Routes>
  );
};

export default AdminNotice