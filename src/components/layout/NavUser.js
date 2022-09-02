import { Nav, Dropdown } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import Avatar from "./Avatar";
import { logout } from "../../features/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      <Dropdown align="center">
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Bell color="gray" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            No Notifications
          </Dropdown.Item>
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
          <Dropdown.Item onClick={() => navigate('/candidates')}>
            Search
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

export default NavUser;
