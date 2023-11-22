import React, { useEffect, useState } from 'react'
import './InterestInvestor.css'
import toast from 'react-hot-toast';
import api from '../../apiConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader-component/Loader';

const InterestInvestor = () => {

    const [startupInterestedDetail, setStartupInterestedDetail] = useState([])
    const [loading, setLoading] = useState(true);
    const router = useNavigate();

    const getStartupDetails = async () => {
        try {
            const response = await api.get("/investors/get-interested-startup-detail")
            if (response.data.success) {
                setStartupInterestedDetail(response.data.startupDetails)
            }
        }
        catch (err) {
            toast.error(err.response.data.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getStartupDetails()
    }, [])

    return (
        <div className='interest-investor-main-div'>
            <h1 className='text-center'>Your Startup Interested List </h1>
            <div className='companys-cards-deals-div'>
                {loading ? (<Loader loading={true} />)
                 : 
                startupInterestedDetail.length ? startupInterestedDetail.map(startupData => (
                    <div className='company-card-inside-deal-div shadow-sm mb-2' key={startupData.startupId} onClick={() => router(`/get-single-interest-startup-detail/${startupData.startupId}`)}>
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
                    </div>
                )) :
                    <div className='iiis-width'>
                        <h3 className='text-center'>You have not shown interest in any Startup yet</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default InterestInvestor