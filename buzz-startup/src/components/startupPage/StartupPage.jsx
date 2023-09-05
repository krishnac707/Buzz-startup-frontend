import React from 'react';
import "./StartupPage.css";
import rocketImage from './../../images/top-startups-in-pune.jpg'
import { useSpring, animated } from 'react-spring';
import first from "./../../images/1.png"
// import val from "./../../images/val.png";
import second from "./../../images/2.png";
import third from "./../../images/3.png";
import fourth from "./../../images/4.png";
import fifth from "./../../images/5.png";
import sixth from "./../../images/6.png";
import seventh from "./../../images/7.png";
import ninth from "./../../images/9.png";
import eighth from "./../../images/8.png";
import bulb from "./../../images/ScreenShot_858.png"
import { useNavigate } from 'react-router-dom';

const StartupPage = () => {

    const router = useNavigate();

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
        <div className='startup-page-body'>
            <div className="startop-page-inside-body">
                <div>
                    <h2>GET TO KNOW THE PROCESS</h2>
                    <h3 className='orange-color'>STARTUP INVESTMENT</h3>
                    <p>Welcome to BuzzStartups Network, where innovation knows no bounds. Embarking on a journey that spans the globe, we proudly invest between 50k USD to 1MN USD in the earliest stages of startups. Whether it's the seed of an idea or the promising coalescence of a Pre-Series venture, Buzz Network is there to champion your vision.</p>
                    <p>At BuzzStartups, our commitment to transforming ideas into remarkable milestones is unwavering. Through exclusive partnerships with technology-focused enterprises, we not only provide the financial backing your startup deserves but also the strategic guidance it needs to thrive. Our visionary process is finely attuned to the contemporary rhythm of entrepreneurship, ensuring that your journey aligns seamlessly with the rapid pace of modern innovation.</p>
                    <p>Join hands with BuzzStartups Network and let's reshape the future together. Your journey from concept to success is our shared destination.</p>
                    <button onClick={()=>router("/start-up-account")}>Apply For Funding &rarr;</button>
                </div>

                <div>
                    <img src={rocketImage} alt="" />
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

            <div className="start-up-description-main-div">
                <h2 className='orange-color'>WHAT WE SERVE</h2>
                <h3>We are <span className='orange-color'>committed</span> to making Startup
                    investments more inclusive</h3>
                <p>With a strong commitment, we strive to create an environment where financial
                    products transcend barriers, ensuring that every aspiring entrepreneur has the
                    opportunity to access the financial tools and resources necessary for their success.
                </p>
            </div>

            <div className="start-up-card-main-div">
                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={first} alt="" />
                    <p><span className='orange-color'>Buzz Network</span> invests in early-stage companies both in India and globally.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={second} alt="" />
                    <p>Investments made are sector and <span className='orange-color'>geography</span> agnostic.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={third} alt="" />
                    <p>A team with a desire for <span className='orange-color'>mentoring and coaching.</span></p>
                </div>
            </div>

            <div className="start-up-card-second-main-div">
                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={fourth} alt="" />
                    <p>A decent <span className='orange-color'>valuation</span> which meets the expectations of our members.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={fifth} alt="" />
                    <p>A Preferable <span className='orange-color'>exit</span> strategy for investors.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={sixth} alt="" />
                    <p><span className='orange-color'>Startups</span> with innovative ideas, USP, scalability across India and globe.</p>
                </div>
            </div>

            <div className="start-up-card-second-main-div">
                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={seventh} alt="" />
                    <p><span className='orange-color'>Buzz Network</span> invests in asset-light and scalable businesses with proof of concept or an existing customer base and revenue traction.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={eighth} alt="" />
                    <p>Strong <span className='orange-color'>founding team</span> with formal educational background and decent work experience.</p>
                </div>

                <div className='start-up-card-inside-main-div shadow-sm'>
                    <img className='mx-auto' src={ninth} alt="" />
                    <p>Startups <span className='orange-color'>technology investments</span> with innovative ideas across India & Globe..</p>
                </div>
            </div>

            <div className="start-up-step-to-invest-main-div">
                <h2 className='orange-color'>STEPS TO INVEST</h2>
                <h3>Invest with <span className='orange-color'>BuzzStartups </span>
                    It’s really simple with us</h3>
                <p>Simplify your investment process with our networking platform in just four
                    easy steps: Apply, Evaluate, Screening, Engage & Pitch. Join our community, get
                    evaluated, explore promising opportunities, and pitch your investment strategy.
                    Experience a seamless and efficient approach to investing.
                </p>
            </div>

            <div className="invest-step-main-div">
                <div>
                    <img src={bulb} alt="" />
                </div>
                <div className="all-steps-div">
                    <div className='road-map-left-div'>
                        <div>
                            <p className="orange-color"><b>APPLY</b></p>
                            <p>Startup can send their updated pitch at deals@buzzstartups.com</p>
                            <div className='startup-number-first-div'>1</div>
                            <div className='startup-number-second-div'>2</div>
                        </div>
                        <div className='road-map-third-div'>
                            <div className='startup-number-third-div'>3</div>
                            <div className='startup-number-fourth-div'>4</div>
                        </div>
                        <div>
                            <p className='orange-color'><b>SCREENING</b></p>
                            <p>Shortlisted startup gets further notified for a meeting/call with the team & hence the shortlisting happens.</p>
                        </div>
                        <div className='road-map-third-div'>
                            <div className='startup-number-third-div'>5</div>
                            <div className='startup-number-fourth-div'>6</div>
                        </div>
                        <div>
                            <p className='orange-color'><b>TERM SHEET & DEAL DUE DILIGENCE</b></p>
                            <p>Call/Meetings are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks.</p>
                            <button className='road-map-button'>Apply For Funding &rarr;</button>
                        </div>
                        
                    </div>
                    <div className='road-map-right-div'>
                        <div>
                            <p className="orange-color"><b>EVALUATE</b></p>
                            <p>Startup can expect a reply within 1-2 weeks once the deal has been evaluated.</p>
                        </div>
                        <div></div>
                        <div>
                            <p className="orange-color"><b>ENGAGE & PITCH</b></p>
                            <p>An investment process is explained followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session.</p>
                        </div>
                        <div></div>
                        <div>
                            <p className="orange-color"><b>DEAL</b></p>
                            <p>The SSHA document would be signed and an action to call for money gets initiate. The whole process takes 30-60 days.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default StartupPage