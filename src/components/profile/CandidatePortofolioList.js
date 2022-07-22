import { Row, Col } from "react-bootstrap";
import CandidatePortofolioItem from "./CandidatePortofolioItem";

const CandidatePortofolioList = ({ portofolios }) => {
  return (
    <Row>
      {portofolios.map((portofolio) => (
        <Col key={portofolio.id} lg={4} className="mt-3">
          <CandidatePortofolioItem {...portofolio}/>
        </Col>
      ))}
    </Row>
  )
}

export default CandidatePortofolioList;