import React, { useContext, useState } from 'react'
import "./KycDoc.css"
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'

const AadharCardComponent = () => {

    const { aadharcard } = useContext(KycFormDashboardContext)
    const [aadharImage, setAadharImage] = useState({ frontImage: null, backImage: null })
    console.log(aadharImage, "9");


    const handleImageField = (e) => {
        setAadharImage({ ...aadharImage, [e.target.name]: e.target.files[0] })
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("aadharFrontImage", aadharImage.frontImage);
            formData.append("aadharBackImage", aadharImage.backImage);
            if (formData) {
                const token = JSON.parse(localStorage.getItem("token"))
                const response = await api.put("/investors/update-investor-data", { formData, token })
                if (response.data.success) {
                    toast.success(response.data.message)
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
            console.log(error);
        }
    }

    return aadharcard &&
        <div>
            <form onSubmit={formSubmit}>
                <h5 className='mt-3'>Front Aadhar</h5>
                <p>Please use an image no larger than 1200px * 600px.</p>
                <div className='file-div'>
                    <input type="file" name="frontImage" className='input-file' onChange={handleImageField} id="fileInput" />
                    <label htmlFor="fileInput" className="custom-button">Upload Aadhar Front</label>
                </div>

                <h5 className='mt-3'>Back Aadhar</h5>
                <p>Please use an image no larger than 1200px * 600px.</p>
                <div className='file-div'>
                    <input type="file" name="backImage" className='input-file' onChange={handleImageField} id="backFileInput" />
                    <label htmlFor="backFileInput" className="custom-button">Upload Aadhar Back</label>
                </div>
                <input type="submit" className='uploadImageButtonCss px-3 py-1 mt-1 mx-auto' value="Save" />
            </form>
        </div>

}

export default AadharCardComponent
