import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"
import api from "../api";


const StyledDiv = styled.div`
  textarea {
    width: 100%;
    height: 100px;
  }
`

const CreateExamination = () => {

  const navigate = useNavigate()
  const location = useLocation()

  let [title, setTitle] = useState("")
  let [room, setRoom] = useState("")
  let [purpose, setPurpose] = useState("")
  let [method, setMethod] = useState("")
  let [time, setTime] = useState("")
  let [caution, setCaution] = useState("")
  let [result, setResult] = useState("")
  const [imageFile, setImageFile] = useState(null)

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async () => {
    
    const formData = new FormData()
    formData.append("title", title)
    formData.append("room", room)
    formData.append("purpose", purpose)
    formData.append("method", method)
    formData.append("time", time)
    formData.append("caution", caution)
    formData.append("result", result)
    formData.append("image", imageFile)
    await api.post("/examination/create", formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      }
    ).then((res)=>{
      if(res.data.status === 200) {
        alert(res.data.message)
        window.location.href = "/api/admin/examination"
      } else if(res.data.status === 401) {
        alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요")
        window.location.href = "/api/admin/login"
      } else if(res.data.status === 400) {
        alert(res.data.message)
      } else {
        alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
      }
    }).catch((err)=>{
      console.log(err)
      alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.")
    })
  }

  return (
    <>
    {
      (user === "admin") ? <>
      <StyledDiv>
        <br/>
        <br/>
        <hr/>
        <br/>
        사진(1장) : <input type="file" accept="image/*" onChange={handleImageChange}/>
        <br/>
        <br/>검사 제목 (필수) : <textarea type="text" name="title" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/><br/>
        검사실 (필수) : <textarea type="text" name="room" value={room} onChange={(e)=>{
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

        <button onClick={handleSubmit} style={{ marginTop: "10px", cursor: "pointer" }}>검사 추가하기</button>
      </StyledDiv>
      </> : <p>로그인이 필요합니다.</p>
    }
    </>
    
  );
};

export default CreateExamination