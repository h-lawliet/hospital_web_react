import styled, {keyframes} from "styled-components";
import { useParams, Link, useLocation } from "react-router-dom";
import BoxFooter from "./boxFooter";
import { useEffect, useState } from "react";
import { fetchExaminationRooms } from "../data/navlist";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 12vh;

  @media (max-width: 1200px) {
    padding-top: 100px;
  }
`
const zoomIn = keyframes`
  from {
    background-size: 100% auto;
  }
  to {
    background-size: 140% auto;
  }
`

const PagePicture = styled.div`
  height: 35vh;
  background-image: url(${(props) => props.img});
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${zoomIn} 2s ease-out forwards;

  .pagepicture-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .pagepicture-text {
    z-index: 3;

    @media (max-width: 600px) {
      font-size: calc(30px + 1vw);
    }

    font-size: calc(38px + 0.5vw);
    font-weight: 600;
    color: white;
    text-shadow: 0px 0px 5px rgb(0, 0, 0);
  }
`
const PageContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;

  @media (min-width: 1200px) {
    padding: 0 10vw;
  }

  @media (max-width: 1200px) and (min-width: 900px) {
    padding: 0 4vw;
  }

  @media (max-width: 900px) {
    padding: 0 4vw;
  }

  .content-container {
    flex: 1;
    overflow: hidden;
    padding-bottom: 10vh;
  }
`

const PageNav = styled.div`

  padding-right: 3vw;
  flex-shrink: 0;
  
  @media (min-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 1200px) and (min-width: 900px) {
    width: 220px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const PageNavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  .pagenav-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: rgb(0, 51, 161);
    color: white;
  }

  // 호버링 효과
  & > li {
    height: 50px;
    line-height: 50px;
    font-weight: 400;
    color: rgb(132, 130, 130);
    padding-left: 15px;
    font-size: 14px;
  }
  & > li:not(:last-of-type) {
    border-bottom: 1px solid rgb(236, 227, 227);
  }

  & > li > a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  & > li:hover {
    padding-left: 20px;
    font-weight: 800;
  }
  .selected-list {
    padding-left: 20px;
    font-weight: 800;
  }
`

// 측면 바, 상단 이미지는 내용만 다르고 동일. PageContainer에서 렌더링

function PageContainer({item, content}) {

  let {id} = useParams()
  const location = useLocation()
  const [_, forceRender] = useState({})
  const [itemDetails, setItemDetails] = useState(item.detail)

  useEffect(()=>{
    fetchExaminationRooms((rooms) => {setItemDetails([...rooms])})
  }, [])

  useEffect(() => {
    setItemDetails(item.detail)
  }, [item.detail])

  return(
    <Container>
      <PagePicture img={item.topImg}>
        <div className="pagepicture-cover"/>
        <>
          <div className="pagepicture-text">{
            itemDetails.length === 1 ? itemDetails[0] : itemDetails[id]
          }</div>
        </>
        
      </PagePicture>
      <PageContent>
        <PageNav>
          <PageNavUl>
          <div className="pagenav-title">
            <div style={{textAlign: "center"}}>
              <div style={{
                display: "inline-block",
                paddingBottom: "8px",
                fontSize: "20px",
                fontWeight: 700
              }}>{item.name}</div>
              <img src="/images/pagenav_logo.png" style={{width: "94%"}}/>
            </div>
            
          </div>
          {
            itemDetails.length !== 0 ?
            <>
              {
                itemDetails.map((e, i)=>{
                  return (
                    <li key={i} className={i == id ? "selected-list" : null}><Link to={`${item.link}/${i}`}>{e}</Link></li>
                  )
                })
              }
            </> : <p>빈배열</p>
          }
          </PageNavUl>
          <BoxFooter/>
        </PageNav>
        <div className="content-container">
          {content}
        </div>
        
      </PageContent>
    </Container>
  )
}

export default PageContainer