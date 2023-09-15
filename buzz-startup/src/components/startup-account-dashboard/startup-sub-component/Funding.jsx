import React, { useContext, useState } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'

const Funding = () => {

  const { fundingStartup } = useContext(StartupDashboardContext)
  const [userData,setUserData] = useState({funding:"10000",valuation:"2500000",ticket:"10000",tableEntry:"3948374",commitment:"23443"})

  const handleInput = (e) =>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  return (fundingStartup &&
    <div>
      <h3 className='pb-3 border-bottom'>Funding Details</h3>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Currency Type</div>
          <div>
            <select className='p-2 startname-input-general' type="text" name="website" >
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
            <input className='p-2 startname-input-general' type="text" name="website" value={userData.funding} onChange={handleInput} />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Valuation</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="website" value={userData.valuation} onChange={handleInput} />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Minimum Ticket Size</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="website" value={userData.ticket} onChange={handleInput} />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Cap Table Entry</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="website" value={userData.tableEntry} onChange={handleInput} />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Commitments So Far</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="website" value={userData.commitment} onChange={handleInput} />
          </div>
        </div>
      </div>

      <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>

    </div>
  )
}

export default Funding
