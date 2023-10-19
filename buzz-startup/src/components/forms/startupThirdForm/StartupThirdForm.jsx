import React from 'react'
import "./StartupThirdForm.css"

const StartupThirdForm = ({ formData, setFormData }) => {

    const handleCheck = (event) => {
        setFormData({ ...formData, "StartupTermsAndCondition": event.target.checked })
    }

    const SelectAboutUs = (event) => {
        setFormData({...formData, "StartupKnowAboutUs" : event.target.value})
    }

    return (
        <div className='startup-first-form-div'>
            <select onChange={SelectAboutUs}  value={formData.StartupKnowAboutUs}>
                <option disabled value="default">
                    Where do you know about us?
                </option>
                <option value="Social Media">Social Media</option>
                <option value="News">News</option>
                <option value="Event">Event</option>
                <option value="Reference by Startup">Reference by Startup</option>
                <option value="Reference by Investor">Reference by Investor</option>
            </select>
            <div className='startup-form-checbox-div'>
                <input type="checkbox" checked={formData.StartupTermsAndCondition} onChange={handleCheck} />
                <p className='mb-0'>I hearby agree to the term & condtions & whatever information ia asked for I have provided the right information terms & condtions</p>
            </div>
        </div>
    )
}

export default StartupThirdForm