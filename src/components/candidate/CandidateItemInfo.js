import { Badge } from "react-bootstrap";

const CandidateItemInfo = (props) => {
  const { name, job, domicile } = props;
  let newSkills = [];

  if (props.skills) {
    newSkills = JSON.parse(props?.skills);
  }

  return (
    <div>
      <h4>{name}</h4>
      <p className="text-secondary mb-1">{job}</p>
      <p className="text-secondary mb-4">{domicile}</p>
      <div className="d-flex gap-1">
        {newSkills.map((data) => (
          <Badge key={data} bg="warning">
            {data}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CandidateItemInfo;
