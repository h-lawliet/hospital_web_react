import { useState, useEffect } from "react"
import api from "../api"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import CreateResearch from "./CreateResearch"
import ResearchDetail from "./researchDetail"

function AdminResearch({ user }) {
  let [selectedYear, setSelectedYear] = useState(2024)
  let [ResearchData, setResearchData] = useState([])
  let [filtered, setFiltered] = useState([])
  let [years, setYears] = useState([])
  let [renderer, setRenderer] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    api.get("/research", {withCredentials: true}).then((res)=>{
      setResearchData(res.data)
      setRenderer(0)
    }).catch((err)=>{
      console.log(err)
      alert(err + " 논문 데이터를 가져오지 못했습니다.")
    })
  }, [renderer, location])

  useEffect(()=>{
    setFiltered(ResearchData.filter(item => item.year == selectedYear)
    .sort((a, b) => a._id.localeCompare(b._id)))
  }, [selectedYear, ResearchData])

  useEffect(()=>{
    const uniqueYears = [...new Set(ResearchData.map(item => item.year))].sort((a, b) => b - a)
    setYears(uniqueYears)

    if (uniqueYears.length > 0) {
      setSelectedYear(uniqueYears[0])
    }
  }, [ResearchData])

  console.log(user)

  return (
    <Routes>
      <Route path="" element={
        <div>
          <br/>
          <br/>
          <hr/>
          <h2>논문(연구활동) 관리</h2>
          <button onClick={()=>{navigate("/api/admin/research/create")}}>논문 추가하기</button><br/><br/>
          <hr/>
          {
            user ? <>
            <div style={{display: "flex", alignItems: "center", height: "50px"}}>
            {
              years.map((e, i)=>{
                return (
                  <div style={{flexGrow: "1", textAlign: "center", cursor: "pointer"}} onClick={()=>{
                    setSelectedYear(e)
                  }}>{e}</div>
                )
              })
            }
            </div>
            <h3>{selectedYear}년 논문 목록</h3>
            {
              filtered.map((e, i)=>{
                return (
                  <div style={{paddingBottom: "25px"}}>{i+1}. {e.title}<br/>
                    <button><Link style={{
                      textDecoration: "none",
                      color: "inherit"
                    }} to={`/api/admin/research/${e._id}`}>수정하기</Link></button>&nbsp;
                    <button onClick={()=>{
                      api.delete(`/research/${e._id}`, {withCredentials: true}).then((res)=>{
                        if (res.data.state === 0) {
                          alert(res.data.message)
                          setRenderer(1)
                        } else if (res.data.state === 1) {
                          alert ("로그인 후 이용해주세요")
                        } else {
                          alert(res.data.message + ": 관리자에게 문의바랍니다")
                        }
                      }).catch((err)=>{
                        console.log(err)
                        alert(err + "관리자에게 문의바랍니다")
                      })
                    }}>삭제하기</button>
                  </div>
                )
              })
            }
            </> : <p>로그인이 필요합니다.</p>
          }
        </div>
      }/>
      <Route path="create" element={<CreateResearch user={user}/>}/>
      <Route path="/:id" element={<ResearchDetail user={user}/>}/>
    </Routes>
  )
}

export default AdminResearch