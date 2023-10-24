import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import bannerImage from './../../images/Untitled design.jpg';
import { useSpring, animated } from 'react-spring';
import startupImage from './../../images/2.jpg';
import investorImage from './../../images/4.jpg';
import enterImage from "./../../images/enter.png";
import userImage from "./../../images/user.png";
import fundingImage from "./../../images/funding.png";
import rocketImage from "./../../images/rocket.png";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';
import api from '../apiConfig';
import toast from 'react-hot-toast';

const Home = () => {

  const router = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const [startupFormDetail, setStartupFormDetail] = useState();
  const [startupStatus, setStartupStatus] = useState(false);
  const [InvestorFormDetail, setInvestorFormDetail] = useState();
  const [InvestorStatus, setInvestorStatus] = useState(false);

  const NumberAnimation = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 }
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  const startupDetailFunction = async () => {
    if (state?.user?.Email) {
      if (state?.user?.Role == "Startup") {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
          try {
            const response = await api.post("/startups/startup-basic-detail", { token })
            if (response.data.success) {
              setStartupFormDetail(response.data.startupDetail)
              setStartupStatus(response.data.startupFormStatus)
              router("/overview-profile")
            }
          }
          catch (error) {
            router("/start-up-account")
            console.log(error);
          }
        }
      }
      else {
        toast.error("You are Not a Startup User");
      }
    }
    else {
      router("/login")
    }
  }

  const InvestorDetailFunction = async () => {
    if (state?.user?.Email) {
      if (state?.user?.Role == "Investor") {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
          try {
            const response = await api.post("/investors/investor-basic-detail", { token })
            if (response.data.success) {
              setInvestorFormDetail(response.data.InvestorDetail)
              setInvestorStatus(response.data.InvestorFormStatus)
              router("/investor/home")
            }
          }
          catch (error) {
            router("/investor-form-account")
            console.log(error);
          }
        }
      }
      else {
        toast.error("You are Not a Investor User");
      }
    }
    else {
      router("/login")
    }
  }

  //   useEffect(() => {
  //     if (state?.user?.Email) {
  //         router('/')
  //     }
  // }, [state])

  return (
    <div className='home-body'>
      <div className='home-banner-image-div'>
        <img src={bannerImage} alt="" />
        <button className='banner-image-button-first-css' onClick={() => startupDetailFunction()}>Apply For Funding &rarr;</button>
        <button className='banner-image-button-second-css' onClick={() => InvestorDetailFunction()}>Invest With Us &rarr;</button>
      </div>
      <h2 className='text-dark home-subheading-text'>INVEST WITH US</h2>
      <h3 className='home-banner-heading-text orange-color'>INVESTMENT MADE EASY</h3>
      <p className='home-buzz-start-up-vision'>BuzzStartup’s vision is to make investment opportunities universally accessible. By employing innovative strategies, we break barriers hindering startup growth, creating a supportive investment ecosystem.</p>
      <button className='home-start-invest-button' onClick={() => startupDetailFunction()}>Start Investing Now</button>

      <div className='home-number-animation-css'>
        <div className='home-inside-number-animation-css'>
          <h1 className='mb-0'><NumberAnimation n={5}></NumberAnimation>+  </h1>
          <p className='mb-0'><b>Portfolio Companies</b></p>
        </div>
        <div className='home-inside-number-animation-css'>
          <h1 className='mb-0'><NumberAnimation n={50}></NumberAnimation>+</h1>
          <p className='mb-0'><b>Startups Pitched</b></p>
        </div>
        <div className='home-inside-number-animation-css'>
          <h1 className='mb-0'><NumberAnimation n={500}></NumberAnimation>+</h1>
          <p className='mb-0'><b>Startups Evaluated</b></p>
        </div>
        <div className='home-inside-number-animation-css'>
          <h1 className='mb-0'>$<NumberAnimation n={5}></NumberAnimation>M+</h1>
          <p className='mb-0'><b>Funds Deployed</b></p>
        </div>
      </div>

      <div className='live-dashboard-background-color'>
        <h2 className='home-live-deals-css font-weight-css'>Live Deals</h2>
        <h3 className='home-live-deals-css'>Explore Our Deals</h3>
        <div className='companys-cards-deals-div'>
          <div className='company-card-inside-deal-div shadow-sm' >
            <div className="company-name-image-div">
              <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
              <div>
                <h6>eFeed</h6>
                <p className='home-live-dashboard-company-description-font-size'>Better nutrition better lives</p>
              </div>
            </div>
            <div className='valuation-deadline-div'>
              <div>
                <p className="mb-0">valuation</p>
                <p className="mb-0"><b>32 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Deadline</p>
                <p className="mb-0"><b>2022-12-15</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-1'>
              <div>
                <p className="mb-0">Funding Asked</p>
                <p className="mb-0"><b>4 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Min. Investment</p>
                <p className="mb-0"><b>2 Lakhs</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-2'>
              <div>
                <p className="mb-0">CAP</p>
                <p className="mb-0"><b>Founder:60%</b></p>
                <p className="mb-0"><b>ESOP:20%</b></p>
                <p className="mb-0"><b>Investor:20%</b></p>
                <button className='agritech-button'>Agritech</button>
              </div>
              <div>
                <p className="mb-0"><b>500,000 USD</b></p>
              </div>
            </div>
          </div>
          <div className='company-card-inside-deal-div shadow-sm' >
            <div className="company-name-image-div">
              <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
              <div>
                <h6>eFeed</h6>
                <p className='home-live-dashboard-company-description-font-size'>Better nutrition better lives</p>
              </div>
            </div>
            <div className='valuation-deadline-div'>
              <div>
                <p className="mb-0">valuation</p>
                <p className="mb-0"><b>32 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Deadline</p>
                <p className="mb-0"><b>2022-12-15</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-1'>
              <div>
                <p className="mb-0">Funding Asked</p>
                <p className="mb-0"><b>4 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Min. Investment</p>
                <p className="mb-0"><b>2 Lakhs</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-2'>
              <div>
                <p className="mb-0">CAP</p>
                <p className="mb-0"><b>Founder:60%</b></p>
                <p className="mb-0"><b>ESOP:20%</b></p>
                <p className="mb-0"><b>Investor:20%</b></p>
                <button className='agritech-button'>Agritech</button>
              </div>
              <div>
                <p className="mb-0"><b>500,000 USD</b></p>
              </div>
            </div>
          </div>
          <div className='company-card-inside-deal-div shadow-sm' >
            <div className="company-name-image-div">
              <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
              <div>
                <h6>eFeed</h6>
                <p className='home-live-dashboard-company-description-font-size'>Better nutrition better lives</p>
              </div>
            </div>
            <div className='valuation-deadline-div'>
              <div>
                <p className="mb-0">valuation</p>
                <p className="mb-0"><b>32 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Deadline</p>
                <p className="mb-0"><b>2022-12-15</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-1'>
              <div>
                <p className="mb-0">Funding Asked</p>
                <p className="mb-0"><b>4 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Min. Investment</p>
                <p className="mb-0"><b>2 Lakhs</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-2'>
              <div>
                <p className="mb-0">CAP</p>
                <p className="mb-0"><b>Founder:60%</b></p>
                <p className="mb-0"><b>ESOP:20%</b></p>
                <p className="mb-0"><b>Investor:20%</b></p>
                <button className='agritech-button'>Agritech</button>
              </div>
              <div>
                <p className="mb-0"><b>500,000 USD</b></p>
              </div>
            </div>
          </div>
          <div className='company-card-inside-deal-div shadow-sm' >
            <div className="company-name-image-div">
              <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
              <div>
                <h6>eFeed</h6>
                <p className='home-live-dashboard-company-description-font-size'>Better nutrition better lives</p>
              </div>
            </div>
            <div className='valuation-deadline-div'>
              <div>
                <p className="mb-0">valuation</p>
                <p className="mb-0"><b>32 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Deadline</p>
                <p className="mb-0"><b>2022-12-15</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-1'>
              <div>
                <p className="mb-0">Funding Asked</p>
                <p className="mb-0"><b>4 cr</b></p>
              </div>
              <div>
                <p className="mb-0">Min. Investment</p>
                <p className="mb-0"><b>2 Lakhs</b></p>
              </div>
            </div>
            <div className='valuation-deadline-div-2'>
              <div>
                <p className="mb-0">CAP</p>
                <p className="mb-0"><b>Founder:60%</b></p>
                <p className="mb-0"><b>ESOP:20%</b></p>
                <p className="mb-0"><b>Investor:20%</b></p>
                <button className='agritech-button'>Agritech</button>
              </div>
              <div>
                <p className="mb-0"><b>500,000 USD</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='home-startup-align-div px-2'>STARTUPS NEWS & UPDATES</h2>
      <h3 className='home-startup-align-div px-2'>Browse our <span className='orange-color'>articles</span> on marketing and growth through BuzzTImes</h3>
      <h5 className='home-startup-content-align-div'>Uncover a treasure trove of captivating articles focused on marketing and growth. Inside, you'll find indispensable wisdom and strategies to amplify your business's presence, allure an expanding audience, and unlock</h5>

      <div className='home-news-main-div'>
        <div className="home-news-inside-main-div">
          <div className='home-news-inside-image-div'>
            <img src="https://images.edexlive.com/uploads/user/imagelibrary/2021/9/15/original/instant-poster-200000000.png?w=600&dpr=1.0" alt="" />
          </div>
          <h5>If all things space have your attention, Navars Edutech has some very interesting courses to offer</h5>
          <p>Hyderabad-based Navars Edutech is all set to offer courses on everything related to astronomy and this is what makes their proposition unique and different from everyone else out there right now</p>
          <p className='home-article-color-css'>View Full Article &rarr;</p>
        </div>

        <div className="home-news-inside-main-div">
          <div className='home-news-inside-image-div'>
            <img src="https://bl.thgim.com/news/national/yrxx2e/article36853564.ece/alternates/WIDE_615/odisha" alt="" />
          </div>
          <h5>BITS hosts 17th edition of ‘Conquest’ start-up accelerator</h5>
          <p>Many industry frontrunners came together to share their success mantras with aspiring entrepreneurs.</p>
          <p className='home-article-color-css'>View Full Article &rarr;</p>
        </div>

        <div className="home-news-inside-main-div">
          <div className='home-news-inside-image-div'>
            <img src="https://bloncampus.thehindubusinessline.com/engineering/article36848208.ece/alternates/FREE_730/blocBITSConquest" alt="" />
          </div>
          <h5>Hesa to upskill Odisha women promoting self help groups</h5>
          <p>Project will empower women to increase their incomes</p>
          <p className='home-article-color-css'>View Full Article &rarr;</p>
        </div>
      </div>

      <div className='home-browse-article-div'>
        <button>Browse all article &rarr;</button>
      </div>

      <h2 className='home-startup-align-div orange-color px-2'>GET TO KNOW, HOW WE WORK</h2>
      <h3 className='home-startup-align-div px-2'>We unify and transform your challenges into success by
        bringing everything together under one umbrella.</h3>
      <h5 className='home-startup-content-align-div'>Every step here is made easy by combined efforts, deals and unique steps towards the united vision. FAAD takes
        delight in making success a moment rather than just a goal.</h5>

      <div className='home-startup-detail-div'>
        <div className="home-startup-detail-image">
          <img src={startupImage} alt="" />
        </div>
        <div className="home-startup-detail-description-div">
          <h4 className='orange-color'>FOR STARTUPS</h4>
          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={enterImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Instant Registration</b></p>
              <p className='mb-0'>Login with your existing account</p>
            </div>
          </div>

          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={userImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Create Your Profile</b></p>
              <p className='mb-0'>Follow simple steps to create an amazing profile</p>
            </div>
          </div>

          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={fundingImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Apply For Funding</b></p>
              <p className='mb-0'>Showcase your startup to the network of investors</p>
            </div>
          </div>

          <button onClick={() =>  startupDetailFunction()}>Apply For Funding &rarr;</button>

        </div>
      </div>

      <div className='home-startup-detail-div'>

        <div className="home-startup-detail-description-div">
          <h4 className='orange-color'>FOR INVESTOR</h4>
          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={fundingImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Create Your Profile</b></p>
              <p className='mb-0'>Follow simple steps to create an amazing profile</p>
            </div>
          </div>

          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={rocketImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Discover Profile</b></p>
              <p className='mb-0'>Search startups of your interests</p>
            </div>
          </div>

          <div className='home-feature-startup-div'>
            <div className="home-feature-startup-image-div">
              <img src={rocketImage} alt="" />
            </div>
            <div className='home-feature-startup-description-div'>
              <p className='mb-0'><b>Start Investing</b></p>
              <p className='mb-0'>Your journey of investment begins here</p>
            </div>
          </div>

          <button onClick={() => InvestorDetailFunction()}>Apply For Funding &rarr;</button>

        </div>

        <div className="home-startup-detail-image">
          <img src={investorImage} alt="" />
        </div>

      </div>

      <div className='email-subscribe-main-div py-3 mt-3 '>
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

export default Home