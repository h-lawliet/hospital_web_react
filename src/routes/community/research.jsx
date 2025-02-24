import styled from "styled-components";
import { useEffect, useState } from "react";
import api from "../../api.js";

const ResearchTop = styled.div`
  .line-deco {
    margin-top: 60px;
    margin-bottom: 10px;
    height: 3.5px;
    min-height: 3.5px;
    max-height: 3.5px;
    width: 60px;
    background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
  }

  & > p {
    line-height: 30px;
    color: rgb(41, 40, 40);
    font-size: calc()
  }
`
const Graph = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3vw;
  margin-right: 3vw;
  overflow-x: auto;
  overflow-y: hidden;
  height: 330px;
  padding-top: 10vh;

  &::-webkit-scrollbar {
    display: none;
  }
  
  /* IE, Edge */
  -ms-overflow-style: none;
  
  /* Firefox */
  scrollbar-width: none;

  .y-axis {
    width: 15px;
    flex-shrink: 0;
    margin-bottom: 30px;
    border-right: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .y-axis > div {
    font-size: 10px;
    text-align: center;
    font-weight: 200;
  }
  .graph-item {
    display: flex;
    flex-direction: column-reverse;
    padding-left: calc(2vw + 10px);
    align-items: center;
  }
  .colored {
    flex-grow: 1;
    width: 25px;
    background: linear-gradient(to top left,  rgb(0, 51, 161), rgb(67, 110, 203));
  }
  .graph-year {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    color: gray;
  }

  @media (max-width: 600px) {
    .graph-item {
      display: flex;
      flex-direction: column-reverse;
      padding-left: calc(2vw + 10px);
      align-items: center;
    }
    .colored {
      flex-grow: 1;
      width: 20px;
      background: linear-gradient(to top left,  rgb(0, 51, 161), rgb(67, 110, 203));
    }
    .graph-year {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
      font-weight: 300;
      color: gray;
    }
  }
`
const ScrollYear = styled.div`
  margin-top: 50px;
  overflow: auto;

  .scroll-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .scroll-element {
    display: flex;
    width: 120px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #f7f3f3;
    color: #838282;
    flex-shrink: 0;
    cursor: pointer;
  }
  .scroll-element-selected {
    display: flex;
    width: 120px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 51, 161);
    color:rgb(244, 243, 243);
    flex-shrink: 0;
    cursor: pointer;
  }


  @media (max-width: 600px) {
    margin-top: 40px;
    overflow: auto;

    .scroll-wrap {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .scroll-element {
      display: flex;
      width: 100px;
      height: 40px;
      font-size: 14px;
      text-align: center;
      justify-content: center;
      align-items: center;
      background-color: #f7f3f3;
      color: #838282;
      flex-shrink: 0;
      cursor: pointer;
    }
    .scroll-element-selected {
      display: flex;
      width: 100px;
      height: 40px;
      font-size: 14px;
      text-align: center;
      justify-content: center;
      align-items: center;
      background-color: rgb(0, 51, 161);
      color:rgb(244, 243, 243);
      flex-shrink: 0;
      cursor: pointer;
    }
  }
`

const ResearchList = styled.div`
  margin-top: 20px;
  border-top: 1px solid rgb(0, 51, 161);

  .research-item {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
  }

  #journal {
    font-family: 'Times New Roman', Times, serif;
    font-size: 19px;
    font-weight: 600;
    padding-bottom: 2px;
  }
  #info {
    color: rgb(49, 48, 48);
    font-weight: 300;
    padding-bottom: 7px;
    font-size: 1em;
  }
  #title{
    color: rgb(0, 51, 161);
    font-weight: 400;
    font-size: 1em;
    padding-bottom: 2px;
  }
  #title > a {
    text-decoration: none;
    color: inherit;
  }
  #author {
    color: rgb(49, 48, 48);
    font-weight: 300;
    font-size: 1em;
  }


  @media (max-width: 600px) {
    margin-top: 20px;
    border-top: 1px solid rgb(0, 51, 161);

    .research-item {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 13.5px;
      border-bottom: 1px solid #e5e5e5;
    }

    #journal {
      font-family: 'Times New Roman', Times, serif;
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 2px;
    }
    #info {
      color: rgb(49, 48, 48);
      font-weight: 300;
      padding-bottom: 7px;
      font-size: 1em;
    }
    #title{
      color: rgb(0, 51, 161);
      font-weight: 400;
      font-size: 1em;
      padding-bottom: 2px;
    }
    #title > a {
      text-decoration: none;
      color: inherit;
    }
    #author {
      color: rgb(49, 48, 48);
      font-weight: 300;
      font-size: 1em;
    }
  }
`

function Research() {

  let [selectedYear, setSelectedYear] = useState(2024)
  let [ResearchData, setResearchData] = useState([])
  let [filtered, setFiltered] = useState([])
  let [isSmall, setIsSmall] = useState(false)
  let [BarData, setBarData] = useState([])

  const highlight = "Ji Man Hong"

  const handleResize = () => {
    setIsSmall(window.innerWidth <= 1600)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [filtered])

  useEffect(()=>{
    api.get("/research", {withCredentials: true}).then((res)=>{
      setResearchData(res.data)
    }).catch((err)=>{
      console.log(err)
      alert(err + " 논문 데이터를 가져오지 못했습니다.")
    })
  }, [])

  useEffect(()=>{
    setFiltered(ResearchData.filter(item => item.year == selectedYear)
    .sort((a, b) => a._id.localeCompare(b._id)))
  }, [selectedYear, ResearchData])

  useEffect(()=>{
    const yearCounts = ResearchData.reduce((acc, item) => {
      acc[item.year] = (acc[item.year] || 0) + 1
      return acc
    }, {})

    const result = Object.entries(yearCounts).map(([year, number]) => ({
      year,
      number
    }))

    setBarData(result.reverse())

    if (result.length > 0) {
      setSelectedYear(result[0].year)
    }
  }, [ResearchData])

  return(
    <>
    <ResearchTop>
    <div className="line-deco"></div>
    <p>홍지만 박사는 국내 최초로 지역 뇌졸중 프로그램인 “아주뇌졸중 프로그램”을 개발 및 보급하였으며, 
      모야모야병 및 뇌혈관 재생 분야에서는 세계 최초의 최소침습 시술을 개발하고 보급하는 등 혁신적인 성과를 이루어왔습니다. 
      또한, 신경집중치료 분야(예: 저체온 냉동치료)와 뇌세포 보호 연구 분야에서도 세계적인 연구를 지속적으로 진행해 왔습니다.</p>
    </ResearchTop>

    <ScrollYear>
      <div className="scroll-wrap">
      {
        BarData.map((e, i)=>{
          return(
            <div key={i} className={
              e.year === selectedYear ? 
              "scroll-element-selected" : 
              "scroll-element"
            } onClick={()=>{setSelectedYear(e.year)}}>{e.year}</div>
          )
        })
      }
      </div>
    </ScrollYear>

    {isSmall ? <div style={{
      color: "rgb(0, 51, 161)",
      fontSize: "11px",
      paddingTop: "10px"
    }}>
      *좌우로 스크롤하여 확인할 수 있습니다
    </div> : null}

    <ResearchList>
      {
        filtered.map((e, i)=>{
          return(
            <div className="research-item">
              <div id="journal">{e.journal}</div>
              <div id="info">
                {e.doi ? <span>DOI: {e.doi}</span> : <span>DOI: -</span>}
                &nbsp;&nbsp;|&nbsp;&nbsp;
                {e.impact ? <span>IF: {e.impact}</span> : <span>IF: -</span>}
              </div>
              <div id="title">
              {
                e.url ? <a href={e.url} target="blank">{e.title}</a> : 
                <span>{e.title}</span>
              }
              </div>
              <div id="author">
              {e.author.split(new RegExp(`(${highlight})`, "gi")).map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                  <strong key={index} style={{ fontWeight: "600"}}>
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
              </div>
            </div>
          )
          
        })
      }
      
    </ResearchList>
    <Graph>
      <div className="y-axis">
        <div>15</div><div>10</div><div>5</div><div>0</div>
      </div>
      {
        BarData.map((e, i)=>{
          return(
            <div className="graph-item" style={{
              height: `${e.number * 20 + 30}px`,
              marginTop: `${300-e.number*20}px`
            }}>
              <div className="graph-year">{e.year}</div>
              <div className="colored"></div>
            </div>
          )
        })
      }
    </Graph>
    </>
  )
}

export default Research