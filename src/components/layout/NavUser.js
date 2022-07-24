import { Nav, Dropdown } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { logout } from "../../features/slices/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <Nav>
      <Dropdown>
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Bell color="gray" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Test</Dropdown.Item>
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
          <Dropdown.Item>Test</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          className="bg-transparent text-bg-light border-0 remove-arrow"
          id="dropdown-basic"
        >
          <Avatar />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/candidates" style={{ textDecoration: "none" }}>
              Search
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

export default NavUser;
