import { Github, Instagram, Envelope } from "react-bootstrap-icons";

const ProfileCandidateSocials = (props) => {
  const { email, instagram, github } = props

  return (
    <>
      <ul className="text-secondary" style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li className="d-flex align-items-center gap-3 mb-3">
          <Envelope />
          <p className="mb-0"> {email} </p>
        </li>
        <li className="d-flex align-items-center gap-3 mb-3">
          <Instagram />
          <p className="mb-0"> {instagram} </p>
        </li>
        <li className="d-flex align-items-center gap-3 mb-3">
          <Github />
          <p className="mb-0"> {github} </p>
        </li>
      </ul>      
    </>
  )
}

export default ProfileCandidateSocials;