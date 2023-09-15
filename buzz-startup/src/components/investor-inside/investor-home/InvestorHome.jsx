import React from 'react'
import './InvestorHome.css'

const InvestorHome = () => {
    return (
        <div className='invester-home-css'>
            <div className='invester-pending-verify-page-div'>
                <div>
                    <h4 className='p-3'>Your Profile is pending for verification</h4>
                </div>
                <p className='p-3'>
                    Your profile has been submitted for verification. Once the verification process
                    is completed successfully, you will be able to commence your investment activities.
                    To facilitate a swift verification process, please make sure to include any necessary
                    information that may be missing in your profile and fulfill the Know Your Customer
                    (KYC) requirements.
                </p>
            </div>

        </div>
    )
}

export default InvestorHome