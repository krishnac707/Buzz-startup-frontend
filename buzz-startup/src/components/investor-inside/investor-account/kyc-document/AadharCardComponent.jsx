import React, { useContext } from 'react'
import "./KycDoc.css"
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'

const AadharCardComponent = () => {

    const { aadharcard } = useContext(KycFormDashboardContext)

    return aadharcard &&
        <div>
            <h5 className='mt-3'>Front Aadhar</h5>
            <p>Please use an image no larger than 1200px * 600px.</p>
            <div className='file-div'>
                <input type="file" name="" className='input-file' id="fileInput" />
                <label for="fileInput" className="custom-button">Upload Aadhar Front</label>
            </div>

            <h5 className='mt-3'>Back Aadhar</h5>
            <p>Please use an image no larger than 1200px * 600px.</p>
            <div className='file-div'>
                <input type="file" name="" className='input-file' id="backFileInput" />
                <label for="backFileInput" className="custom-button">Upload Aadhar Back</label>
            </div>
        </div>

}

export default AadharCardComponent
