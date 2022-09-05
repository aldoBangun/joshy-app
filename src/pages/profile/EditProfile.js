import EditProfileCandidate from "./EditProfileCandidate";
import EditProfileCompany from "./EditProfileCompany";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const currentUser = useSelector(state => state.currentUser.user)

  if (currentUser?.roleId ===1 ) return <EditProfileCompany />
  return <EditProfileCandidate />
}


export default EditProfile