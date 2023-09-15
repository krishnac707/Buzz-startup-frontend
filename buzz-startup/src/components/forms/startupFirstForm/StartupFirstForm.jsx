import React from 'react'
import "./StartupFirstForm.css"
// import DatePicker from 'react-date-picker'

const StartupFirstForm = ({ formData, setFormData }) => {

    // const [dateValue, onDateChange] = useState(new Date());

    return (
        <div className='startup-first-form-div'>
            <input type="text" name="" placeholder='Enter Your Startup Name' />
            <input type="text" name="" placeholder='Enter Email Address' />
            <input type="date" name="" />
            <input type="text" name="" placeholder='Website URL' />
            <input type="text" name="" placeholder='Headquarter' />
            <input type="text" name="" placeholder='State' />
            <input type="text" name="" placeholder='City' />
            <input type="text" name="" placeholder='Pincode' />
        </div>
    )
}

export default StartupFirstForm