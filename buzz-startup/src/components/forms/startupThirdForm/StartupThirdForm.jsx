import React from 'react'
import "./StartupThirdForm.css"

const StartupThirdForm = () => {
    return (
        <div className='startup-first-form-div'>
            <select name="stage">
                <option disabled selected value="">
                    Where do you know about us?
                </option>
                <option value="ideation">Social Media</option>
                <option value="MVP">News</option>
                <option value="pre-revenue">Event</option>
                <option value="Bootstrapped">Reference by Startup</option>
                <option value="Early">Reference by Investor</option>
            </select>
            <div className='startup-form-checbox-div'>
                <input type="checkbox" name="" id="" />
                <p className='mb-0'>I hearby agree to the term & condtions & whatever information ia asked for I have provided the right information terms & condtions</p>
            </div>
        </div>
    )
}

export default StartupThirdForm