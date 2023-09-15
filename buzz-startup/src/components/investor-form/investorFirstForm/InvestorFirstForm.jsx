import React, { useEffect, useMemo, useState } from 'react'
import Select from 'react-select';
import countryList from 'react-select-country-list'
import './InvestorFirstForm.css'

const InvestorFirstForm = ({ formData, setFormData }) => {

    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedCode, setSelectedCode] = useState('');
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const handleCodeChange = (e) => {
        setSelectedCode(e.target.value);
    };

    const changeHandler = value => {
        setValue(value)
    }

    useEffect(() => {
        const data = [
            { code: '+1', country: 'United States' },
            { code: '+44', country: 'United Kingdom' },
            { code: '+61', country: 'Australia' },
        ];

        setCountryCodes(data);
    }, []);

    return (
        <div className='startup-first-form-div'>
            <input type="text" name="" placeholder='Enter Name' />
            <input type="text" name="" placeholder='Enter Email Address' />
            <select value={selectedCode} onChange={handleCodeChange}>
                <option value="">Country code</option>
                {countryCodes.map((item, index) => (
                    <option key={index} value={item.code}>
                        {`${item.country} (${item.code})`}
                    </option>
                ))}
            </select>
            <input type="number" name="" placeholder="Phone Number" />
            <input type="text" name="" placeholder='Linkedin Url' />
            
            <Select className='investor-select-css' options={options} value={value} onChange={changeHandler} />
            <input type="text" name="" placeholder='City' />
            <input type="text" name="" placeholder='Pincode' />
        </div>
    )
}

export default InvestorFirstForm
