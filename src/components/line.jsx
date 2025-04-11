import styled from "styled-components"

const Line = styled.span`
  @media (max-width: 600px) {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
    margin-top: 60px;
    margin-bottom: 20px;
  }

  @media (min-width: 600px) {
    width: 70px;
    height: 4px;
    background: linear-gradient(to right, rgb(0, 51, 161), rgb(67, 110, 203));
    margin-top: 60px;
    margin-bottom: 20px;
  }
`

function LineDeco() {
  return (
    <Line/>
  )
}

export default LineDeco