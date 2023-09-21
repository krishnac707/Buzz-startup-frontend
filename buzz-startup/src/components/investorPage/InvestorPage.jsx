import React from 'react';
import "./InvestorPage.css";
import investorHeading from "./../../images/investor-meet.jpg"
import investorPitch from "./../../images/Investor Pitch.jpg";
import portfoliomanage from "./../../images/Portfolio Management.jpg";
import networking from "./../../images/Networking.jpg";
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const InvestorPage = () => {

    const router = useNavigate()
    const NumberAnimation = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 }
        })
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }

    return (
        <div className='investor-page-body'>
            <div className="startop-page-inside-body">
                <div>
                    <h2>INVEST WITH US </h2>
                    <h3 className='orange-color'>INVESTMENT MADE EASY</h3>
                    <p>We at BuzzStartups, have a goal of making investment opportunities ubiquitous and accessible for all. Faad pushes the boundaries of the growth of start-ups by drawing intensive measures to overcome limitations and promote a healthy environment for Investment</p>
                    <button onClick={()=>router("/login")}>Become an Investor &rarr;</button>
                </div>

                <div>
                    <img src={investorHeading} alt="" />
                </div>
            </div>

            <div className='home-number-animation-css'>
                <div className='home-inside-number-animation-css'>
                    <h1 className='mb-0'><NumberAnimation n={10}></NumberAnimation>+</h1>
                    <p className='mb-0'><b>Portfolio Companies</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1 className='mb-0'><NumberAnimation n={100}></NumberAnimation>+</h1>
                    <p className='mb-0'><b>Startup Pitched</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1 className='mb-0'><NumberAnimation n={1000}></NumberAnimation>+</h1>
                    <p className='mb-0'><b>Startups Evaluated</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1 className='mb-0'>$<NumberAnimation n={20}></NumberAnimation>M+</h1>
                    <p className='mb-0'><b>Funds Deployed</b></p>
                </div>
            </div>

            <div className="investor-up-description-main-div">
                <h2 className='orange-color'>WHAT WE SERVE</h2>
                <h3>We are the best Platform for <span className='orange-color'>Investors</span> to Build a Super portfolio</h3>
            </div>

            <div className="only-the-best-first-div">
                <div>
                    <img src={investorPitch} alt="" />
                </div>
                <div>
                    <h2 className='orange-color'>PITCHING SESSIONS</h2>
                    <h3>Only the Best</h3>
                    <p><b>BuzzStartups' confined pitch sessions feature top startups, enabling investors to invest and distribute risk together through syndication.</b></p>
                </div>
            </div>

            <div className="only-the-best-second-div">
                <div>
                    <h2 className='orange-color'>PORTFOLIO MANAGEMENT</h2>
                    <h3>Only the Best</h3>
                    <p><b>BuzzStartups takes charge of overseeing investee company development, affording privileges like consistent updates, monthly MIS, networking within the business community, mentorship, and opportunities for future fundraising.</b></p>
                </div>
                <div>
                    <img src={portfoliomanage} alt="" />
                </div>
            </div>

            <div className="only-the-best-first-div">
                <div>
                    <img src={networking} alt="" />
                </div>
                <div>
                    <h2 className='orange-color'>NETWORKING </h2>
                    <h3>TRULY Top-Notch</h3>
                    <p><b>Best BuzzStartups takes charge of overseeing investee company development, affording privileges like consistent updates, monthly MIS, networking within the business community, mentorship, and opportunities for future fundraising.</b></p>
                </div>
            </div>

            <div className='email-subscribe-main-div py-3 '>
                <div>
                    <h3 className='mb-0 text-center'>Stay tuned with our Newsletter.</h3>
                </div>
                <div>
                    <input type="text" className='email-input-common' placeholder='Email Address' />
                    <button className='subscribe-button-css'>Subscribe To BuzzNetWork &rarr;</button>
                </div>
            </div>


        </div>
    )
}

export default InvestorPage
