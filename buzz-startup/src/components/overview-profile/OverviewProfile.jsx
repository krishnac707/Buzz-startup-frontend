import React from 'react'
import "./OverviewProfile.css"

const OverviewProfile = () => {
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
            <button className='mx-4 mb-1 p-2 text-center add-remain-button'>+Add Remaining Details</button>

            <p className='px-4 py-2'>Welcome, aspiring startups! 🌟 Excited to showcase your brilliance to potential
                investors? See how your filled startup details will be displayed in all its glory!
                🚀 We've curated a captivating sample view that demonstrates the immense potential
                of your business. 💡 Get inspired and witness firsthand how your startup can shine on
                our platform! 🌠 Explore the sample view. Let's make your startup stand out from the
                crowd!
            </p>

            <div className='company-card-inside-deal-div shadow-sm mx-4 mb-2' >
                <div className="company-name-image-div">
                    <div><img src="https://www.efeed.in/static/media/logoFull_orange.01ce8f91aee2decbba6a6ca90acf97b6.svg" alt="" /></div>
                    <div>
                        <h6>eFeed</h6>
                        <p className='home-live-dashboard-company-description-font-size'>Better nutrition better lives</p>
                    </div>
                </div>
                <div className='valuation-deadline-div'>
                    <div>
                        <p className="mb-0">valuation</p>
                        <p className="mb-0"><b>32 cr</b></p>
                    </div>
                    <div>
                        <p className="mb-0">Deadline</p>
                        <p className="mb-0"><b>2022-12-15</b></p>
                    </div>
                </div>
                <div className='valuation-deadline-div-1'>
                    <div>
                        <p className="mb-0">Funding Asked</p>
                        <p className="mb-0"><b>4 cr</b></p>
                    </div>
                    <div>
                        <p className="mb-0">Min. Investment</p>
                        <p className="mb-0"><b>2 Lakhs</b></p>
                    </div>
                </div>
                <div className='valuation-deadline-div-2'>
                    <div>
                        <p className="mb-0">CAP</p>
                        <p className="mb-0"><b>Founder:60%</b></p>
                        <p className="mb-0"><b>ESOP:20%</b></p>
                        <p className="mb-0"><b>Investor:20%</b></p>
                        <button className='agritech-button'>Agritech</button>
                    </div>
                    <div>
                        <p className="mb-0"><b>500,000 USD</b></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OverviewProfile
