import { Card, Image } from "react-bootstrap";
import { GeoAlt, Person } from "react-bootstrap-icons";
import ProfileCandidateSkills from "./ProfileCandidateSkills";
import ProfileCandidateSocials from "./ProfileCandidateSocials";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProfileCandidateInfo = (props) => {
  const loggedInUser = useSelector(state => state.currentUser.user);
  const loggedInUserId = loggedInUser?.id;
  const loggedInUserRole = loggedInUser?.roleId;
  const isSameUser = loggedInUserId === props?.id;
  const isRecruiter = loggedInUserRole === 1;
  const { userId } = useParams()

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
        <div className="d-flex justify-content-center">
          {
            profilePicture
              ? <Image src={profilePicture} alt={name} height={200} width={200} roundedCircle className="mb-4" />
              : (
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-warning" style={{ height: 200, width: 200 }}>
                  <Person size={100} />
                </div>
              )
          }
          
        </div>
        <h3>{name}</h3>
        <h6>{job}</h6>
        <div className="text-secondary">
          <p>
            {
              domicile ? (
                <>
                  <GeoAlt /> {domicile}
                </>
              ) : (
                <span>No Location</span>
              )
            }
          </p>
          <p>{workPlace ? workPlace : 'No workplace'}</p>
          <p>{description ? description : 'No description'}</p>
        </div>
        <div className="d-grid">
          {isRecruiter && <Link to={`/hire/${userId}`} className="btn btn-primary">Hire</Link>}
          {isSameUser && <Link to="/profile/edit" className="btn btn-primary" >Edit Profile</Link>}
        </div>
        <ProfileCandidateSkills skills={skills} />
        <ProfileCandidateSocials email={email} instagram={instagram} github={github} />
      </Card>
    </>
  )
}

export default ProfileCandidateInfo;