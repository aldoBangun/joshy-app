import { Card, Image, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import ProfileCandidateSkills from "./ProfileCandidateSkills";
import ProfileCandidateSocials from "./ProfileCandidateSocials";

const ProfileCandidateInfo = (props) => {
  const { 
    profilePicture,
    name, 
    job, 
    domicile, 
    workPlace, 
    description,
    skills, 
    email,
    instagram,
    github 
   } = props;

  return (
    <>
      <Card className="border-0 p-4 pb-5">
        <div className="text-center">
          <Image src={profilePicture} alt={name} height={200} width={200} roundedCircle className="mb-4" />
        </div>
        <h3>{name}</h3>
        <h6>{job}</h6>
        <div className="text-secondary">
          <p>
            <GeoAlt />
            {domicile}
          </p>
          <p>{workPlace}</p>
          <p>{description}</p>
        </div>
        <div className="d-grid">
          <Button>Hire</Button>
        </div>
        <ProfileCandidateSkills skills={skills} />
        <ProfileCandidateSocials email={email} instagram={instagram} github={github} />
      </Card>
    </>
  )
}

export default ProfileCandidateInfo;