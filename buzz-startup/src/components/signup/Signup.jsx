import React, { useState } from 'react';
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
import googleImage from "./../../images/google-image.png"
import investorImage from "./../../images/login_investor.svg"
import startupImage from "./../../images/startup-login-image.svg"
import partnerImage from "./../../images/partnerImage.jpg"

const Signup = () => {
  const router = useNavigate();
  const [selectedOption, setSelectedOption] = useState("startup");
  const [imageSrc, setImageSrc] = useState(startupImage);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "startup") {
      setImageSrc(startupImage);
    } else if (value === "investor") {
      setImageSrc(investorImage);
    }
    else if (value === "partner") {
      setImageSrc(partnerImage);
    }
  };

  return (
    <div className='login-body'>
      <div className="login-inside-body">
        <div>
          <p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p>
        </div>
        <div className="form-and-image-div">
          <div className="login-form-div">
            <h3 className='mb-3 login-company-name-css'>Create Your BuzzStartups Account</h3>
            <form>
              <div className='radio-form-css-div'>
                <div>
                  <input type="radio" name="startup" value="startup" onChange={handleOptionChange}  checked={selectedOption === "startup"} />
                  <p className='mb-0'>I'm a Startup</p>
                </div>
                <div>
                  <input type="radio" name="investor" value="investor" onChange={handleOptionChange} checked={selectedOption === "investor"} />
                  <p className='mb-0'>I'm a Investor</p>
                </div>
                <div>
                  <input type="radio" name="partner" value="partner" onChange={handleOptionChange} checked={selectedOption === "partner"} />
                  <p className='mb-0'>I'm a Partner</p>
                </div>
              </div>
              <div className='horizontal-line-css-div'></div>
              <button className='google-button'>
                <div>
                  <img src={googleImage} alt="" />
                </div>
                <p className='mb-0'>Register with Google</p>
              </button>
              <div className='horizontal-line-css-second'>
                <span className='half-horizontal-line'></span>
                <span className='or-horizontal-text'>OR</span>
                <span className='half-horizontal-line'></span>
              </div>
              <div className='sign-email-div'>
                <input type="text" required="required" />
                <span>First Name</span>
              </div>
              <div className='sign-email-div'>
                <input type="text" required="required" />
                <span>Last Name</span>
              </div>
              <div className='sign-email-div'>
                <input type="text" required="required" />
                <span>Enter Email</span>

              </div>
              <div className='sign-email-div'>
                <input type="password" required="required" />
                <span>Enter Password</span>
              </div>
              <input type="submit" value="Register" className='signup-button-color' />
              <div className='horizontal-line-css-div'></div>
              <p className='login-signup-link-css'>Already have an account? <span className='sign-up-link-css' onClick={()=>router("/login")}>Log In Now</span></p>
            </form>
          </div>
          <div className="login-image-div" >
            <img src={imageSrc} alt="Selected Option" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
