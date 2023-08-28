import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate();
    return (
        <div id='navbar-header' >
            <Navbar expand="lg" fixed="top" className="bg-body-tertiary header-navbar-main-padding">
                <Container>
                    <div href="#home" className='navbar-heading-logo-color' ><p className='mb-0 logo-cursor' onClick={()=>router("/")}>BuzzStartups</p></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div'>
                        <Nav className="me-auto navbar-menu-div" >
                            <Nav.Link className='navbar-link-menu-div' onClick={()=>router("/startup-page")}>Startups</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={()=>router("/investor-page")}>Investors</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div'>Portfolio</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div'>About Us</Nav.Link>
                            {/* <Nav.Link className='navbar-link-menu-div'>Explore</Nav.Link> */}
                            <NavDropdown title="Explore" className='navbar-link-menu-div' id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">MyInnovation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                Pitch Deck
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Financial Modelling</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last'>
                        <Nav className="me-auto navbar-menu-div">
                            <Nav.Link className='navbar-link-menu-div-last'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
