import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import googleImage from "./../../images/google-image.png"
import investorImage from "./../../images/login_investor.svg"
import startupImage from "./../../images/startup-login-image.svg"
import partnerImage from "./../../images/partnerImage.jpg"

const Login = () => {
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
            <h3 className='mb-3 login-company-name-css'>Login to BuzzStartups</h3>
            <form>
              <div className='radio-form-css-div'>
                <div>
                  <input type="radio" name="startup" value="startup" onChange={handleOptionChange}  checked={selectedOption === "startup"} />
                  <p className='mb-0'>Startup</p>
                </div>
                <div>
                  <input type="radio" name="investor" value="investor" onChange={handleOptionChange} checked={selectedOption === "investor"} />
                  <p className='mb-0'>Investor</p>
                </div>
                <div>
                  <input type="radio" name="partner" value="partner" onChange={handleOptionChange} checked={selectedOption === "partner"} />
                  <p className='mb-0'>Partner</p>
                </div>
              </div>
              <div className='horizontal-line-css-div'></div>
              <button className='google-button'>
                <div>
                  <img src={googleImage} alt="" />
                </div>
                <p className='mb-0'>Login with Google</p>
              </button>
              <div className='horizontal-line-css-second'>
                <span className='half-horizontal-line'></span>
                <span className='or-horizontal-text'>OR</span>
                <span className='half-horizontal-line'></span>
              </div>
              <div className='login-email-div'>
                <input type="text" required="required" />
                <span>Enter Email</span>
              </div>
              <div className='login-password-div'>
                <input type="password" required="required" />
                <span>Enter Password</span>
              </div>
              <p className='forgot-password-text-css'>Forgot my password</p>
              <input type="submit" value="Log In" className='login-button-color' />
              <div className='horizontal-line-css-div'></div>
              <p className='login-signup-link-css'>Don't have an account? <span className='sign-up-link-css' onClick={()=>router("/register")}>Sign Up Now</span></p>
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

export default Login
