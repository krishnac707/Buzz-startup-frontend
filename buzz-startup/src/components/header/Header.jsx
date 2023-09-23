import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import headerImage from './../../images/startup-dashboard-profile-logo.png'

const Header = () => {
    const router = useNavigate();

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/register';
    const isStartupPage = location.pathname === '/start-up-account';
    const isOverviewProfile = location.pathname === "/overview-profile";
    const isStartupMainDashboard = location.pathname === "/startup-main-form-dashboard";
    const isInvestorMainDashboard = location.pathname === "/investor-form-account";
    const isInvestorHomeDashboard = location.pathname === "/investor/home";
    const isInvestorAccountDashboard = location.pathname === "/investor/account";
    const isFullReport = location.pathname === "/full-report"

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    //   };

    // const startupMenuRouter = () => {
    //    setIsOpen(false)
    //    router("/startup-page")
    // }




    if (isLoginPage || isFullReport || isSignupPage || isStartupPage || isOverviewProfile || isInvestorMainDashboard) {
        return null;
    }

    if (isInvestorHomeDashboard || isInvestorAccountDashboard) {
        return (
            <div id='navbar-header' >
                <Navbar expand="lg" fixed="top" className="bg-body-tertiary border-bottom-css-navbar p-0">
                    <Container>
                        <div className='navbar-heading-logo-color-1 navbar-logo-width' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last {isMenuOpen ? "show" : ""}'>
                            {/* <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? "show" : ""}> */}

                            <Nav className="navbar-nav right-investor-header-div">
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router("/investor/home")}>Opportunities</Nav.Link>
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4'>My Portfolio</Nav.Link>
                                <NavDropdown title={<img src={headerImage} className='hpid py-2' alt="Image" />} className='navbar-link-investor-menu-div i-mobile-view-size' id="basic-nav-dropdown">
                                    {/* <span className='nhid'><img className='pt-3 pb-3' src={headerImage} alt="" /></span> */}
                                    <NavDropdown.Item onClick={() => router('/investor/account')}>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

    if (isStartupMainDashboard) {
        return (
            <div id='navbar-header' >
                <Navbar expand="lg" fixed="top" className="bg-body-tertiary border-bottom-css-navbar p-0">
                    <Container>
                        <div className='navbar-heading-logo-color-1 navbar-logo-width' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last'>
                            <Nav className="navbar-nav right-investor-header-div">
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router("/overview-profile")}>Opportunities</Nav.Link>
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4'>My Portfolio</Nav.Link>
                                <NavDropdown title={<img src={headerImage} className='hpid py-2' alt="Image" />} className='navbar-link-investor-menu-div i-mobile-view-size' id="basic-nav-dropdown">
                                    {/* <span className='nhid'><img className='pt-3 pb-3' src={headerImage} alt="" /></span> */}
                                    <NavDropdown.Item onClick={() => router('/overview-profile')}>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

    return (
        <div id='navbar-header' >
            <Navbar expand="lg" fixed="top" className="bg-body-tertiary header-navbar-main-padding">
                <Container>
                    <div className='navbar-heading-logo-color' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div'>
                        <Nav className="me-auto navbar-menu-div" >
                            <Nav.Link className='navbar-link-menu-div' onClick={() => router("/startup-page")}>Startups</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => router("/investor-page")}>Investors</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => router("/about-us")}>About Us</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => router('/contact-us')}>Contact Us</Nav.Link>
                            {/* <Nav.Link className='navbar-link-menu-div'>Explore</Nav.Link> */}
                            <NavDropdown title="Explore" className='navbar-link-menu-div' id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => router("/my-innovation")}>MyInnovation</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => router("/pitch-deck")}>
                                    Pitch Deck
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => router('/financial-modelling')}>Financial Modelling</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last'>
                        <Nav className="me-auto navbar-menu-div">
                            <Nav.Link className='navbar-link-menu-div-last' onClick={() => router("/login")}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
