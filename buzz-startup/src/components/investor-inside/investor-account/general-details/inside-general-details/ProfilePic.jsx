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

  const serverAddress = 'http://localhost:8000';
  // const serverAddress = 'https://buzz-startups-backend.vercel.app';
  const imageUrl = serverAddress + '/' + userProfile;

  const handleProfilePicture = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const formSubmit = async (event) => {
    var formData = new FormData();
    formData.append('profilePicture', profilePicture);
    if (formData) {
      try {
        const response = await api.put("/all/update-profile-picture-investor-data", formData)
        if (response.data.success) {
          toast.success(response.data.message)
        }
      }
      catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
      }
    }
    else {
      toast.error("Please fill the detail first...")
    }
  }

  useEffect(() => {
    const getProfile = async () => {
      const response = await api.get("/all/get-profile-image")
      if (response.data.success) {
        setUserProfile(response.data.userProfilePictureData.userProfilePicture)
      }
    }
    getProfile()
  }, [])

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