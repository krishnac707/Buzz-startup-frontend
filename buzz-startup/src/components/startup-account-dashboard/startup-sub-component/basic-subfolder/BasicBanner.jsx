
import React, { useContext, useState } from 'react'
import { BasicFormDashboardContext } from '../../../../context/BasicFormDashboard.context'

const BasicBanner = () => {
    const { banner } = useContext(BasicFormDashboardContext)
    const[userData,setUserData] = useState({bannerUrl:"www.link.com"})

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (banner &&
        <div>
            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Banner Url</div>
                    <div>
                        <input className='p-2 startname-input-general' type="text" name="bannerUrl" value={userData.bannerUrl} onChange={handleInput} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicBanner