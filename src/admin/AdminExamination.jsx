import { useEffect, useState } from "react";
import { useLocation, Link, Route, Routes } from "react-router-dom"
import api from "../api"
import CreateExamination from "./CreateExamination";
import ExaminationDetail from "./examinationDetail";

const AdminExamination = ({ user }) => {

  const location = useLocation()
  
  let [renderer, setRenderer] = useState(0)
  let [examinationList, setExaminationList] = useState([])

  useEffect(()=>{
    if (user) {
      api.get("/examination", {withCredentials: true}).then((res)=>{
        setExaminationList(res.data)
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
          <br/>
          <hr/>
          <h2>검사항목 관리 페이지</h2>
          {user ? (
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
                    <button onClick={()=>{
                      if (user) {
                        api.delete(`/examination/${e._id}`, {withCredentials: true}).then((res)=>{
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
      <Route path="create" element={<CreateExamination user={user}/>}/>
      <Route path="/:id" element={<ExaminationDetail user={user}/>}/>
    </Routes>
  );
};

export default AdminExamination