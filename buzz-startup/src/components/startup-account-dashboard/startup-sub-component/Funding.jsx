import React, { useContext, useEffect, useState } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'
import api from '../../apiConfig'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../context/Auth.context'
import { useNavigate } from 'react-router-dom'
import { update } from 'react-spring'

const Funding = () => {

  const { fundingStartup } = useContext(StartupDashboardContext)
  const { state, dispatch } = useContext(AuthContext);
  const [startupFundingData, setUserData] = useState({
    currencyType: 'USD',
    fundingAsk: '',
    valuation: '',
    minimumTicketSize: '',
    capTableEntryFounder: '',
    capTableEntryESOP: '',
    capTableEntryInvestor: '',
    commitmentSoFar: '',
  })
  const [isUpdate, setIsUpdate] = useState(false);
  const router = useNavigate();

  console.log(startupFundingData, "10");

  useEffect(() => {
    const getStartupDetails = async () => {
      if (state?.user?.Email) {
        if (state?.user?.Role == "Startup") {
          try {
            const response = await api.get("/startups/get-startup-funding-detail")
            if (response.data.success) {
              setUserData(response.data.fundingDetail)
              setIsUpdate(true)
            }
          }
          catch (error) {
            console.log(error);
          }
        }
      }
      // else {
      //   toast.error("You are Not a Startup User");
      // }
    }
    getStartupDetails()
  }, [])


  const handleInput = (e) => {
    setUserData({ ...startupFundingData, [e.target.name]: e.target.value })
    // const { name, value } = e.target;
    // setUserData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  }

  const handleCurrency = (e) => {
    setUserData({ ...startupFundingData, "currencyType": e.target.value })
    // const { value } = e.target;
    // setUserData((prevData) => ({
    //   ...prevData,
    //   "currencyType": value,
    // }));
  }



  const formSubmit = async (event) => {
    event.preventDefault();
    if (!isUpdate) {
      if (startupFundingData.currencyType && startupFundingData.fundingAsk && startupFundingData.valuation &&
        startupFundingData.minimumTicketSize && startupFundingData.capTableEntryFounder &&
        startupFundingData.capTableEntryESOP && startupFundingData.capTableEntryInvestor && startupFundingData.commitmentSoFar) {
        try {
          const response = await api.post("/startups/startup-funding-detail", { startupFundingData })
          if (response.data.success) {
            toast.success(response.data.message)
            setUserData(response.data.startupFundingDetails)
          }
        }
        catch (err) {
          console.log('Error:', err);
        }
      }
    }
    else {
      try {
        const response = await api.put("/startups/update-startup-funding-detail", { startupFundingData })
        if (response.data.success) {
          toast.success(response.data.message)
          setUserData(response.data.startupFundingDetails)
        }
        else {
          toast.error(response.data.message)
        }
      }
      catch (err) {
        console.log('Error:', err);
      }
    }
  }



  return (fundingStartup &&
    <div>
      <h3 className='pb-3 border-bottom'>Funding Details</h3>
      <form onSubmit={formSubmit}>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Currency Type</div>
            <div>
              <select className='p-2 startname-input-general' type="text" value={startupFundingData.currencyType} onChange={handleCurrency} >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Funding Ask</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="fundingAsk" value={startupFundingData.fundingAsk} onChange={handleInput} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Valuation</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="valuation" value={startupFundingData.valuation} onChange={handleInput} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Minimum Ticket Size</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="minimumTicketSize" value={startupFundingData.minimumTicketSize} onChange={handleInput} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='py-2'>Cap Table Entry</div>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Founder : (in %)</div>
            <div>
              <input className='p-2 startname-input-general' type="number" name="capTableEntryFounder" value={startupFundingData.capTableEntryFounder} onChange={handleInput} />
            </div>
          </div>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>ESOP : (in %)</div>
            <div>
              <input className='p-2 startname-input-general' type="number" name="capTableEntryESOP" value={startupFundingData.capTableEntryESOP} onChange={handleInput} />
            </div>
          </div>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Investor : (in %)</div>
            <div>
              <input className='p-2 startname-input-general' type="number" name="capTableEntryInvestor" value={startupFundingData.capTableEntryInvestor} onChange={handleInput} />
            </div>
          </div>
        </div>

        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Commitments So Far</div>
            <div>
              <input className='p-2 startname-input-general' type="text" name="commitmentSoFar" value={startupFundingData.commitmentSoFar} onChange={handleInput} />
            </div>
          </div>
        </div>

        <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />

      </form>


    </div>
  )
}

export default Funding
