import React, { useContext, useState } from 'react'
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'
import toast from 'react-hot-toast';
import api from '../../../apiConfig';

const PassportComponent = () => {

  const { passport } = useContext(KycFormDashboardContext)
  const [passportFront, setPassportFront] = useState(null);
  const [passportBack, setPassportBack] = useState(null);

  const handlePassportFront = (e) => {
    setPassportFront(e.target.files[0]);
  };

  const handlePassportBack = (e) => {
    setPassportBack(e.target.files[0]);
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('passportFront', passportFront);
    formData.append('passportBack', passportBack);
    if (formData) {
      try {
        const response = await api.put("/investors/update-kyc-passport-investor-data", formData)
        if (response.data.success) {
          toast.success(response.data.message)
        }
      }
      catch (error) {
        toast.error(error.response.data.message)
      }
    }
    else {
      toast.error("Please fill the detail first...")
    }
  }

  return passport &&
    <div>
      <form onSubmit={formSubmit}>
        <h5 className='mt-3'>Front Passport</h5>
        <p>Please use an image no larger than 1200px * 600px.</p>
        <div className='file-div'>
          <input type="file" className='input-file' onChange={handlePassportFront} id="passportFrontInput" />
          <label htmlFor="passportFrontInput" className="custom-button">Upload Passport Front</label>
        </div>

        <h5 className='mt-3'>Back Passport</h5>
        <p>Please use an image no larger than 1200px * 600px.</p>
        <div className='file-div'>
          <input type="file" className='input-file' onChange={handlePassportBack} id="passportBackInput" />
          <label htmlFor="passportBackInput" className="custom-button">Upload Passport Back</label>
        </div>
        {/* <input type="submit" className='uploadImageButtonCss px-3 py-1 mt-1 mx-auto' value="Save" /> */}
        <input type='submit' className='startup-basic-general-save-button text-center py-1 my-3' value="Save" />
      </form>
    </div>
}

export default PassportComponent
