import React, { useContext, useEffect, useState } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import './GeneralDetailCommon.css'
import toast from 'react-hot-toast'
import api from '../../../../apiConfig'
import { AuthContext } from '../../../../../context/Auth.context'

const AboutMe = () => {

  const { aboutMe } = useContext(GeneralDetailDashboardContext)
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

  const HandleInput = (event) => {
    setInvestorFormDetail({ ...InvestorFormDetail, [event.target.name]: event.target.value })
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    if (InvestorFormDetail.InvestorAboutMe) {
      try {
        const token = JSON.parse(localStorage.getItem("token"))
        const response = await api.put("/investors/update-investor-data", { InvestorFormDetail, token })
        if (response.data.success) {
          toast.success(response.data.message)
        }
      }
      catch (error) {
        toast.error(error.response.data.message)
        console.log('Error:', error);
      }
    }
    else {
      toast.error("Please fill the detail first...")
    }
  }

  return aboutMe &&
    <div>
      <form onSubmit={formSubmit}>
        <textarea name='InvestorAboutMe' onChange={HandleInput} className='mt-3 px-1' id="" cols="70" rows="7"></textarea>
        <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />
        {/* <button className='startup-basic-general-save-button text-center  mx-2 py-1 my-3'>Cancel</button> */}
      </form>
    </div>
}

export default AboutMe
