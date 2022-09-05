import { useSelector } from "react-redux";
import NoAuth from '../components/NoAuth'

const withRouteGuard = (Component) => {
  const Wrapper = (props) => {
    const user = useSelector(state => state.currentUser.user)

    // if (user) return <Component {...props}/>
    // return <NoAuth />

    return (
      <>
        {user ? (<Component {...props} />) : (<NoAuth />)}
      </>
    )
  }

  return Wrapper
}

export default withRouteGuard