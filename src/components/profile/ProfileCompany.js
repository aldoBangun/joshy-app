import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../features/thunks/user'
import { Person } from 'react-bootstrap-icons'
import ProfileCompanySocials from './ProfileCompanySocials'
import '../../style/ProfileCompany.css'

const ProfileCompany = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUser(userId))
  }, [dispatch, userId])


  return (
    <>
      {user && (
        <>
          <div className="bg-primary position-relative profile-cover" style={{ height: 200 }}>
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt={user.companyName}
                height={124}
                width={124}
                className="rounded-circle d-block mb-3 mx-auto profile-picture"
              />
            ) : (
              <div className="profile-picture d-flex align-items-center justify-content-center rounded-circle bg-warning mx-auto mb-3" style={{ height: 124, width: 124 }}>
                <Person size={64} />
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center text-center mb-5 position-relative">
            <div className="w-50 text-center mb-4">

              <h2 className="mb-0">{user.companyName}</h2>
              <small>{user.companyField}</small>

              <div className="text-secondary mb-4">
                <p className="text-secondary">{user.companyDomicile}</p>
                <p>{user.description}</p>
              </div>

              {(+userId === user.id) && (
                <div className="d-grid mb-4">
                  <Link to="/profile/edit" className="btn btn-lg btn-primary">Edit Profile</Link>
                </div>
              )}

              <ProfileCompanySocials email={user.email} phone={user.phoneNumber} instagram={user.instagram} linkedin={user.linkedin} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileCompany