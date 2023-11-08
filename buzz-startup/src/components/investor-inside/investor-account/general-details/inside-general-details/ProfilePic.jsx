import React, { useContext, useEffect, useState } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import logoImage from "./../../../../../images/startup-dashboard-profile-logo.png"
import "../GeneralDetails.css"
import api from '../../../../apiConfig'
import toast from 'react-hot-toast'

const ProfilePic = () => {

  const { profilePic } = useContext(GeneralDetailDashboardContext)
  const [profilePicture, setProfilePicture] = useState(null);
  const [userProfile, setUserProfile] = useState();
  console.log(userProfile,"13");

  const serverAddress = 'http://localhost:8000';

  // const stringWithForwardSlashes = userProfile.replace(/\\/g, '/');
   // Replace with your image path
  const imageUrl = serverAddress + '/' + userProfile;
  console.log(imageUrl,"18");

  const handleProfilePicture = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const formSubmit = async (event) => {
    try {
      var formData = new FormData();
      formData.append('profilePicture', profilePicture);
      if (formData) {
        const response = await api.put("/all/update-profile-picture-investor-data", formData)
        if (response.data.success) {
          toast.success(response.data.message)
        }
        else {
          toast.error(response.data.message)
        }
      }
      else {
        toast.error("Please fill the detail first...")
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    const getProfile = async () => {
      const response  = await api.get("/all/get-profile-image")
      if(response.data.success){
        setUserProfile(response.data.userProfilePictureData.userProfilePicture)
      }
    }
    getProfile()
  },[])

  return profilePic &&
    <div className='basic-logo-body-div my-3'>
      <div>
        {userProfile?.length ? <img src={imageUrl} alt="" /> :
         <img src={logoImage} alt="" />}
        {/*  */}
      </div>

      <div className='pt-4'><p>PNG or JPG no bigger than 1000px wide and tall.</p></div>
      <div className='pt-3'>
        <input type="file" name="InvestorProfileImage" onChange={handleProfilePicture} className='input-file' id="imageUploadInput" />
        <label htmlFor="imageUploadInput" className='investorProfileLabelUploadCss'>Upload</label>
        <button className='investorProfileLabelUploadCss importantMarginCss' onClick={formSubmit}>Submit</button>
      </div>
    </div>
}

export default ProfilePic