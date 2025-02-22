import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Notfoundpage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  div {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    margin-top: 0;
  }
  h2 {
    color: rgb(0, 51, 161);
    margin-top: 0;
  }

  span {
    cursor: pointer;
  }
`

export default function NotFoundPage() {

  const navigate = useNavigate()

  return (
    <Notfoundpage>
      <div>
        <h1>404</h1>
        <h2>존재하지 않는 페이지입니다.</h2>
        <span onClick={()=>{navigate('/')}}>홈으로 돌아가기</span>
      </div>
    </Notfoundpage>
  )
}