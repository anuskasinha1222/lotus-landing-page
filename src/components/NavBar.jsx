import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ImUserPlus } from "react-icons/im";
import { BsBoxArrowRight } from "react-icons/bs";
import SiteLogo from './SiteLogo';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar-menu">
    <Container>
      <Navbar.Brand href="#home"><SiteLogo/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/" className='menu'>Home</Nav.Link>
          <Nav.Link href="/site-app" className='menu'>Site App</Nav.Link>
          <Nav.Link href="/site-login" className='menu'>Site Login</Nav.Link>
          <Nav.Link href="/payment-methods" className='menu'>Payment Methods</Nav.Link>
          <Nav.Link href="/cricket-betting-tips" className='menu'>Cricket Betting Tips</Nav.Link>
          <Nav.Link href="/sports-betting-tips" className='menu'>Sports Betting App</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><ImUserPlus className='menu-icon'/></Nav.Link>
          <Nav.Link href="#deets"><BsBoxArrowRight className='menu-icon'/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;