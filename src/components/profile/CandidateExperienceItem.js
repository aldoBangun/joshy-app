import moment from "moment";
import { Row, Col, Image } from "react-bootstrap";
import { Building } from "react-bootstrap-icons";

const CandidateExperienceItem = (props) => {
  const { position, company_name, start_date, end_date, description, image } =
    props;
  const normalizeDate = (date) => moment(date).format("MMMM YYYY");
  const getTotalMonth = (start, end) => {
    const startDate = new moment(start);
    const endDate = new moment(end);
    const months = moment.duration(endDate.diff(startDate)).asMonths();

    return Math.floor(months) + " Months";
  };

  const startDate = normalizeDate(start_date);
  const endDate = normalizeDate(end_date);
  const totalMonth = getTotalMonth(start_date, end_date);

  return (
    <Row className="pt-3" b>
      <Col lg={2} className="d-flex">
        {image ? (
          <Image src={image} alt={company_name} />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{
              width: 80,
              height: 80,
              backgroundColor: "lightgray",
            }}
          >
            <Building color="white" size={32} />
          </div>
        )}
      </Col>
      <Col>
        <h5>{position}</h5>
        <h6>{company_name}</h6>
        <p className="d-flex gap-4 text-secondary">
          <span>
            {startDate} - {normalizeDate(endDate)}
          </span>
          <span>{totalMonth}</span>
        </p>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

export default CandidateExperienceItem;
