import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavUser from "./NavUser";
import NavGuest from "./NavGuest";
import { useSelector } from "react-redux";

const Header = () => {
  const { token } = useSelector(state => state.auth)

  return (
    <Navbar className="bg-white py-2">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        {token ? <NavUser /> : <NavGuest />}
      </Container>
    </Navbar>
  );
};

export default Header;
