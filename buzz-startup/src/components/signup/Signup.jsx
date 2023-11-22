import React, { useContext, useEffect, useState } from 'react';
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
import googleImage from "./../../images/google-image.png"
import investorImage from "./../../images/login_investor.svg"
import startupImage from "./../../images/startup-login-image.svg"
import partnerImage from "./../../images/partnerImage.jpg"
import toast from 'react-hot-toast';
import api from '../apiConfig';
import { AuthContext } from '../../context/Auth.context';

const Signup = () => {

  const [userData, setUserData] = useState(
    {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Role: "Startup"
    }
  );
  const router = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Startup");
  const [imageSrc, setImageSrc] = useState(startupImage);
  const { state } = useContext(AuthContext)

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

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    if (userData.FirstName && userData.LastName && userData.Email && userData.Password && userData.Role) {
      const response = await api.post("/all/register", { userData })
      if (response.data.success) {
        setUserData({ FirstName: "", LastName: "", Email: "", Password: "", Role: "Startup" })
        router("/login");
        toast.success(response.data.message);
      }
      else {
        toast.error(response.data.message)
      }
    }
    else {
      toast.error("All fields are mandatory")
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
            <h3 className='mb-3 login-company-name-css'>Create Your BuzzStartups Account</h3>
            <form onSubmit={formSubmit}>
              <div className='radio-form-css-div'>
                <div>
                  <input type="radio" name="Role" value="Startup" onChange={handleOptionChange} checked={selectedOption === "Startup"} />
                  <p className='mb-0'>I'm a Startup</p>
                </div>
                <div>
                  <input type="radio" name="Role" value="Investor" onChange={handleOptionChange} checked={selectedOption === "Investor"} />
                  <p className='mb-0'>I'm a Investor</p>
                </div>
                <div>
                  <input type="radio" name="Role" value="Partner" onChange={handleOptionChange} checked={selectedOption === "Partner"} />
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
                <input type="text" name='FirstName' onChange={handleChange} required="required" />
                <span>First Name</span>
              </div>
              <div className='sign-email-div'>
                <input type="text" name='LastName' onChange={handleChange} required="required" />
                <span>Last Name</span>
              </div>
              <div className='sign-email-div'>
                <input type="text" name='Email' onChange={handleChange} required="required" />
                <span>Enter Email</span>

              </div>
              <div className='sign-email-div'>
                <input type="password" name='Password' onChange={handleChange} required="required" />
                <span>Enter Password</span>
              </div>
              <input type="submit" value="Register" className='signup-button-color' />
              <div className='horizontal-line-css-div'></div>
              <p className='login-signup-link-css'>Already have an account? <span className='sign-up-link-css' onClick={() => router("/login")}>Log In Now</span></p>
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
