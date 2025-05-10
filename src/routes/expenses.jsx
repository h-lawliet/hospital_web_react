import styled from "styled-components"

const Expense = styled.div`
  @media (max-width: 1200px) {
    padding-top: 120px;
    padding-left: 4vw;
    padding-right: 4vw;
  }

  @media (min-width: 1200px) {
    padding-top: calc(12vh + 20px);
    padding-left: 10vw;
    padding-right: 10vw;
  }
`


const Expenses = () => {
  return (
    <Expense>
      <p>준비중입니다.</p>
    </Expense>
  )
}

export default Expenses