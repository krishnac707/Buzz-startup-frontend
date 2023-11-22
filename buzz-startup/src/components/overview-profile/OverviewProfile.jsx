import React, { useEffect, useState } from 'react'
import "./OverviewProfile.css"
import { useNavigate } from 'react-router-dom'
import api from '../apiConfig'

const OverviewProfile = () => {

    const [startupData, setStartupData] = useState({})
    const router = useNavigate();

    useEffect(() => {
        const startupFunction = async () => {
            try {
                const response = await api.get("/investors/get-single-startup-overview")
                if (response.data.success) {
                    setStartupData(response.data.result)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        startupFunction()
    }, [])

    return (
        <div className='overview-profile-body'>
            <div className="overview-profile-startup-heading">
                <h3>Your Startup</h3>
            </div>
            <p className='px-4 py-2'>🚀 Complete Your Startup Profile Today and Get Listed for Investors!
                Great start on your profile! You've completed 12% of the journey. Add the remaining details to
                boost visibility and attract opportunities. When your profile hits 100%, you can submit your
                startup for listing to potential investors. Watch your progress bar fill up as you go! 🌟
            </p>
            <button className='mx-4 mb-1 p-2 text-center add-remain-button' onClick={() => router("/startup-main-form-dashboard")}>+Startup Details</button>

            <p className='px-4 py-2'>Welcome, aspiring startups! 🌟 Excited to showcase your brilliance to potential
                investors? See how your filled startup details will be displayed in all its glory!
                🚀 We've curated a captivating sample view that demonstrates the immense potential
                of your business. 💡 Get inspired and witness firsthand how your startup can shine on
                our platform! 🌠 Explore the sample view. Let's make your startup stand out from the
                crowd!
            </p>

            {startupData && <div className='companys-cards-deals-div'>

                <div className='company-card-inside-deal-div shadow-sm mb-2' >
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
                            {/* <p className="mb-0"><b>Founder:60%</b></p>
                            <p className="mb-0"><b>ESOP:20%</b></p>
                            <p className="mb-0"><b>Investor:20%</b></p> */}
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
                </div>
            </div>}

        </div>
    )
}

export default OverviewProfile
