import React, { useEffect, useMemo, useState } from 'react'
import Select from 'react-select';
import countryList from 'react-select-country-list'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './InvestorFirstForm.css'

const InvestorFirstForm = ({ formData, setFormData }) => {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const handleInput = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const handlePhoneNumber = value => {
        setFormData({ ...formData, "InvestorNumber": value })
    }

    const changeHandler = value => {
        setFormData({ ...formData, "InvestorCountry": value.label })
    }
    return (
        <div className='startup-first-form-div'>
            <input type="text" name="InvestorName" value={formData.InvestorName} onChange={handleInput} placeholder='Enter Name' />
            <input type="text" name="InvestorEmail" value={formData.InvestorEmail} onChange={handleInput} placeholder='Enter Email Address' />
            <div className="PhoneInputCss">
                <PhoneInput  country={'us'} value={formData.InvestorNumber} onChange={handlePhoneNumber} />
            </div>
            <input type="text" name="InvestorLinkdinUrl" value={formData.InvestorLinkdinUrl} onChange={handleInput} placeholder='Linkedin Url' />
            <Select className='investor-select-css' options={options} defaultValue={formData.InvestorCountry} placeholder="Select Country" onChange={changeHandler} />
            <input type="text" name="InvestorCity" value={formData.InvestorCity} onChange={handleInput} placeholder='City' />
            <input type="number" name="InvestorPincode" value={formData.InvestorPincode} onChange={handleInput} placeholder='Pincode' />
        </div>
    )
}

export default InvestorFirstForm
