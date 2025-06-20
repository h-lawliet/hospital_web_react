import styled from "styled-components"

const Expense = () => {

  const StyledExpense = styled.div`
    padding-top: 50px;

    img {
      width: 100%;
      padding-bottom: 30px;
    }
  `
  return (
    <StyledExpense>
      <img src="https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/1749865621221"/>
      <img src="https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/1749865621225"/>
      <img src="https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/1749865621332"/>
      <img src="https://hong-hospital-suwon.s3.ap-northeast-2.amazonaws.com/1749865621333"/>
    </StyledExpense>
  )
}

export default Expense