import { useRef } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavUser from "./NavUser";
import NavGuest from "./NavGuest";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const { token } = useSelector(state => state.auth)
  const headerRef = useRef()

  useEffect(() => {
    const navbarHeight = headerRef.current.clientHeight
    document.body.style.setProperty('--nav-height', `${navbarHeight}px`)
  })

  return (
    <Navbar className="bg-white py-2" ref={headerRef}>
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
