import { useParams, Navigate } from "react-router-dom"
import PageContainer from "../components/pageContainer.jsx"
import Research from "./community/research.jsx"
import Notice from "./community/notice.jsx"
import Reserve from "./community/reserve.jsx"


// if문 처리 역할
function CommunityContent() {
  let {id} = useParams()

  if (id == 0) {
    return <Reserve/>
  } else if (id == 1) {
    return <Research/>
  } else {
    return <Notice/>
  }
}

function Community(props) {
  return(
    <PageContainer item={props.item} content={<CommunityContent/>}/>
  )
}

export default Community