import { useState, useEffect } from "react"
import api from "../api"
import { useNavigate, useParams } from "react-router-dom"

function ResearchDetail({ user }) {

  const navigate = useNavigate()
  const { id } = useParams()
  let [title, setTitle] = useState("")
  let [year, setYear] = useState("")
  let [journal, setJournal] = useState("")
  let [doi, setDoi] = useState("")
  let [impact, setImpact] = useState("")
  let [author, setAuthor] = useState("")
  let [url, setUrl] = useState("")

  useEffect(()=>{
    if (user) {
      api.get(`/research/${id}`, {withCredentials: true}).then((res)=>{
        setTitle(res.data.title || "")
        setYear(res.data.year || "")
        setJournal(res.data.journal || "")
        setDoi(res.data.doi || "")
        setImpact(res.data.impact || "")
        setAuthor(res.data.author || "")
        setUrl(res.data.url || "")
      }).catch((err)=>{
        console.log(err)
        alert(err + "관리자에게 문의바랍니다.")
      })
    }
  }, [user])

  const handleModify = async () => {
 
    try {
      const response = await api.put(`/research/${id}`, 
        {
          title, year, journal, doi, impact, author, url
        },
        {
          headers: { "Content-Type": "application/json" }, // JSON 방식으로 전송
          withCredentials: true,
        }
      )
      if(response.data.state === 0) {
        console.log(response)
        alert(response.data.message)
        navigate("/api/admin/research")
      } else if(response.data.state === 1) {
        console.log(response)
        alert(response.data.message)
      } else {
        console.log(response)
        alert(response.data.message + ": 관리자에게 문의하세요")
      }
    } catch (error) {
      console.error("업로드 실패:", error);
      alert("서버 에러. 관리자에게 문의하세요: "+error)
    }
  }

  return (
    <>
    {
      user ? <>
      <br/><br/><hr/><h2>논문 수정하기</h2>
      <br/>
      제목 : <textarea style={{width: "100%", height: "100px"}} type="text" name="title" value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }}/><br/><br/>
      발행년도 : <input type="text" name="year" value={year} onChange={(e)=>{
        setYear(e.target.value)
      }}/><br/><br/>
      저널 : <textarea style={{width: "100%", height: "100px"}} type="text" name="journal" value={journal} onChange={(e)=>{
        setJournal(e.target.value)
      }}/><br/><br/>
      doi : <textarea style={{width: "100%", height: "100px"}} type="text" name="doi" value={doi} onChange={(e)=>{
        setDoi(e.target.value)
      }}/><br/><br/>
      if (impact factor) : <input type="text" name="impact" value={impact} onChange={(e)=>{
        setImpact(e.target.value)
      }}/><br/><br/>
      저자 : <textarea style={{width: "100%", height: "100px"}} type="text" name="author" value={author} onChange={(e)=>{
        setAuthor(e.target.value)
      }}/><br/><br/>
      url : <textarea style={{width: "100%", height: "100px"}} type="text" name="url" value={url} onChange={(e)=>{
        setUrl(e.target.value)
      }}/><br/><br/>
      <button onClick={handleModify}>논문 수정하기</button>
      </> : <p>로그인이 필요합니다.</p>
    }
    </>
  )
}

export default ResearchDetail