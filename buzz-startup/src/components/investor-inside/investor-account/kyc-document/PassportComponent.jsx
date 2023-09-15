import React, { useContext } from 'react'
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'

const PassportComponent = () => {

  const {passport} = useContext(KycFormDashboardContext)

  return passport &&
    <div>
      <h5 className='mt-3'>Front Passport</h5>
      <p>Please use an image no larger than 1200px * 600px.</p>
      <div className='file-div'>
        <input type="file" name="" className='input-file' id="" />
        <label for="fileInput" className="custom-button">Upload Passport Front</label>
      </div>

      <h5 className='mt-3'>Back Passport</h5>
      <p>Please use an image no larger than 1200px * 600px.</p>
      <div className='file-div'>
        <input type="file" name="" className='input-file' id="" />
        <label for="fileInput" className="custom-button">Upload Passport Back</label>
      </div>
    </div>
  
}

export default PassportComponent
