import React, { useContext } from 'react'
import profileImage from './../../../../images/startup-dashboard-profile-logo.png'
import { InvesterAccountDashboardContext } from '../../../../context/InvestorAccountDashboard.context'

const InvestmentManager = () => {

    const { investmentManager } = useContext(InvesterAccountDashboardContext)

    return investmentManager &&
        <div>
            <h3 className='pb-3 border-bottom'>Investor Manager</h3>
            <div className='relation-ship-image-info-div'>
                <div className='pt-3'>
                    <img src={profileImage} alt="" />
                </div>
                <div>
                    <h4 className='pt-3'>Nikhil Chaudhari</h4>
                    <p className='mb-1'>Investor Manager</p>
                    <p className='mb-1'>Email : nik@buzzstartups.com</p>
                    <p className='mb-1'>Phone : 8446784705</p>
                    <button className='mt-2 mb-4 p-2 chat-button-css'>Chat With Us</button>
                    <div className='relationship-note'>
                        <p>note :</p>
                        <p>Your Relationship ManagerWill Be Available On WhatsApp Chat Between
                            10:00AM And 7:00PM On Every Monday To Friday.</p>
                    </div>
                </div>
            </div>
        </div>
}

export default InvestmentManager