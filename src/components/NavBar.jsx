import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../components/nav.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home" className='nav-link' style={{ color: 'white', marginRight:"60px" }}>Home</Nav.Link>
          <Nav.Link href="#service" className='nav-link'style={{ color: 'white', marginRight:"60px" }}>Services</Nav.Link>
          <Nav.Link href="#portfolio" className='nav-link'style={{ color: 'white', marginRight:"60px" }}>Portfolio</Nav.Link>
          <Nav.Link href="#testimonials" className='nav-link'style={{ color: 'white', marginRight:"60px" }}>Testimonials</Nav.Link>
          <Nav.Link href="#contact" className='nav-link'style={{ color: 'white',marginRight:"30px" }}>Contact Us</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='icons'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'white',marginRight:"30px" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"style={{ color: 'white',marginRight:"30px" }}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/vishu032004" target="_blank" rel="noopener noreferrer" className="social-icon"style={{ color: 'white',marginRight:"30px" }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/vaishnavi-vaishnavi-686630250/" target="_blank" rel="noopener noreferrer" className="social-icon"style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
