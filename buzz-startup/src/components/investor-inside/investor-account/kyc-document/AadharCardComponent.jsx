import React, { useContext, useState } from 'react'
import "./KycDoc.css"
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'

const AadharCardComponent = () => {

    const { aadharcard } = useContext(KycFormDashboardContext)
    const [aadharFront, setAadharFront] = useState(null);
    const [aadharBack, setAadharBack] = useState(null);

    const handleAadharFront = (e) => {
        setAadharFront(e.target.files[0]);
    };

    const handleAadharBack = (e) => {
        setAadharBack(e.target.files[0]);
    };


    const formSubmit = async (event) => {
        event.preventDefault();
        console.log(aadharFront, "28");
        var formData = new FormData();
        formData.append('aadharFront', aadharFront);
        formData.append('aadharBack', aadharBack);
        if (formData) {
            try {
                const response = await api.post("/investors/update-kyc-aadharcard-investor-data", formData)
                if (response.data.success) {
                    toast.success(response.data.message)
                }
            }
            catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
            }
        }
        else {
            toast.error("Please fill the detail first...")
        }
    }

    return aadharcard &&
        <div>
            <form onSubmit={formSubmit}>
                <h5 className='mt-3'>Front Aadhar</h5>
                <p>Please use an image no larger than 1200px * 600px.</p>
                <div className='file-div'>
                    <input type="file" className='input-file' onChange={handleAadharFront} id="fileInput" />
                    <label htmlFor="fileInput" className="custom-button">Upload Aadhar Front</label>
                </div>

                <h5 className='mt-3'>Back Aadhar</h5>
                <p>Please use an image no larger than 1200px * 600px.</p>
                <div className='file-div'>
                    <input type="file" className='input-file' onChange={handleAadharBack} id="backFileInput" />
                    <label htmlFor="backFileInput" className="custom-button">Upload Aadhar Back</label>
                </div>
                {/* <div> */}
                {/* <input type="submit" className='uploadImageButtonCss px-3 py-1 mt-1 mx-auto' value="Save" /> */}
                <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />

                {/* </div> */}
            </form>
        </div>

}

export default AadharCardComponent
