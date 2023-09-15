import React, { useContext } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import logoImage from "./../../../../../images/startup-dashboard-profile-logo.png"

const ProfilePic = () => {

  const { profilePic } = useContext(GeneralDetailDashboardContext)

  return profilePic &&
    <div className='basic-logo-body-div my-3'>
      <div><img src={logoImage} alt="" /></div>
      <div className='pt-4'><p>PNG or JPG no bigger than 1000px wide and tall.</p></div>
      <div className='pt-3'><button className='py-1'>Upload</button></div>
    </div>

}

export default ProfilePic