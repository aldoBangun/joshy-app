import { Badge } from "react-bootstrap";

const ProfileCandidateSkills = ({ skills }) => {
  let arraySkills = []

  if(skills) {
    arraySkills = JSON.parse(skills); 
  }

  return (
    <div className="mt-3 mb-5">
      <h3>Skills</h3>
      <div className="d-flex gap-2 flex-wrap">
        {arraySkills.length ? (
          <>
            {arraySkills.map((skill,index) =>(
              <Badge key={index} bg="warning" className="inline-block py-2 px-3"> {skill} </Badge>
            ))}
          </>
        ) : (
          <span>No Skills</span>
        )}
      </div>
    </div>
  )
}

export default ProfileCandidateSkills;