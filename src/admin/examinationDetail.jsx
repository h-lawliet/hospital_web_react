import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import api from "../api";



const ExaminationDetail = ({user}) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const location = useLocation()

  let [title, setTitle] = useState("")
  let [room, setRoom] = useState("")
  let [purpose, setPurpose] = useState("")
  let [method, setMethod] = useState("")
  let [time, setTime] = useState("")
  let [caution, setCaution] = useState("")
  let [result, setResult] = useState("")
  let [formerImage, setFormerImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)

  useEffect(()=>{
    if (user) {
      api.get(`/examination/${id}`, {withCredentials: true}).then((res)=>{
        setTitle(res.data.title || "")
        setRoom(res.data.room || "")
        setPurpose(res.data.purpose || "")
        setMethod(res.data.method || "")
        setTime(res.data.time || "")
        setCaution(res.data.caution || "")
        setResult(res.data.result || "")
        setImageFile(res.data.image || null)
        setFormerImage(res.data.image || null)
      }).catch((err)=>{
        console.log(err)
        alert(err + "관리자에게 문의바랍니다. (010-8681-0930)")
      })
    }
  }, [user, location])

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };



  const handleModify = async () => {
    
    const formData = new FormData()
    formData.append("title", title)
    formData.append("room", room)
    formData.append("purpose", purpose)
    formData.append("method", method)
    formData.append("time", time)
    formData.append("caution", caution)
    formData.append("result", result)
    formData.append("image", imageFile)
    try {
      const response = await api.put(`/examination/${id}`, formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true
        }
      )
      if(response.data.state === 0) {
        console.log(response)
        alert(response.data.message)
        navigate("/api/admin/examination")
      } else if(response.data.state === 1) {
        console.log(response)
        alert(response.data.message)
      } else if(response.data.state === 2) {
        console.log(response)
        alert(response.data.message + ": 관리자에게 문의바랍니다")
      } else {
        console.log(response)
        alert(response.data.message)
      }
    } catch (error) {
      console.error("업로드 실패:", error)
      alert("서버 에러. 관리자에게 문의바랍니다: "+error)
    }
  }

  return (
    <>
    {
      user ? <>
      <div>
        <br/>
        <br/>
        <br/>
        <hr/>
        
        {
          
          imageFile == formerImage ? (
            <>
              <div>현재 이미지 : </div>
              <img 
                src={imageFile} 
                style={{ width: "200px", height: "auto" }} 
                alt="Examination Image" 
              />
            </>
          ) : (
            null
          )
        } <br/>
        사진(1장) : <input type="file" accept="image/*" onChange={handleImageChange}/>
        {imageFile && <p>새 이미지 : {imageFile.name}</p>}<br/>
        검사 제목 : <textarea type="text" name="title" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/><br/>
        검사실 : <textarea type="text" name="room" value={room} onChange={(e)=>{
          setRoom(e.target.value)
        }}/><br/>
        검사 목적 : <textarea type="text" name="purpose" value={purpose} onChange={(e)=>{
          setPurpose(e.target.value)
        }}/><br/>
        검사 방법 : <textarea type="text" name="method" value={method} onChange={(e)=>{
          setMethod(e.target.value)
        }}/><br/>
        소요 시간 : <textarea type="text" name="time" value={time} onChange={(e)=>{
          setTime(e.target.value)
        }}/><br/>
        주의사항 : <textarea type="text" name="caution" value={caution} onChange={(e)=>{
          setCaution(e.target.value)
        }}/><br/>
        결과 해석 : <textarea type="text" name="result" value={result} onChange={(e)=>{
          setResult(e.target.value)
        }}/><br/>

        <button onClick={handleModify} style={{ marginTop: "10px" }}>글쓰기</button>
      </div>
      </> : <><br/><br/><div>로그인이 필요합니다.</div></>
    }
    </>
    
  );
};

export default ExaminationDetail