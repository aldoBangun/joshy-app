import { Badge } from "react-bootstrap";

const CandidateItemInfo = (props) => {
  const { name, job, domicile, skills } = props

  return (
    <div>
      <h4>{name}</h4>
      <p className="text-secondary mb-1">{job}</p>
      <p className="text-secondary mb-4">{domicile}</p>
      <div className="d-flex gap-1">
        {skills.map((skill) => (
          <Badge key={skill} bg="warning" >{skill}</Badge>
        ))}
      </div>
    </div>
  )
}

export default CandidateItemInfo;