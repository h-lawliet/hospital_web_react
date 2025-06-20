import { useParams, Navigate } from "react-router-dom"
import styled from "styled-components"
import PageContainer from "../components/pageContainer.jsx"
import { useEffect, useState } from "react"
import api from "../api.js"
import { fetchExaminationRooms } from "../data/navlist.js"


const StyledExam = styled.div`
  .line-deco {
    margin-top: 70px;
    height: 3.5px;
    width: 60px;
    background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
  }
  
  .heading-title {
    color: rgb(67, 110, 203);
  }

  .exam-menu {
    display: grid;
  }

  .exam-img {
    width: 100%;
    padding-top: 20px;
  }
  .exam-img > img {
    width: 100%;
  }

  .exam-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(103, 101, 101);
    font-weight: 400;
    padding: 15px 0;
    border: 0.5px solid rgb(213, 210, 210);
    background-color: rgb(243, 243, 243);
    cursor: pointer;
  }

  .exam-menu-item:nth-child(n+4) {
    border-top: none;
  }
  .exam-menu-item-selected {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 51, 161);
    font-weight: 500;
    border: 0.5px solid rgb(0, 51, 161);
    background-color: rgb(255, 255, 255);
    cursor: pointer;
  }

  .exam-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
  }
  .exam-content-item {
    display: flex;
    width: 100%;
    padding: 1em 0;
    flex-grow: 1;
    border-bottom: 0.5px solid rgb(240, 236, 236);
  }
  .exam-content-item:last-child {
    border-bottom: none;
  }
  #key {
    width: 20%;
    flex-shrink: 0;
    display: flex;
    align-items:center;
    padding: 0 10px;
    font-weight: 600;
    color: rgb(69, 67, 67);
  }
  #value {
    padding: 0 10px;
    text-align: justify;
    color: rgb(103, 101, 101);
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    & > h3 {
      font-size: clamp(20px, calc(0.01vw + 19px), 25px);
    }

    .exam-menu {
      grid-template-columns: repeat(3, 1fr);
    }

    .exam-menu-item {
      font-size: clamp(16px, calc(0.01vw + 16px), 18px);
      padding: 16px 0;
    }
    .exam-menu-item:nth-child(3n+2),
    .exam-menu-item:nth-child(3n) {
      border-left: none;
    }
    .exam-menu-item:nth-child(n+4) {
      border-top: none;
    }
    .exam-menu-item-selected {
      font-size: clamp(16px, calc(0.01vw + 16px), 18px);
      padding: 16px 0;
    }
    #key {
      font-size: clamp(16px, 1.21vw, 17px);
    }
    #value {
      font-size: clamp(16px, 1.21vw, 17px);
      line-height: 30px;
    }
  }

  // 태블릿
  @media (min-width: 600px) and (max-width: 1200px) {
    & > h3 {
      font-size: 18px;
    }

    .exam-menu {
      grid-template-columns: repeat(3, 1fr);
    }

    .exam-menu-item {
      font-size: 16px;
      padding: 15px 0;
    }
    .exam-menu-item:nth-child(3n+2),
    .exam-menu-item:nth-child(3n) {
      border-left: none;
    }
    .exam-menu-item:nth-child(n+4) {
      border-top: none;
    }
    .exam-menu-item-selected {
      font-size: 16px;
      padding: 15px 0;
    }
    #key {
      font-size: 15.5px;
    }
    #value {
      font-size: 15.5px;
      line-height: 30px;
    }
  }

  // 모바일
  @media (max-width: 600px) {

    & > h3 {
      font-size: 17px;
    }

    .exam-menu {
      grid-template-columns: repeat(2, 1fr);
    }

    .exam-menu-item {
      font-size: calc(1vw + 10px);
      padding: 14px 0;
    }

    .exam-menu-item:nth-child(2n) {
      border-left: none;
    }
    .exam-menu-item:nth-child(n+3) {
      border-top: none;
    }
    
    .exam-menu-item-selected {
      font-size: calc(1vw + 10px);
      padding: 14px 0;
    }
    #key {
      font-size: calc(0.9vw + 10px);
    }
    #value {
      font-size: calc(0.9vw + 10px);
      line-height: 27px;
    }
  }
`



// if문 처리 역할
function ExaminationContent({item}) {
  let [examination, setExamination] = useState([])
  let [index, setIndex] = useState(null)
  let [selectedMenu, setSelectedMenu] = useState(0)
  const [rooms, setRooms] = useState([])
  let {id} = useParams()

  useEffect(() => {
    fetchExaminationRooms((arr) => {       // rooms 배열을 그대로 전달받음
      setRooms(arr)                        // → state 교체 → 리렌더
    })
  }, [])

  useEffect(() => {
    if (rooms.length === 0) return           // 아직 rooms 없음
    const roomName = rooms[id]               // 현재 탭의 룸 이름
    if (!roomName) return                    // id 범위 밖

    api.get("/examination", { withCredentials: true })
       .then(res => {
         const list = res.data.filter(d => d.room.trim() === roomName)
         setExamination(list)
         setSelectedMenu(0)                  // 메뉴 처음으로 초기화
       })
       .catch(console.error)
  }, [rooms, id])

  if (rooms.length === 0) return <div>Loading…</div>
  if (id < 0 || id >= rooms.length) return <Navigate to="/404" replace />

  const currentExam = examination[selectedMenu]
  const roomTitle   = rooms[id]

  return(
    <StyledExam>
      <div className="line-deco"/>
      {examination.length > 1 ? 
        <h3><span className="heading-title">{roomTitle}</span>에서 진행하는 검사들입니다</h3> : 
        <h3><span className="heading-title">{roomTitle}</span>에서 진행하는 검사입니다</h3>
      }
      <div className="exam-menu">
      {
        examination.map((e, i)=>{
          return (
            <div key={i} className={i==selectedMenu ? "exam-menu-item-selected" : "exam-menu-item"} onClick={()=>{
              setSelectedMenu(i)
            }}>{e.title}</div>
          )
        })
      }
      </div>
      <div className="exam-img">
        <img src={currentExam?.image ?? ""}/>
      </div>
      {
        examination.length !== 0 ? <div className="exam-content">
          <div className="exam-content-item">
            <div id="key">검사목적</div>
            <div id="value">{currentExam?.purpose ?? ""}</div>
          </div>
          <div className="exam-content-item">
            <div id="key">검사방법</div>
            <div id="value">{currentExam?.method}</div>
          </div>
          <div className="exam-content-item">
            <div id="key">소요시간</div>
            <div id="value">{currentExam?.time}</div>
          </div>
          <div className="exam-content-item">
            <div id="key">주의사항</div>
            <div id="value">{currentExam?.caution}</div>
          </div>
          <div className="exam-content-item">
            <div id="key">결과해석</div>
            <div id="value">{currentExam?.result}</div>
          </div>
        </div> : <div>등록된 검사가 없습니다.</div>
      }
    </StyledExam>
  )
}

function Examination(props) {

  return(
    <PageContainer item={props.item} content={<ExaminationContent item={props.item}/>}/>
  )
}

export default Examination