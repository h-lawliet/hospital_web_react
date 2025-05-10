import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

const CreateNotice = () => {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [images, setImages] = useState([]);
  const [endDate, setEndDate] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]); // 이미지 파일 이름 미리보기 상태
  const [user, setUser] = useState(null);
  const location = useLocation();

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

  // 텍스트 포맷 적용
  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  // 파일 선택 핸들러 (여러 개의 이미지 추가 가능)
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          
          setImagePreviews(prev => [...prev, file.name]);
          setImages(prev => [...prev, file]); // 이미지 파일 저장
        };
        reader.readAsDataURL(file);
      }
    });

    e.target.value = ""; // 같은 파일 재선택 가능하도록 초기화
  };

  // 서버로 데이터 전송
  const handleSubmit = async () => {
 
    const formData = new FormData();
    formData.append("title", title); // 제목 추가
    formData.append("endDate", endDate);
    formData.append("content", editorRef.current.innerHTML); // 내용 추가
    images.forEach((image) => formData.append("images", image)); // 이미지 추가
    await api.post("/notice/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    }).then((res)=>{
      if(res.data.status === 200) {
        alert(res.data.message)
        window.location.href = "/api/admin/notice"
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
  };

  return (
    <>
    {
      (user === "admin") ? <>
        <br/><hr/><br/>
        {/* 제목 입력 */}
        <strong>제목</strong> (필수) : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br/><br/>

        <strong>팝업 공지사항을 언제까지 표시할까요?</strong> (필수) :&nbsp;
        <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
        &nbsp;&lt;-- 달력 아이콘을 클릭하여 편하게 선택하실 수 있습니다. 팝업으로 표시되자 않을 일반 공지사항은 날짜를 오늘 이전으로 맞춰주시면 됩니다.
        <br/><br/>

        {/* 도구 모음 */}
        <div style={{ marginBottom: "10px" }}>
          <button style={{cursor: "pointer"}} onClick={() => handleFormat("bold")}>볼드체</button>&nbsp;
          <button style={{cursor: "pointer"}} onClick={() => handleFormat("italic")}>이탤릭</button>&nbsp;
          <button style={{cursor: "pointer"}} onClick={() => handleFormat("underline")}>밑줄</button>&nbsp;
          <button style={{cursor: "pointer"}} onClick={() => handleFormat("insertUnorderedList")}>불렛 리스트</button>&nbsp;
          <button style={{cursor: "pointer"}} onClick={() => handleFormat("insertOrderedList")}>숫자 리스트</button>&nbsp;&nbsp;&nbsp;
          <button style={{cursor: "pointer"}} onClick={() => fileInputRef.current.click()}>이미지 추가</button>
        </div>

        {/* 이미지 미리보기 */}
        {imagePreviews.length > 0 && (
          <div style={{ marginBottom: "10px" }}>
            <strong>추가된 이미지:</strong>
            <ul>
              {imagePreviews.map((name, index) => (
                <>
                <li key={index}>{name}&nbsp;&nbsp;<span style={{
                  fontSize: "13px", color: "red", cursor: "pointer"
                }} onClick={()=>{
                  const filtered = imagePreviews.filter(x => x !== name)
                  setImagePreviews(filtered)
                }}>삭제</span></li>
                </>
              ))}
            </ul>
          </div>
        )}

        {/* 파일 입력 */}
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />

        {/* 에디터 */}
        <br/>
        <div
          ref={editorRef}
          contentEditable
          style={{
            fontSize: "15px",
            border: "1px solid #ccc",
            minHeight: "500px",
            padding: "10px"
          }}
        ></div>

        {/* 저장 버튼 */}
        <button onClick={handleSubmit} style={{ marginTop: "10px", cursor: "pointer" }}>글쓰기</button>
      </> : <><br/><br/><div>로그인이 필요합니다.</div></>
    }
    </>
    
  );
};

export default CreateNotice;