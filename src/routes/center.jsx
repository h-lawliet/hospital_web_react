import styled from "styled-components"
import PageContainer from "../components/pageContainer.jsx"
import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { centerData } from "../data/centerdata.js"

const Centercontent = styled.div`
  .line-deco {
    margin-top: 70px;
    height: 3.5px;
    width: 60px;
    background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
  }
  & > h2 {
    font-weight: 800;
    font-size: 1.2em;
    padding-bottom: 1em;
    line-height: 2em;
  }

  .center-img {
    width: 100%;
  }

  .center-img-2 {
    width: 36%;
    margin-right: 1%;
    float: left;
    height: auto;
  }

  .content-container {
    position: relative;
  }
  
  .center-content {
    line-height: 2em; 
    font-size: 1em;
    color: rgb(58, 58, 58);
    font-weight: 400;
    text-align: justify;
  }

  .center-content:first-of-type {
    margin-top: 0;
  }
  .center-content:last-of-type {
    margin-bottom: 0;
  }
  
  & > hr {
    margin: 0 10%;
    clear: both;
  }

  & > ul {
    padding-left: 20px;
    margin: 0;
  }
  .center-clinics {
    line-height: 2em;
    font-size: 1em;
    color: rgb(56, 56, 56);
    font-weight: 700;
    padding-bottom: 0.4em;
    text-align: justify;
  }

  #blank {
    height: 40px;
    clear: both;
  }

  @media (max-width: 600px) {
    & > h2 {
      font-weight: 800;
      font-size: 16px;
      padding-bottom: 1em;
      line-height: 30px;
    }
    .center-content {
      line-height: 30px; 
      font-size: 14px;
      color: rgb(103, 101, 101);
      font-weight: 400;
      text-align: justify;
    }
    
    & > hr {
      margin: 0 10%;
    }

    & > ul {
      padding-left: 20px;
    }
    .center-clinics {
      line-height: 2em;
      font-size: 14.5px;
      color: rgb(103, 101, 101);
      font-weight: 400;
      padding-bottom: 0.4em;
      text-align: justify;
    }
  }
`

function CenterContent() {

  let {id} = useParams()
  let [centerDataIndex, setCenterDataIndex] = useState(
    centerData[id]
  )

  useEffect(()=>{
    setCenterDataIndex(centerData[id])
  }, [id])

  return (
    <Centercontent>
      <div className="line-deco"/>
      <h2>{centerDataIndex.title}</h2>

      <img className="center-img" src={centerDataIndex.imgDetail[0]}/>

      <div id="blank"/>
      <hr/>
      <div id="blank"/>

      {
        centerDataIndex.contents.map((e, i)=>{
          return(
            <p className="center-content" key={i}>
              {(i === 0 && centerDataIndex.imgDetail.length === 2) && <img className="center-img-2" src={centerDataIndex.imgDetail[1]} />}
              {e}
            </p>
            
          )
        })
      }
      <div id="blank"/>
      <hr/>
      <div id="blank"/>
      <ul>
      {
        centerDataIndex.clinics.map((e, i)=>{
          return(
            <li className="center-clinics" key={i}>{e}</li>
          )
        })
      }
      </ul>
    </Centercontent>
  )
}

function Center(props) {
  return(
    <PageContainer item={props.item} content={<CenterContent/>}/>
  )
}

export default Center