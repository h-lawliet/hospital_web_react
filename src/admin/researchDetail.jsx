import { useState, useEffect } from "react"
import api from "../api"
import { useLocation, useNavigate, useParams } from "react-router-dom"

function ResearchDetail() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const location = useLocation()
  let [title, setTitle] = useState("")
  let [year, setYear] = useState("")
  let [journal, setJournal] = useState("")
  let [doi, setDoi] = useState("")
  let [impact, setImpact] = useState("")
  let [author, setAuthor] = useState("")
  let [url, setUrl] = useState("")

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
    api.get(`/research/${id}`, {withCredentials: true}).then((res)=>{
      if (res.data.status === 200) {
        setTitle(res.data.content.title || "")
        setYear(res.data.content.year || "")
        setJournal(res.data.content.journal || "")
        setDoi(res.data.content.doi || "")
        setImpact(res.data.content.impact || "")
        setAuthor(res.data.content.author || "")
        setUrl(res.data.content.url || "")
      } else if (res.data.status === 401) {
        alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
        window.location.href = "/api/admin/login"
      } else if (res.data.status === 404) {
        alert(res.data.message)
        window.location.href = "/api/admin/research"
      } else {
        alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
        window.location.href = "/api/admin/research"
      }
    }).catch((err)=>{
      console.log(err)
      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
      window.location.href = "/api/admin/research"
    })
  }, [user])

  const handleModify = async () => {

    await api.put(`/research/${id}`, 
      {
        title, year, journal, doi, impact, author, url
      },
      {
        headers: { "Content-Type": "application/json" }, // JSON 방식으로 전송
        withCredentials: true,
      }
    ).then((res)=>{
      if (res.data.status === 200) {
        alert(res.data.message)
        window.location.href = "/api/admin/research"
      } else if (res.data.status === 401) {
        alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
        window.location.href = "/api/admin/login"
      } else if (res.data.status === 400) {
        alert("필수항목을 모두 입력해주세요")
      } else {
        alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
        window.location.href = "/api/admin/research"
      }
    }).catch((err)=>{
      console.log(err)
      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
      window.location.href = "/api/admin/research"
    })
  }

  return (
    <>
    {
      (user === "admin") ? <>
      <br/><br/><hr/><h2>논문 수정하기</h2>
      <br/>
      <strong>제목</strong>(필수) : <textarea style={{width: "100%", height: "100px"}} type="text" name="title" value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }}/><br/><br/>
      <strong>발행년도</strong>(필수) : <input type="text" name="year" value={year} onChange={(e)=>{
        setYear(e.target.value)
      }}/><br/><br/>
      <strong>저널</strong>(필수) : <textarea style={{width: "100%", height: "100px"}} type="text" name="journal" value={journal} onChange={(e)=>{
        setJournal(e.target.value)
      }}/><br/><br/>
      <strong>doi</strong> : <textarea style={{width: "100%", height: "100px"}} type="text" name="doi" value={doi} onChange={(e)=>{
        setDoi(e.target.value)
      }}/><br/><br/>
      <strong>if (impact factor)</strong> : <input type="text" name="impact" value={impact} onChange={(e)=>{
        setImpact(e.target.value)
      }}/><br/><br/>
      <strong>저자</strong>(필수) : <textarea style={{width: "100%", height: "100px"}} type="text" name="author" value={author} onChange={(e)=>{
        setAuthor(e.target.value)
      }}/><br/><br/>
      url : <textarea style={{width: "100%", height: "100px"}} type="text" name="url" value={url} onChange={(e)=>{
        setUrl(e.target.value)
      }}/><br/><br/>
      <button onClick={handleModify} style={{cursor: "pointer"}}>논문 수정하기</button>
      </> : <p>로그인이 필요합니다.</p>
    }
    </>
  )
}

export default ResearchDetail