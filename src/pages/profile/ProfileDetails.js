import ProfileCandidate from "../../components/profile/ProfileCandidate";
import withRouteGuard from "../../hoc/withRouteGuard";

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

const ProfileDetailsWithRouteGuard = withRouteGuard(ProfileDetails)
export default ProfileDetailsWithRouteGuard;