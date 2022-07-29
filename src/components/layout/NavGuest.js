import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavGuest = () => {
  return (
    <Nav className="d-flex gap-3">
      <Nav.Item>
        <Link to="/login">
          <Button variant="outline-primary">Masuk</Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/register-user">
          <Button>Daftar</Button>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavGuest;
