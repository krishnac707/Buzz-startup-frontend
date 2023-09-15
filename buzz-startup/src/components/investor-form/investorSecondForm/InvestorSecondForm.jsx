import React from 'react'

const InvestorSecondForm = () => {
  return (
    <div className='startup-first-form-div'>
      <select name="stage">
        <option disabled selected value="">
          You are an
        </option>
        <option value="Individual">Individual</option>
        <option value="Incubator">Incubator</option>
        <option value="Angel Network">Angel Network</option>
        <option value="VC Fund">VC Fund</option>
        <option value="Family Office">Family Office</option>
        <option value="Corporate Fund">Corporate Fund</option>
      </select>

      <input type="text" placeholder='Name of your organization' />
      <input type="text" placeholder='Desigination' />
      <input type="text" placeholder='Website URL' />
      <input type="text" placeholder='Startups you have invested in' />

      <select name="">
        <option disabled selected value="">
          Which sector you are looking to invest in
        </option>
        <option value="Fintech">Fintech</option>
        <option value="Edtech">Edtech</option>
        <option value="Ecommerce">Ecommerce</option>
        <option value="Consumer Economy">Consumer Economy</option>
        <option value="Agriech">Agriech</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Retail">Retail</option>
      </select>

      <select name="">
        <option disabled selected value="">
          How much amount you are looking to invest in every financial year
        </option>
        <option value="$0 to $5000">$0 to $5000</option>
        <option value="$5000 to $10000">$5000 to $10000</option>
        <option value="$10000 to $ 250000">$10000 to $ 250000</option>
        <option value="$25000 to $ 50000">$25000 to $ 50000</option>
        <option value="$500000 to $ 100000">$500000 to $ 100000</option>
        <option value="$1000000 to $ 5000000">$1000000 to $ 5000000</option>
        <option value="$500000+">$500000+</option>
      </select>
    </div>
  )
}

export default InvestorSecondForm
