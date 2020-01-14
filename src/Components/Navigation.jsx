import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faCheckSquare} style={{ height: '36px', width: '36px' }} />
      </Navbar.Brand>
      <Navbar.Toggle variant="primary" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill className="mr-auto">
          <Nav.Item>
            <Link to="/">SEE ALL</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-item' to="/create">NEW TODO</Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;