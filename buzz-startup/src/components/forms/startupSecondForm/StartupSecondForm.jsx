import React from 'react';
import './StartupSecondForm.css';

const StartupSecondForm = () => {
    return (
        <div className='startup-first-form-div'>
            <select name="stage">
                <option disabled selected value="">
                    Stage
                </option>
                <option value="ideation">Ideation</option>
                <option value="MVP">MVP</option>
                <option value="pre-revenue">Pre-revenue</option>
                <option value="Bootstrapped">Bootstrapped</option>
                <option value="Early">Early</option>
            </select>

            <select name="">
                <option disabled selected value="">
                    Type of Business
                </option>
                <option value="D2C">D2C</option>
                <option value="B2B">B2B</option>
                <option value="B2C">B2C</option>
                <option value="SaaS">SaaS</option>
                <option value="Others">Others</option>
            </select>

            <select name="">
                <option disabled selected value="">
                    Select Multiple Sector
                </option>
                <option value="Fintech">Fintech</option>
                <option value="Edtech">Edtech</option>
                <option value="Ecommerce">Ecommerce</option>
            </select>

            <select name="">
                <option disabled selected value="">
                    Current Round*
                </option>
                <option value="Seed">Seed</option>
                <option value="Angel">Angel</option>
                <option value="Pre Series A">Pre Series A</option>
            </select>

            <input type="text" placeholder='Total Investment Raised Previous round if any)' />

        </div>
    )
}

export default StartupSecondForm
