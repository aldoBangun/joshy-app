import { ListGroup, Button } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import CandidateItemInfo from "./CandidateItemInfo";
import { Link } from "react-router-dom";


const CandidateItem = (props) => {
  const {name, job, domicile, skills, profilePicture: image } = props
  const info = { name, job, domicile, skills }
  const styleImage = {
    height: 100,
    width: 100,
    borderRadius: '50%'
  }

  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between py-4">
      <div className="d-flex align-items-center gap-5">
        {image ? (
          <img src={image} alt={name} style={styleImage} />
        ) : (
          <>
            <div className="bg-secondary d-flex align-items-center justify-content-center" style={styleImage}>
              <Person size={48} color={"white"} />
            </div>
          </>
        )}
        <CandidateItemInfo {...info} />
      </div>
      <Link to={ `/profile/${props.id}` }>
        <Button>Lihat Profile</Button>
      </Link>
    </ListGroup.Item>
  )
}

export default CandidateItem;