import { useState, useEffect } from "react"
import { Link, Router, Route, Routes, BrowserRouter, useLocation, useNavigate } from "react-router-dom"
import Login from "../admin/login.jsx"
import AdminNotice from "../admin/AdminNotice.jsx"
import AdminExamination from "../admin/AdminExamination.jsx"
import AdminReserve from "../admin/AdminReserve.jsx"
import AdminResearch from "../admin/AdminResearch.jsx"
import api from "../api.js"
import "./admin.css"

function Admin() {

  let [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

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

  const handleLogout = async () => {
    await api.post("/logout", {}, { withCredentials: true });
    setUser(null);
    navigate("/api/admin")
  };


  return(
    <div className="admin">
      <h1>홍지만신경과 관리자 페이지</h1><br/><br/>
      <div>
        <Link style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "17px",
        }} to="/api/admin">관리자 홈</Link><br/><br/>
        {user && <><Link style={{
          textDecoration: "none",
          color: "blue", 
          fontSize: "17px",
        }} to="/api/admin/notice">공지사항 항목 편집</Link><br/><br/></>}
        {user && <><Link style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "17px"
        }} to="/api/admin/examination">검사안내 항목 편집</Link><br/><br/></>}
        {user && <><Link style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "17px"
        }} to="/api/admin/research">논문(연구활동) 항목 편집</Link><br/><br/></>}
        {user && <><Link style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "17px"
        }} to="/api/admin/reserve">예약자 관리</Link><br/><br/></>}
        {!user && <Link style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "17px"
        }} to="/api/admin/login">로그인</Link>}
        {user && <span style={{
          cursor: "pointer",
          fontSize: "17px",
          color: "blue"
        }} onClick={handleLogout}>로그아웃</span>}
      </div>
      

      <Routes>
        <Route path="" element={
          <div>
          {
            user ? <>
              <br/><br/><hr/><h3>환영합니다! 홍지만 신경과 관리자 페이지입니다.</h3><br/>
              <p>이곳에서는 상단의 파란색 메뉴를 통해 이동하셔서 <strong>공지사항 관리, 검사안내 관리, 연구활동 편집, 예약자 관리</strong>가 가능합니다.
              모바일로 이용하실 경우 화면이 깨질 수 있어 pc로 이용하시는것을 추천드립니다.</p>
              <p>기타 문의사항이 있으시면 010-8681-0930 또는 카카오톡 아이디 h_lawliet로 언제든 편하게 문의주세요!</p><br/>
            </> : <>
              <br/><br/><hr/><h3>로그인 후 이용 가능합니다.</h3>
            </>
          }
          </div>
        }/>
        <Route path="notice/*" element={<AdminNotice/>}/>
        <Route path="examination/*" element={<AdminExamination/>}/>
        <Route path="reserve/*" element={<AdminReserve/>}/>
        <Route path="research/*" element={<AdminResearch/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Admin