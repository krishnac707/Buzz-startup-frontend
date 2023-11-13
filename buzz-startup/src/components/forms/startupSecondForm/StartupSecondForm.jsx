import React from 'react';
import './StartupSecondForm.css';

const StartupSecondForm = ({ formData, setFormData }) => {

    const handleInput = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const HandleChange = (event) => {
        setFormData({ ...formData, "StartupStage": event.target.value })
    }

    const BusinessSelect = (event) => {
        setFormData({ ...formData, "StartupBusinessType": event.target.value })
    }

    const SectorSelect = (event) => {
        setFormData({ ...formData, "StartupMultipleSector": event.target.value })
    }

    const SelectRound = (event) => {
        setFormData({ ...formData, "StartupRound": event.target.value })
    }

    return (
        <div className='startup-first-form-div'>
            <select onChange={HandleChange} value={formData.StartupStage}>
                <option value="default" disabled>
                    Stage
                </option>
                <option value="ideation">Ideation</option>
                <option value="MVP">MVP</option>
                <option value="pre-revenue">Pre-revenue</option>
                <option value="Bootstrapped">Bootstrapped</option>
                <option value="Early">Early</option>
            </select>

            <select onChange={BusinessSelect} value={formData.StartupBusinessType}>
                <option disabled value="default">
                    Type of Business
                </option>
                <option value="D2C">D2C</option>
                <option value="B2B">B2B</option>
                <option value="B2C">B2C</option>
                <option value="SaaS">SaaS</option>
                <option value="Others">Others</option>
            </select>

            <select onChange={SectorSelect} value={formData.StartupMultipleSector}>
                <option disabled value="default">
                    Select Multiple Sector
                </option>
                <option value="Fintech">Fintech</option>
                <option value="Edtech">Edtech</option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="Consumer Economy">Consumer Economy</option>
                <option value="Agriech">Agriech</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Retail">Retail</option>
                <option value="Media Tech">Media Tech</option>
                <option value="Web3.0">Web3.0</option>
                <option value="Gaming">Gaming</option>
                <option value="Bio Tech">Bio Tech</option>
                <option value="Fitness Tech">Fitness Tech</option>
                <option value="AI">AI</option>
                <option value="Deep Tech">Deep Tech</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Climate Tech">Climate Tech</option>
                <option value="Consumer Brands">Consumer Brands</option>
                <option value="IoT">IoT</option>
                <option value="Travel tech">Travel tech</option>
                <option value="EV">EV</option>
                <option value="Health Tech">Health Tech</option>
                <option value="Logistics">Logistics</option>
                <option value="Clean Tech">Clean Tech</option>
                <option value="Other">Other</option>
            </select>

            <select onChange={SelectRound} value={formData.StartupRound}>
                <option disabled value="default">
                    Current Round*
                </option>
                <option value="Seed">Seed</option>
                <option value="Angel">Angel</option>
                <option value="Pre Series A">Pre Series A</option>
            </select>

            <input type="number" name='StartupPreviousInvestment' value={formData.StartupPreviousInvestment} onChange={handleInput} placeholder='Total Investment Raised Previous round if any)' />

        </div>
    )
}

export default StartupSecondForm
