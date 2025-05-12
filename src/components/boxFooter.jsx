import styled from "styled-components"

const Boxfooter = styled.div`
  width: 100%;
  background-color: rgb(247, 247, 247);
  margin-bottom: 30px;

  & > h3 {
    margin: 0;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 20px;
    color: rgb(83, 83, 83);
    font-size: calc(17px + 0.05vw);
  }
  .tel {
    color: rgb(110, 110, 110);
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: 0;
    font-size: 15px;
  }
  .tel.last {
    padding-bottom: 15px;
  }

  .time {
    color: rgb(110, 110, 110);
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin: 0;
    font-size: 14px;
  }

  .rest {
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    color: rgb(193, 98, 98);
    line-height: 25px;
  }
`

function BoxFooter() {
  return (
    <Boxfooter>
      <h3>진료시간 및 연락처</h3>
      <p className="tel">
        Tel. 031-222-3317
      </p>
      <p className="tel last">
        Fax. 031-221-3318
      </p>
      <p className="time">
        평일 : 09:00 - 18:00
      </p>
      <p className="time">
        토요일 : 09:00 - 13:00
      </p>
      <p className="time">
        점심시간 : 13:00 - 14:00
      </p>
      <p className="rest">
        일요일 · 공휴일 : 외래진료만 휴진<br/>
        <strong>입원실은 365일 정상운영합니다</strong>
      </p>
    </Boxfooter>
  )
}

export default BoxFooter