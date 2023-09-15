import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/register';
    const isStartupPage = location.pathname === '/start-up-account';
    const isOverviewProfile = location.pathname === "/overview-profile";
    const isStartupMainDashboard = location.pathname === "/startup-main-form-dashboard";
    const isInvestorMainDashboard = location.pathname === "/investor-form-account";
    const isInvestorAccountDashboard = location.pathname === "/investor/account"
    if (isLoginPage || isSignupPage || isStartupPage || isOverviewProfile || isStartupMainDashboard || isInvestorMainDashboard || isInvestorAccountDashboard) {
        return null; 
    }

    return (
        <div className='footer-main-body'>
            <div className="footer-first-div">
                <p>BuzzStartups</p>
                <p>BuzzStartups is an investor network which invests in early stage startups across various sectors & geographies.</p>
            </div>
            <div className="footer-second-div">
                <h5><b>Quick Links</b></h5>
                <div className='footer-third-div'>
                    <div>
                        <p className="mb-0">Home</p>
                        <p className="mb-0">Startups</p>
                        <p className="mb-0">Partners</p>
                        <p className="mb-0">BuzzTimes</p>
                        <p className="mb-0">Privacy Policy</p>
                    </div>
                    <div>
                        <p className="mb-0">Portfolio</p>
                        <p className="mb-0">Investors</p>
                        <p className="mb-0">About us</p>
                        <p className="mb-0">Contact us</p>
                    </div>
                </div>
            </div>

            <div className="footer-fourth-div">
                <h5><b>Register Office</b></h5>
                <p>Link Plaza, Suite # 100,
                    New Link Rd, Oshiwara,
                    Andheri West, Mumbai, Maharashtra 400053</p>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg> </span>
                <span><FontAwesomeIcon  className='svg-font-size' icon={faMap} /></span>
            </div>
        </div>
    )
}

export default Footer
