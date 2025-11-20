import { useRef, useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import Autolinker from "autolinker";

const CreateNotice = () => {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);
  const [endDate, setEndDate] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/check", { withCredentials: true });
        if (res.data.loggedIn) setUser(res.data.user);
        else setUser(null);
      } catch (err) {
        console.log(err);
      }
    };
    checkUser();
  }, [location]);

  // Autolinker 인스턴스
  const linker = useMemo(
    () =>
      new Autolinker({
        urls: true,
        email: false,
        phone: false,
        stripPrefix: true,
        newWindow: true,
        ignoreTags: ["a", "code", "pre", "script", "style"],
        truncate: { length: 60, location: "end" },
        replaceFn: (match) => {
          const tag = match.buildTag();
          tag.setAttr("target", "_blank");
          tag.setAttr("rel", "noopener noreferrer");
          return tag;
        },
      }),
    []
  );

  // 텍스트 포맷
  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  // 파일 선택
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreviews((prev) => [...prev, file.name]);
          setImages((prev) => [...prev, file]);
        };
        reader.readAsDataURL(file);
      }
    });
    e.target.value = "";
  };

  // 붙여넣기 시: 평문/HTML 모두 링크화 후 현재 커서 위치에 삽입
  const handlePaste = (e) => {
    const html = e.clipboardData.getData("text/html");
    const text = e.clipboardData.getData("text/plain");
    if (!html && !text) return;

    e.preventDefault();
    const toInsert = linker.link(html || Autolinker.htmlEscape(text));
    // execCommand는 구식이지만 contenteditable 삽입에 여전히 유용함
    document.execCommand("insertHTML", false, toInsert);
  };

  // blur 시: 전체 컨텐츠 한 번 정리하여 누락된 URL도 링크화
  const handleBlur = () => {
    const el = editorRef.current;
    if (!el) return;
    // 이미 링크된 <a>는 ignoreTags로 보호됨
    el.innerHTML = linker.link(el.innerHTML);
  };

  // 서버로 전송
  const handleSubmit = async () => {
    // 제출 직전 한 번 더 링크화 보정
    handleBlur();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("endDate", endDate);
    formData.append("content", editorRef.current.innerHTML);
    images.forEach((image) => formData.append("images", image));

    await api
      .post("/notice/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message);
          window.location.href = "/api/admin/notice";
        } else if (res.data.status === 401) {
          alert("로그인 정보가 만료되었습니다. 다시 로그인해주세요");
          window.location.href = "/api/admin/login";
        } else if (res.data.status === 400) {
          alert(res.data.message);
        } else {
          alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("서버 또는 네트워크 에러 : 관리자에게 문의바랍니다.");
      });
  };

  return (
    <>
      {user === "admin" ? (
        <>
          <br /><hr /><br />
          <strong>제목</strong> (필수) :{" "}
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br /><br />
          <strong>팝업 공지사항을 언제까지 표시할까요?</strong> (필수) :&nbsp;
          <input type="date" value={endDate || ""} onChange={(e) => setEndDate(e.target.value)} />
          &nbsp;&lt;-- 달력 아이콘을 클릭하여 편하게 선택하실 수 있습니다. 팝업으로 표시되지 않을 일반 공지사항은 날짜를 오늘 이전으로 맞춰주시면 됩니다.
          <br /><br />
          url : <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} /><br/>
          (배너 클릭시 이동할 url을 입력해주세요. 공란일시 공지사항 세부페이지로 이동합니다.)

          <div style={{ marginBottom: "10px" }}>
            <button style={{ cursor: "pointer" }} onClick={() => handleFormat("bold")}>볼드체</button>&nbsp;
            <button style={{ cursor: "pointer" }} onClick={() => handleFormat("italic")}>이탤릭</button>&nbsp;
            <button style={{ cursor: "pointer" }} onClick={() => handleFormat("underline")}>밑줄</button>&nbsp;
            <button style={{ cursor: "pointer" }} onClick={() => handleFormat("insertUnorderedList")}>불렛 리스트</button>&nbsp;
            <button style={{ cursor: "pointer" }} onClick={() => handleFormat("insertOrderedList")}>숫자 리스트</button>&nbsp;&nbsp;&nbsp;
            <button style={{ cursor: "pointer" }} onClick={() => fileInputRef.current.click()}>이미지 추가</button>
          </div>

          {imagePreviews.length > 0 && (
            <div style={{ marginBottom: "10px" }}>
              <strong>추가된 이미지:</strong>
              <ul>
                {imagePreviews.map((name, index) => (
                  <li key={index}>
                    {name}&nbsp;&nbsp;
                    <span
                      style={{ fontSize: "13px", color: "red", cursor: "pointer" }}
                      onClick={() => {
                        const filtered = imagePreviews.filter((x) => x !== name);
                        setImagePreviews(filtered);
                      }}
                    >삭제</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />

          <br />
          <div
            ref={editorRef}
            contentEditable
            onPaste={handlePaste}
            onBlur={handleBlur}
            style={{
              fontSize: "15px",
              border: "1px solid #ccc",
              minHeight: "500px",
              padding: "10px",
              outline: "none",
            }}
          />

          <button onClick={handleSubmit} style={{ marginTop: "10px", cursor: "pointer" }}>
            글쓰기
          </button>
        </>
      ) : (
        <>
          <br /><br />
          <div>로그인이 필요합니다.</div>
        </>
      )}
    </>
  );
};

export default CreateNotice;