import React, { useContext, useState } from 'react'
import { BasicFormDashboardContext } from '../../../../context/BasicFormDashboard.context'
import "./Basic.css";

const General = () => {
    const { general } = useContext(BasicFormDashboardContext)
    const [userData, setUserData] = useState({ name: "Nikhil",location:"Maharashtra",website:"www.google.com" })

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (general &&
        <div>
            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Startup Name</div>
                    <div>
                        <input className='p-2 startname-input-general' type="text" name="name" value={userData.name} onChange={handleInput} />
                    </div>
                </div>
            </div>

            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Tagline/small Description</div>
                    <div>
                        <input className='p-2 startname-input-general' type="text" name="tagline"  onChange={handleInput} />
                    </div>
                </div>
            </div>

            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Location</div>
                    <div>
                        <input className='p-2 startname-input-general' type="text" name="location" value={userData.location} onChange={handleInput} />
                    </div>
                </div>
            </div>

            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Website</div>
                    <div>
                        <input className='p-2 startname-input-general' type="text" name="website" value={userData.website} onChange={handleInput} />
                    </div>
                </div>
            </div>

            <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Sector/Industory</div>
                    <div>
                        <textarea className='p-2 startname-input-general' type="text" name="secotor"  onChange={handleInput} />
                    </div>
                </div>
            </div>

            <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
            
        </div>
    )
}

export default General