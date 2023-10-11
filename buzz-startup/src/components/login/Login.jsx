import React, { useContext, useEffect, useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import googleImage from "./../../images/google-image.png"
import investorImage from "./../../images/login_investor.svg"
import startupImage from "./../../images/startup-login-image.svg"
import partnerImage from "./../../images/partnerImage.jpg"
import api from '../apiConfig';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/Auth.context';

const Login = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ Email: "", Password: "", Role: "Startup" })
  const [selectedOption, setSelectedOption] = useState("Startup");
  const [imageSrc, setImageSrc] = useState(startupImage);
  const { state, dispatch } = useContext(AuthContext);

  // console.log(userData,"15");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "Startup") {
      setImageSrc(startupImage);
      setUserData({ ...userData, [event.target.name]: value })
    } else if (value === "Investor") {
      setImageSrc(investorImage);
      setUserData({ ...userData, [event.target.name]: value })
    }
    else if (value === "Partner") {
      setImageSrc(partnerImage);
      setUserData({ ...userData, [event.target.name]: value })
    }
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    try {
      if (userData.Email && userData.Password && userData.Role) {
        const response = await api.post("/all/login", { userData })
        console.log(response, "46");
        if (response.data.success) {
          if (response.data.user?.Role == "Startup") {
            dispatch({
              type: "LOGIN",
              payload: response.data.user
            })
            localStorage.setItem("token", JSON.stringify(response.data.token))
            setUserData({ email: "", password: "" })
            router("/start-up-account");
            toast.success(response.data.message);
          }

          if (response.data.user?.Role == "Investor") {
            dispatch({
              type: "LOGIN",
              payload: response.data.user
            })
            localStorage.setItem("token", JSON.stringify(response.data.token))
            setUserData({ email: "", password: "" })
            router("/investor-form-account");
            toast.success(response.data.message);
          }
        }
      }
      else {
        toast.error("All fields are mandatory")
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (state?.user?._id) {
      router('/')
    }
  }, [state])

  return (
    <div className='login-body'>
      <div className="login-inside-body">
        <div>
          <p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p>
        </div>
        <div className="form-and-image-div">
          <div className="login-form-div">
            <h3 className='mb-3 login-company-name-css'>Login to BuzzStartups</h3>
            <form onSubmit={formSubmit}>
              <div className='radio-form-css-div'>
                <div>
                  <input type="radio" name="Role" value="Startup" onChange={handleOptionChange} checked={selectedOption === "Startup"} />
                  <p className='mb-0 px-1'>Startup</p>
                </div>
                <div>
                  <input type="radio" name="Role" value="Investor" onChange={handleOptionChange} checked={selectedOption === "Investor"} />
                  <p className='mb-0 px-1'>Investor</p>
                </div>
                <div>
                  <input type="radio" name="Role" value="Partner" onChange={handleOptionChange} checked={selectedOption === "Partner"} />
                  <p className='mb-0 px-1'>Partner</p>
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
                <input type="text" required="required" name='Email' onChange={handleInput} />
                <span>Enter Email</span>
              </div>
              <div className='login-password-div'>
                <input type="password" required="required" name='Password' onChange={handleInput} />
                <span>Enter Password</span>
              </div>
              <p className='forgot-password-text-css'>Forgot my password</p>
              <input type="submit" value="Log In" className='login-button-color' />
              <div className='horizontal-line-css-div'></div>
              <p className='login-signup-link-css'>Don't have an account? <span className='sign-up-link-css' onClick={() => router("/register")}>Sign Up Now</span></p>
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
