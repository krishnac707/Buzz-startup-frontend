import React, { useContext } from 'react'
import { GeneralDetailDashboardContext } from '../../../../../context/GeneralDetailDashboard.context'
import './GeneralDetailCommon.css'

const AboutMe = () => {

  const { aboutMe } = useContext(GeneralDetailDashboardContext)

  return aboutMe &&
    <div>
      <textarea className='mt-3' id="" cols="70" rows="7"></textarea>
        <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
        <button className='startup-basic-general-save-button text-center  mx-2 py-1 my-3'>Cancel</button>
    </div>
}

export default AboutMe
