import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { Bell, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from './Logo'
import Avatar from './Avatar'

const Header = () => {
  const token = true

  return (
    <Navbar className="bg-white py-2">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        {token ? (
            <Nav>
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-bg-light border-0 remove-arrow" id="dropdown-basic">
                  <Bell color="gray" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Test</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-bg-light border-0 remove-arrow" id="dropdown-basic">
                  <Envelope color="gray" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Test</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            
              <Dropdown>
                <Dropdown.Toggle className="bg-transparent text-bg-light border-0 remove-arrow" id="dropdown-basic">
                  <Avatar />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>View Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          ) : (
            <Nav className="d-flex gap-3">
              <Nav.Item>
                <Button variant="outline-primary">Masuk</Button>
              </Nav.Item>
              <Nav.Item>
                <Button>Daftar</Button>
              </Nav.Item>
            </Nav>
          )
        }
      </Container>
    </Navbar>
  )
}

export default Header