import React, { useContext, useEffect, useState } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import logoImage from "./../../../../../images/startup-dashboard-profile-logo.png"
import "../GeneralDetails.css"
import { AuthContext } from '../../../../../context/Auth.context'
import api from '../../../../apiConfig'
import toast from 'react-hot-toast'

const ProfilePic = () => {

  const { profilePic } = useContext(GeneralDetailDashboardContext)
  const { state, dispatch } = useContext(AuthContext);
  const [InvestorFormDetail, setInvestorFormDetail] = useState({});

  useEffect(() => {
    const InvestorDetailFunction = async () => {
      if (state?.user?.Email) {
        if (state?.user?.Role == "Investor") {
          const token = JSON.parse(localStorage.getItem("token"));
          if (token) {
            try {
              const response = await api.post("/investors/investor-basic-detail", { token })
              if (response.data.success) {
                setInvestorFormDetail(response.data.InvestorDetail)
              }
            }
            catch (error) {
              console.log(error);
            }
          }
        }
        else {
          toast.error("You are Not a Investor User");
        }
      }
    }
    InvestorDetailFunction()
  }, [])

  const checkFunction = async (event) => {
    try {
      event.preventDefault();
      if (InvestorFormDetail.InvestorProfileImage) {
        const token = JSON.parse(localStorage.getItem("token"))
        const response = await api.put("/investors/update-investor-data", { InvestorFormDetail, token })
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
      console.log('Error:', error);
    }
  }

  const formSubmit = async (event) => {
    console.log("hello");
    console.log(InvestorFormDetail,"64");
    await setInvestorFormDetail({...InvestorFormDetail,[event.target.name]:event.target.files[0]})
    console.log(InvestorFormDetail,"65");
    console.log(InvestorFormDetail?.InvestorProfileImage);
    // await checkFunction(event); 
  }

  return profilePic &&
    <div className='basic-logo-body-div my-3'>
      <div><img src={logoImage} alt="" /></div>
      <div className='pt-4'><p>PNG or JPG no bigger than 1000px wide and tall.</p></div>
      <div className='pt-3'>
        {/* <button className='py-1'>Upload</button> */}
        <input type="file" name="InvestorProfileImage" onChange={formSubmit} className='input-file' id="imageUploadInput" />
        <label htmlFor="imageUploadInput" className='uploadImageButtonCss px-3 py-1' >Upload</label>
        <button className='uploadImageButtonCss'>Submit</button>

      </div>

    </div>

}

export default ProfilePic