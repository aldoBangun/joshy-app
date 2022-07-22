import { Badge } from "react-bootstrap";

const ProfileCandidateSkills = ({ skills }) => {
  return (
    <div className="mt-3 mb-5">
      <h3>Skills</h3>

      <div className="d-flex gap-2">
        {skills.map((skill,index) =>(
          <Badge key={index} bg="warning" className="inline-block py-2 px-3"> {skill} </Badge>
        ))}
      </div>
    </div>
  )
}

export default ProfileCandidateSkills;