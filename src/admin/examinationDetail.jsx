import { useParams, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import api from "../api";



const ExaminationDetail = () => {
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
  const [imageFile, setImageFile] = useState(null)
  const [formalImg, setFormalImg] = useState(null)

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
    api.get(`/examination/${id}`, {withCredentials: true}).then((res)=>{
      if (res.data.status === 200) {
        setTitle(res.data.content.title || "")
        setRoom(res.data.content.room || "")
        setPurpose(res.data.content.purpose || "")
        setMethod(res.data.content.method || "")
        setTime(res.data.content.time || "")
        setCaution(res.data.content.caution || "")
        setResult(res.data.content.result || "")
        setImageFile(res.data.content.image || null)
        setFormalImg(res.data.content.image || null)
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
  }, [location])

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
    
    await api.put(`/examination/${id}`, formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      }
    ).then((res)=>{
      if (res.data.status === 200) {
        alert(res.data.message)
        window.location.href = "/api/admin/examination"
      } else if (res.data.status === 401) {
        alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
        window.location.href = "/api/admin/login"
      } else {
        alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
        window.location.href = "/api/admin/examination"
      }
    }).catch((err)=>{
      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
      window.location.href = "/api/admin/examination"
    })
  }

  return (
    <>
    {
      user ? <>
      <div>
        <br/>
        <br/>
        <hr/>
        {
          
          formalImg ? (
            <>
              <div>현재 이미지 : </div>
              <img 
                src={formalImg} 
                style={{ width: "200px", height: "auto" }} 
                alt="Examination Image" 
              />
            </>
          ) : (
            <p>현재 이미지 없음</p>
          )
        } <br/>
        <strong>이미지를 바꾸시려면 하단의 "파일 선택" 버튼으로 새 이미지를 선택하시고 "글쓰기" 버튼을 눌러주세요.</strong><br/>
        사진(1장) : <input style={{cursor: "pointer"}} type="file" accept="image/*" onChange={handleImageChange}/><br/><br/>
        검사 제목 : <textarea type="text" name="title" value={title} style={{width: "100%", height: "100px"}} onChange={(e)=>{
          setTitle(e.target.value)
        }}/><br/>
        검사실 : <textarea type="text" name="room" style={{width: "100%", height: "100px"}} value={room} onChange={(e)=>{
          setRoom(e.target.value)
        }}/><br/>
        검사 목적 : <textarea type="text" name="purpose" style={{width: "100%", height: "100px"}} value={purpose} onChange={(e)=>{
          setPurpose(e.target.value)
        }}/><br/>
        검사 방법 : <textarea type="text" name="method" style={{width: "100%", height: "100px"}} value={method} onChange={(e)=>{
          setMethod(e.target.value)
        }}/><br/>
        소요 시간 : <textarea type="text" name="time" style={{width: "100%", height: "100px"}} value={time} onChange={(e)=>{
          setTime(e.target.value)
        }}/><br/>
        주의사항 : <textarea type="text" name="caution" style={{width: "100%", height: "100px"}} value={caution} onChange={(e)=>{
          setCaution(e.target.value)
        }}/><br/>
        결과 해석 : <textarea type="text" name="result" style={{width: "100%", height: "100px"}} value={result} onChange={(e)=>{
          setResult(e.target.value)
        }}/><br/>

        <button onClick={handleModify} style={{ marginTop: "10px", cursor: "pointer" }}>글쓰기</button>
      </div>
      </> : <><br/><br/><div>로그인이 필요합니다.</div></>
    }
    </>
    
  );
};

export default ExaminationDetail