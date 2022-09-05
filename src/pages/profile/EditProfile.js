import EditProfileCandidate from "./EditProfileCandidate";
import EditProfileCompany from "./EditProfileCompany";
import { useSelector } from "react-redux";
import withRouteGuard from "../../hoc/withRouteGuard";

const EditProfile = () => {
  const currentUser = useSelector(state => state.currentUser.user)

  if (currentUser?.roleId ===1 ) return <EditProfileCompany />
  return <EditProfileCandidate />
}

const EditProfileWithRouteGuard = withRouteGuard(EditProfile)
export default EditProfileWithRouteGuard