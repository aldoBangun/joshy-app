import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getNotification,
  notificationSelector,
} from '../../features/slices/notification'
import { Dropdown } from 'react-bootstrap'

const NotificationList = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(notificationSelector.selectAll)
  const currentUserState = useSelector((state) => state.currentUser)
  const user = currentUserState?.user

  useEffect(() => {
    if (user) dispatch(getNotification(user.userId))
  }, [dispatch, user])

  if (!notifications || !notifications.length)
    return <p className="mb-0 px-3 text-muted">No notification</p>

  return (
    <Dropdown.Item>
      {notifications &&
        notifications.length &&
        notifications.map((item) => (
          <li key={item.id} className="d-flex gap-3 align-items-start">
            <div>
              <img
                src={item.profilePicture}
                alt="user profile"
                className="rounded-circle object-cover"
                height={48}
                widht={48}
              />
            </div>
            <div>
              <h6 className="mb-1">{item.companyName}</h6>
              <p className="mb-0 text-muted">{item.messageSubject}</p>
            </div>
          </li>
        ))}
    </Dropdown.Item>
  )
}

export default NotificationList
