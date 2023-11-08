import React, { useContext, useState } from 'react'
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'
import toast from 'react-hot-toast';
import api from '../../../apiConfig';

const PancardComponent = () => {

  const { pancard } = useContext(KycFormDashboardContext)
  const [panDoc, setPanDoc] = useState(null);

  const handlePanDoc = (e) => {
    setPanDoc(e.target.files[0]);
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      var formData = new FormData();
      formData.append('panDoc', panDoc);
      if (formData) {
        const response = await api.put("/investors/update-kyc-pancard-investor-data", formData)
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

  return pancard &&
    <div>
      <form onSubmit={formSubmit}>
        <h5 className='mt-3'>Pancard</h5>
        <p>Please use an image no larger than 1200px * 600px.</p>
        <div className='file-div'>
          <input type="file" className='input-file' onChange={handlePanDoc} id="pancardFileInput" />
          <label for="pancardFileInput" className="custom-button">Upload Pancard</label>
        </div>
        <input type="submit" className='uploadImageButtonCss px-3 py-1 mt-1 mx-auto' value="Save" />
      </form>
    </div>
}

export default PancardComponent