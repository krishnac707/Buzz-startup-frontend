import React, { useEffect, useState } from 'react'
import './InvestorOpportunity.css'
import api from '../../apiConfig';
import toast from 'react-hot-toast';

const InvestorOpportunity = () => {
  const [allStartups, setAllstartups] = useState([]);
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    const getStartupData = async () => {
      try {
        const response = await api.get("/investors/get-all-startup-overview-data",)
        if (response.data.success) {
          setAllstartups(response.data.allStartup);
          setFilteredStartups(response.data.allStartup);
        }
      }
      catch (err) {
        toast.error(err.response.data.message)
        console.log(err);
      }
    }
    getStartupData()
  }, []);

  const handleFilter = (selectedSector) => {
    setSelectedFilter(selectedSector);
    if (selectedSector === '') {
      setFilteredStartups(allStartups);
    } else {
      const filtered = allStartups.filter(startup => startup.startupSector === selectedSector);
      setFilteredStartups(filtered);
    }
  };

  const clearFilter = () => {
    setSelectedFilter('');
    setFilteredStartups(allStartups);
  };

  const addStartupInterest = async (startupId) => {
    console.log(startupId, "44");
    try {
      const response = await api.post("/investors/add-interested-startup-detail", { startupId: startupId })
      if (response.data.success) {
        toast.success(response.data.message)
      }
    }
    catch (err) {
      toast.error(err.response.data.message)
      // console.log(err);
    }
  }

  return (
    <div className='investor-main-opportunity-div'>

      <div className='d-flex justify-content-center align-items-center mx-auto'>
        <label className='mr-1'>Select Sector : </label>
        <select value={selectedFilter} className='form-control select-opportunity-width' onChange={(e) => handleFilter(e.target.value)}>
          <option value="">All</option>
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
        </select>
        <button type="button" className="btn btn-danger" onClick={clearFilter}>Clear Filter</button>
      </div>

      <div className='companys-cards-deals-div'>
        {filteredStartups && filteredStartups.map(startupData => (
          <div className='company-card-inside-deal-div shadow-sm mb-2' key={startupData.startupId}>
            <div className="company-name-image-div">
              <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
              <div>
                {startupData.startupName ? <h6>{startupData.startupName}</h6> : <h6>--</h6>}
                {startupData.startupTagline ? <p className='home-live-dashboard-company-description-font-size'>{startupData.startupTagline}</p> : <p className='home-live-dashboard-company-description-font-size'>--</p>}
              </div>
            </div>
            <div className='valuation-deadline-div'>
              <div>
                <p className="mb-0">valuation</p>
                {startupData.startupValuation ? <p className="mb-0"><b>{startupData.startupValuation}</b></p> : <p className="mb-0"><b>{startupData.startupValuation}</b></p>}
              </div>
              <div>
                <p className="mb-0">Stages</p>
                {startupData.startupStages ? <p className="mb-0"><b>{startupData.startupStages}</b></p> : <p className="mb-0"><b>--</b></p>}
              </div>
            </div>
            <div className='valuation-deadline-div-1'>
              <div>
                <p className="mb-0">Funding Asked</p>
                {startupData.startupFundingAsk ? <p className="mb-0"><b>{startupData.startupFundingAsk}</b></p> : <p className="mb-0"><b>--</b></p>}
              </div>
              <div>
                <p className="mb-0">Min. Investment</p>
                {startupData.startupMinimumFunding ? <p className="mb-0"><b>{startupData.startupMinimumFunding}</b></p> : <p className="mb-0"><b>--</b></p>}
              </div>
            </div>
            <div className='valuation-deadline-div-2'>
              <div>
                <p className="mb-0">CAP</p>
                {startupData.startupcapTableEntryFounder ? <p className="mb-0"><b>Founder : {startupData.startupcapTableEntryFounder} %</b></p> : <p className="mb-0"><b>Founder : -- %</b></p>}
                {startupData.startupCapTableEntryESOP ? <p className="mb-0"><b>ESOP : {startupData.startupCapTableEntryESOP} %</b></p> : <p className="mb-0"><b>Founder : -- %</b></p>}
                {startupData.startupCapTableEntryInvestor ? <p className="mb-0"><b>Investor : {startupData.startupCapTableEntryInvestor} %</b></p> : <p className="mb-0"><b>Founder : -- %</b></p>}
                {startupData.startupSector ? <button className='agritech-button'>{startupData.startupSector}</button> : <button className='agritech-button'>--</button>}
              </div>
              <div>
                <p className="mb-0">Commitment So Far</p>
                {startupData.startupCommetmentSoFar ? <p className="mb-0"><b>{startupData.startupCommetmentSoFar}</b></p> : <p className="mb-0"><b>--</b></p>}
              </div>
            </div>
            <button type="button" className="btn btn-dark text-center interested-button-width" onClick={() => addStartupInterest(startupData.startupId)}>Interested</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default InvestorOpportunity