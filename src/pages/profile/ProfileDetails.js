import ProfileCandidate from "../../components/profile/ProfileCandidate";
import withRouteGuard from "../../hoc/withRouteGuard";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/thunks/user";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import ProfileCompany from "../../components/profile/ProfileCompany";

const ProfileDetails = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  useEffect(() => {
    dispatch(getUser(userId))
  }, [dispatch, userId])
  const user = useSelector(state => state.user.user)
  
  return (
    <>
      {
        (user && user?.roleId === 2) 
          ? (<ProfileCandidate />) 
          : (<ProfileCompany />)
      }
    </>
  )
}

const ProfileDetailsWithRouteGuard = withRouteGuard(ProfileDetails)
export default ProfileDetailsWithRouteGuard;