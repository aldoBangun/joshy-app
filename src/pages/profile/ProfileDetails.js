import ProfileCandidate from "../../components/profile/ProfileCandidate";

const ProfileDetails = () => {
   const roleId = '2'

  return (
    <>
      { (roleId === '2') ? (<ProfileCandidate />) : (
          <h1>Profile Company</h1>
        )
      }
    </>
  )
}

export default ProfileDetails;