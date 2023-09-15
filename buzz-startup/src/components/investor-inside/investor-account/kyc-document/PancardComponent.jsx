import React, { useContext } from 'react'
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'

const PancardComponent = () => {

  const { pancard } = useContext(KycFormDashboardContext)

  return pancard &&
    <div>
      <h5 className='mt-3'>Pancard</h5>
      <p>Please use an image no larger than 1200px * 600px.</p>
      <div className='file-div'>
        <input type="file" name="" className='input-file' id="" />
        <label for="fileInput" className="custom-button">Upload Pancard</label>
      </div>
    </div>

}

export default PancardComponent