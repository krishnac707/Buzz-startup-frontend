import React from 'react'

const InvestorThirdForm = ({ formData, setFormData }) => {

  const handleCheck = (event) => {
    setFormData({ ...formData, "InvestorTermAndCondition": event.target.checked })
  }

  const SelectAboutUs = (event) => {
    setFormData({ ...formData, "InvestorKownAboutUs": event.target.value })
  }

  return (
    <div className='startup-first-form-div'>
      <select onChange={SelectAboutUs} value={formData.StartupKnowAboutUs}>
        <option disabled value="default">
          Where do you know about us?
        </option>
        <option value="ideation">Social Media</option>
        <option value="MVP">News</option>
        <option value="pre-revenue">Event</option>
        <option value="Bootstrapped">Reference by Startup</option>
        <option value="Early">Reference by Investor</option>
      </select>
      <div className='startup-form-checbox-div'>
        <input type="checkbox" checked={formData.InvestorTermAndCondition} onChange={handleCheck}/>
        <p className='mb-0'>I hearby agree to the term & condtions & whatever information ia asked for I have provided the right information terms & condtions</p>
      </div>
    </div>
  )
}

export default InvestorThirdForm