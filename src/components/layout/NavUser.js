import { Nav, Dropdown } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import Avatar from "./Avatar";
import { logout } from "../../features/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotificationList from "../notification/NotificationList";

const NavUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user: loggedInUser } = useSelector(state => state.currentUser);

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <Nav>
      <Dropdown align="end">
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Bell color="gray" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <h5 className="px-3">Notifications</h5>
          <NotificationList />
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Envelope color="gray" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            No messages
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Avatar image={loggedInUser?.profilePicture}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => navigate(`/profile/${loggedInUser.id}`)}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate('/candidates')}>
            Browse
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

export default NavUser;
