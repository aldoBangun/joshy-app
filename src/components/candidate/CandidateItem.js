import { ListGroup, Button } from "react-bootstrap";
import CandidateItemInfo from "./CandidateItemInfo";

const CandidateItem = (props) => {
  const {name, job, domicile, skills} = props
  const info = { name, job, domicile, skills }
  // const styleImage = {
  //   height: 100,
  //   widht: 100,
  //   borderRadius: '50%'
  // }

  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between py-4">
      <div className="d-flex align-items-center gap-5">
        {/* <img src={image} alt={name} style={styleImage} /> */}
        <CandidateItemInfo {...info} />
      </div>
      <Button>Lihat Profile</Button>
    </ListGroup.Item>
  )
}

export default CandidateItem;