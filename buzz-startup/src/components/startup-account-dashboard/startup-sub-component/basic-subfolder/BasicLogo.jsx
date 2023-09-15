import React, { useContext } from 'react'
import { BasicFormDashboardContext } from '../../../../context/BasicFormDashboard.context'
import "./Basic.css";
import logoImage from "./../../../../images/startup-dashboard-profile-logo.png"

const BasicLogo = () => {
    const {logo} = useContext(BasicFormDashboardContext);
  return (logo &&
    <div className='basic-logo-body-div my-3'>
      <div><img src={logoImage} alt="" /></div>
      <div className='pt-4'><p>PNG or JPG no bigger than 1000px wide and tall.</p></div>
      <div className='pt-3'><button className='py-1'>Upload</button></div>
    </div>
  )
}

export default BasicLogo
