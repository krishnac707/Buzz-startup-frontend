import React, { useContext } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'

const OtherDetails = () => {

  const {otherDetails} = useContext(GeneralDetailDashboardContext)

  return otherDetails &&
    <div className=' p-3'>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Linkedin Url :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="name" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Facebook Url :</div>
          <div>
            <input className='p-2 startname-input-general' type="email" name="emailId" />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Twitter Url :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="phoneNo" />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Add activities :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="linkedinUrl" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Education Background :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="currentCity" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Work Experience :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="experience" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Association :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="education" />
          </div>
        </div>
      </div>


      <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>

    </div>
  
}

export default OtherDetails
