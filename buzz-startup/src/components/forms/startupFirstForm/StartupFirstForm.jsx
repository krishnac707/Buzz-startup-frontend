import React from 'react'
import "./StartupFirstForm.css"

const StartupFirstForm = ({ formData, setFormData }) => {

    const handleInput = (event) =>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return (
        <div className='startup-first-form-div'>
            <input type="text" name="StartupName" value={formData.StartupName} onChange={handleInput} placeholder='Enter Your Startup Name' />
            <input type="text" name="StartupEmail" value={formData.StartupEmail} onChange={handleInput} placeholder='Enter Email Address' />
            <input type="date" name="StartupDate" value={formData.StartupDate} onChange={handleInput} placeholder='Enter Date' />
            <input type="text" name="StartupWebsiteUrl" value={formData.StartupWebsiteUrl} onChange={handleInput} placeholder='Website URL' />
            <input type="text" name="StartupHeadQuarter" value={formData.StartupHeadQuarter} onChange={handleInput} placeholder='Headquarter' />
            <input type="text" name="StartupState" value={formData.StartupState} onChange={handleInput} placeholder='State' />
            <input type="text" name="StartupCity" value={formData.StartupCity} onChange={handleInput} placeholder='City' />
            <input type="text" name="StartupPincode" value={formData.StartupPincode} onChange={handleInput} placeholder='Pincode' />
        </div>
    )
}

export default StartupFirstForm