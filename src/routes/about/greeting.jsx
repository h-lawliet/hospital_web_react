import styled from "styled-components"

function Greeting() {
  
  const StyledGreeting = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 50px;
    padding-top: 70px;

    .greeting-img {
      width: 100%;
      margin-top: 25px;
      border-radius: 10px;
    }

    .greeting-title {
      text-align: center;
      color: rgb(0, 51, 161);
      font-weight: 700;
      padding: 0 5%;
      word-break: keep-all;

      @media (max-width: 600px) {
        font-size: 17px;
        line-height: 30px;
      }

      @media (min-width: 600px) {
        font-size: calc(20px + 0.1vw);
        line-height: calc(37px + 0.1vw);
      }
    }

    .greeting-content {
      padding-top: 20px;
    }

    .greeting-content > p {
      color: rgb(59, 59, 59);
      font-weight: 400;

      @media (max-width: 500px) {
        font-size: 14px;
        line-height: 30px;
        text-align: justify;
      }
      @media (min-width: 500px) and (max-width: 900px) {
        font-size: 15px;
        line-height: 32px;
        text-align: justify;
      }
      @media (min-width: 900px) {
        font-size: clamp(16px, calc(0.02vw + 15px), 18px);
        line-height: calc(35px + 0.01vw);
        text-align: justify;
      }
    }
    
    .greeting-end {
      padding-top: 10px;
      color: rgb(0, 0, 0);
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 20px;

      @media (max-width: 1200px) {
        font-size: 18px;
      }
    }
    #name {
      color: rgb(0, 51, 161);
      @media (min-width: 1200px) {
        font-size: calc(0.05vw + 30px);
        font-weight: 700;
      }
      @media (max-width: 1200px) {
        font-size: calc(0.1vw + 22px);
      }
    }
  `

  return (
    <StyledGreeting>
      <div className="line-deco"/>
      <div className="greeting-title">
        탁월한 전문성과 최선의 진료로 항상 여러분과 함께하는 홍지만신경과가 되겠습니다  
      </div>
      <img className="greeting-img" src="/images/about/about1.webp"/>
      <div className="greeting-content">
        <p>
          안녕하세요. 홍지만신경과 대표원장 홍지만입니다.
        </p>
        <p>
          저는 어느덧 신경과 전문의로 23년 동안 활동하였으며 허혈 뇌졸중 및 모야모야 질환(뇌혈관이 점점 좁아지고 가늘어지는 질환)뿐 아니라 두개내혈관동맥경화 및 뇌혈관-조직 보호와 관련된 뇌졸중 환자의 새로운 치료법에 관하여 끊임없이 연구해 왔습니다. 
          또한 아주대학교병원에서 급성 중증 뇌졸중을 진료하고 학생들과 레지던트, 전임의를 교육한지도 20년이 넘었습니다. 
          의료현장에서의 경험을 바탕으로, 신경계 질환으로 일상을 잃은 환자들이 다시 평범한 삶으로 돌아갈 수 있도록 돕겠다는 사명을 가지고 병원을 개원하였습니다. 
          제가 오랜기간 쌓은 지식과 경험을 지역사회의 환자분들을 위해 활용하려고 합니다.
        </p>
        <p>
          <strong>평범한 11호님을 위한 꿈</strong>은 뇌혈관 질환으로 일상을 잃은 환자들이 치료를 마치고 병원 문을 나설때 11자로 일어서서 평범한 생활로 돌아갈 수 있도록 하자는 의미를 지니고 있습니다. 
          이는 제가 23년간 신경과 전문의로 활동하면서 늘 마음속에 품고 있는 핵심 가치이자, 저희 병원의 핵심 가치이기도 합니다. 
          병원 1층의 테마는 <strong>11호님의 산책</strong>으로, 운동 및 이완센터가 위치하고 있어 환자의 상태에 따른 <strong>맞춤형 재활 · 운동프로그램</strong>을 제공해드리고 있습니다. 
          2층의 테마는 <strong>11호님의 희망</strong>으로, 급성 뇌졸중 환자를 위해 <strong>대학병원 수준의 집중치료실과 영상실</strong>을 갖추고 있어, 초기 진단부터 치료까지 신속하게 진행할 수 있습니다. 
          이를 통해 신경학적 악화, 섬망, 내과적 합병증과 같은 위험 요소를 최소화하고 환자의 치료 결과를 크게 향상시킬 수 있습니다. 
          더불어, <strong>모야모야병 및 유사 질환을 위한 전문 클리닉</strong>을 운영하며, 정밀한 진단과 치료를 제공합니다. 
          제가 직접 개발한 <strong>최소침습시술</strong>은 전신마취와 개두술 없이 국소마취로 진행되며, 급성기에 상태가 불안정한 환자들에게 큰 도움을 주었습니다. 
          이 시술은 지금까지 많은 혈관 문합에 성공하여 그 효과를 입증하였으며 세계적인 저널에 다수 게재되어 한국의료의 위상을 올리기도 했습니다. 
          3층의 테마는 <strong>11호님을 위한 배려</strong>로 24시간, 연중무휴로 운영되는 입원실이 위치하고 있습니다.
        </p>
        <p>
          보다 정확한 진단을 위해 저희 병원은 준 대학병원 급의 검사시설을 갖추고 있습니다. 
          뇌혈관생리검사(내막, 중막 검사), 뇌혈류초음파, 경동맥초음파, 맥파검사, 동맥경 화도검사, 혈압표기 검사, 연속혈압검사, 안저혈관검사, 뇌혈류기반기립경사검사, 비디오안진검사, 자율신경검사, 혈액 및 DNA 검사 등이 시행되고 있으며, 최신형 CT 및 MRI를 갖추고 있어 환자의 상태를 정확하고 신속하게 파악할 수 있습니다.
        </p>
        <p>
          환자 한 분 한 분이 다시 평범한 일상으로 돌아가는 그날까지 최선을 다하겠습니다. 언제든지 병원을 방문하시거나 전화로 문의 주시면 친절히 상담해 드리겠습니다.
        </p>
        <p>감사합니다.</p>
        <div className="greeting-end">
          신경과 전문의 &nbsp; <span id="name">홍지만</span>
        </div>
      </div>
    </StyledGreeting>
  )
}

export default Greeting