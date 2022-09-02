import { Row, Col } from "react-bootstrap";
import CandidatePortofolioItem from "./CandidatePortofolioItem";

const CandidatePortofolioList = ({ portofolios }) => (

  <>
    {portofolios?.length ? (
      <Row>
        {portofolios.map((portofolio) => (
          <Col key={portofolio.id} lg={4} className="mt-3">
            <CandidatePortofolioItem {...portofolio}/>
          </Col>
        ))}
      </Row>
    ) : (
      <p>No portofolios yet</p>
    )}
  </>
)

export default CandidatePortofolioList;