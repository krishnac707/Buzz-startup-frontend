import React, { useContext, useEffect, useState } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import { AuthContext } from '../../../../../context/Auth.context';
import api from '../../../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../../../loader-component/Loader';

const GeneralDetailInside = () => {

  const { generalDetailInside } = useContext(GeneralDetailDashboardContext)
  const { state } = useContext(AuthContext);
  const [InvestorFormDetail, setInvestorFormDetail] = useState({});
  const [loading, setLoading] = useState(false);

  // const phoneNumberWithoutCountryCode = InvestorFormDetail.InvestorNumber.replace(/^1/, '');

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
          InvestorDetailFunction()
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

  return generalDetailInside &&
    <div className=' p-3'>
      {loading ? (
        <Loader loading={loading} />
      ) :
      (<form onSubmit={formSubmit}>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Name :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" value={InvestorFormDetail.InvestorName} name="InvestorName" onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Email Id :</div>
            <div>
              <input className='p-2 startname-input-general' type="email" value={InvestorFormDetail.InvestorEmail} name="InvestorEmail" onChange={HandleChange} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Phone NO :</div>
            <div>
              <input className='p-2 startname-input-general' type="number" name="InvestorNumber" value={InvestorFormDetail.InvestorNumber} onChange={HandleChange} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Country :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorCountry" value={InvestorFormDetail.InvestorCountry} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>State :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorState" value={InvestorFormDetail.InvestorState} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>City :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorCity" value={InvestorFormDetail.InvestorCity} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Pincode :</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="InvestorPincode" value={InvestorFormDetail.InvestorPincode} onChange={HandleChange} />
            </div>
          </div>
        </div>
        <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />
      </form>
      )}

    </div>

}

export default GeneralDetailInside