import React, { useContext, useEffect, useState } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import { AuthContext } from '../../../../../context/Auth.context';
import api from '../../../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../../../loader-component/Loader';

const OtherDetails = () => {

  const { otherDetails } = useContext(GeneralDetailDashboardContext)
  const { state, dispatch } = useContext(AuthContext);
  const [InvestorFormDetail, setInvestorFormDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    InvestorDetailFunction()
  }, [])

  const InvestorDetailFunction = async () => {
    setLoading(true);
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
          finally {
            setLoading(false);
          }
        }
      }
      else {
        toast.error("You are Not a Investor User");
      }
    }
  }

  const HandleChange = (event) => {
    setInvestorFormDetail({ ...InvestorFormDetail, [event.target.name]: event.target.value })
  }

  const formSubmit = async (event) => {
    setLoading(true);
    try {
      event.preventDefault();
      if (InvestorFormDetail) {
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
    finally {
      setLoading(false);
    }
  }

  return otherDetails &&
    <div className=' p-3'>
      {loading ? (
        <Loader loading={loading} />
      ) :
      (<form onSubmit={formSubmit}>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Linkedin Url :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorLinkdinUrl" value={InvestorFormDetail.InvestorLinkdinUrl} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Facebook Url :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorFacebookUrl" value={InvestorFormDetail.InvestorFacebookUrl} onChange={HandleChange} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Twitter Url :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorTwitterUrl" value={InvestorFormDetail.InvestorTwitterUrl} onChange={HandleChange} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Add activities :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorAddActvities" value={InvestorFormDetail.InvestorAddActvities} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Education Background :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorEducationBackground" value={InvestorFormDetail.InvestorEducationBackground} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Work Experience :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorWorkExperience" value={InvestorFormDetail.InvestorWorkExperience} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Association :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorAssociation" value={InvestorFormDetail.InvestorAssociation} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />
      </form>)}

    </div>

}

export default OtherDetails
