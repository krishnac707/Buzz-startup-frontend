import React, { useContext } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'

const GeneralDetailInside = () => {

  const { generalDetailInside } = useContext(GeneralDetailDashboardContext)

  return generalDetailInside &&
    <div className=' p-3'>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Name :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="name" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Email Id :</div>
          <div>
            <input className='p-2 startname-input-general' type="email" name="emailId" />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Phone NO :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="phoneNo" />
          </div>
        </div>
      </div>

      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Country :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="linkedinUrl" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>State :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="currentCity" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>City :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="experience" />
          </div>
        </div>
      </div>
      <div className='startup-general-body'>
        <div className='startup-general-startup-name-div py-3'>
          <div className='py-2'>Pincode :</div>
          <div>
            <input className='p-2 startname-input-general' type="text" name="education" />
          </div>
        </div>
      </div>


      <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>

    </div>

}

export default GeneralDetailInside