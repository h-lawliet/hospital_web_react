import { useEffect, useState } from "react";
import { useLocation, Link, Route, Routes } from "react-router-dom"
import api from "../api"
import CreateExamination from "./CreateExamination";
import ExaminationDetail from "./examinationDetail";

const AdminExamination = () => {

  const location = useLocation()
  
  let [renderer, setRenderer] = useState(0)
  let [examinationList, setExaminationList] = useState([])

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
    api.get("/examination", {withCredentials: true}).then((res)=>{
      setExaminationList(res.data.reverse())
      setRenderer(0)
    }).catch((err)=>{
      console.log(err)
      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
    })
  }, [user, location, renderer])

  return (
    <Routes>
      <Route path="" element={
        <div>
          <br/>
          <br/>
          <hr/>
          <h2>검사항목 관리 페이지</h2>
          {(user === "admin") ? (
            <>
              <button><Link style={{
                textDecoration: "none",
                color: "inherit"
              }} to="/api/admin/examination/create">검사항목 추가</Link></button><br/><br/><hr/>
              <div><strong>아래의 리스트는 검사안내 글 목록 입니다. 
              검사 제목 옆의 버튼을 눌러서 삭제 또는 수정하실 수 있습니다.</strong></div>
              {
                examinationList.map((e, i)=>{
                  return(
                  <div key={i}>
                    <br/><span>{e.title}</span>&nbsp;
                    <button><Link style={{
                      textDecoration: "none",
                      color: "inherit"
                    }} to={`/api/admin/examination/${e._id}`}>수정하기</Link></button>&nbsp;
                    <button style={{cursor: "pointer"}} onClick={()=>{
                      api.delete(`/examination/${e._id}`, {withCredentials: true}).then((res)=>{
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
      <Route path="create" element={<CreateExamination user={user}/>}/>
      <Route path="/:id" element={<ExaminationDetail user={user}/>}/>
    </Routes>
  )
}

export default AdminExamination