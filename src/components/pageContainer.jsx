import styled, { keyframes, css } from "styled-components";
import { useParams, Link, useLocation } from "react-router-dom";
import BoxFooter from "./boxFooter";
import { useEffect, useState } from "react";
import { fetchExaminationRooms } from "../data/navlist";

/* ───────────── styled-components ───────────── */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12vh;

  @media (max-width: 1200px) {
    padding-top: 100px;
  }
`;

const zoomIn = keyframes`
  100% { transform: scale(1.2); }
`;

const StyledPagePicture = styled.div`
  height: clamp(100px, 30vh, 300px);
  position: relative;
  overflow: hidden;

  .pagepicture-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  .pagepicture-text {
    position: absolute;
    width: 80%;
    text-align: center;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 0 0 5px #000;
    font-size: calc(35px + 0.5vw);
    font-weight: 600;

    @media (max-width: 600px) {
      font-size: calc(20px + 1vw);
    }

    @media (max-width: 1200px) {
      width: 92%;
    }
  }
`;

/* 애니메이션을 조건부로 적용하는 이미지 컴포넌트 */
const TopImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
  transform: scale(1);

  ${({ $loaded }) =>
    $loaded &&
    css`
      animation: ${zoomIn} 1s ease-out forwards;
    `}
`;

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
`;

const PageNav = styled.div`
  padding-right: 3vw;
  flex-shrink: 0;

  @media (min-width: 1200px) {
    width: 250px;
  }
  @media (max-width: 1200px) and (min-width: 900px) {
    width: 230px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

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
    color: #fff;
  }

  & > li {
    height: 50px;
    line-height: 50px;
    font-weight: 400;
    color: rgb(37, 37, 37);
    padding-left: 15px;
    font-size: 15px;
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
`;

/* ───────────── 컴포넌트 ───────────── */

function PageContainer({ item, content }) {
  const { id } = useParams();
  const location = useLocation(); // 경로 변화 감지 용도, 추후 사용 가능
  const [itemDetails, setItemDetails] = useState(item.detail);
  const [imgLoaded, setImgLoaded] = useState(false);

  /* 검사실 페이지일 때 서버에서 목록 갱신 */
  useEffect(() => {
    if (item.link !== "/examination") return;
    fetchExaminationRooms((rooms) => setItemDetails([...rooms]));
  }, [item.link]);

  return (
    <Container>
      <StyledPagePicture>
        <div className="pagepicture-cover" />
        <TopImg
          src={item.topImg}
          alt=""
          $loaded={imgLoaded}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="pagepicture-text">
          {itemDetails.length === 1 ? itemDetails[0] : itemDetails[id]}
        </div>
      </StyledPagePicture>

      <PageContent>
        <PageNav>
          <PageNavUl>
            <div className="pagenav-title">
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-block",
                    paddingBottom: "8px",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </div>
                <img
                  src="/images/pagenav_logo.png"
                  style={{ width: "94%" }}
                  alt=""
                />
              </div>
            </div>

            {itemDetails.length ? (
              itemDetails.map((e, i) => (
                <li key={i} className={i == id ? "selected-list" : null}>
                  <Link to={`${item.link}/${i}`}>{e}</Link>
                </li>
              ))
            ) : (
              <p>빈배열</p>
            )}
          </PageNavUl>
          <BoxFooter />
        </PageNav>

        <div className="content-container">{content}</div>
      </PageContent>
    </Container>
  );
}

export default PageContainer;