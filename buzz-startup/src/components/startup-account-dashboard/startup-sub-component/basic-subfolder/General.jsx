import React, { useContext, useEffect, useState } from 'react'
import { BasicFormDashboardContext } from '../../../../context/BasicFormDashboard.context'
import "./Basic.css";
import { AuthContext } from '../../../../context/Auth.context';
import api from '../../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../../loader-component/Loader';

const General = () => {
    const { general } = useContext(BasicFormDashboardContext)
    const { state } = useContext(AuthContext);
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        startupDetailFunction()
    }, [])

    const startupDetailFunction = async () => {
        setLoading(true);
        if (state?.user?.Email) {
            if (state?.user?.Role == "Startup") {
                const token = JSON.parse(localStorage.getItem("token"));
                if (token) {
                    try {
                        const response = await api.post("/startups/startup-basic-detail", { token })
                        if (response.data.success) {
                            setUserData(response.data.startupDetail)
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                    finally {
                        setLoading(false);
                    }
                }
            }
            else {
                toast.error("You are Not a Startup User");
            }
        }
    }

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const formSubmit = async (event) => {
        try {
            event.preventDefault();
            setLoading(true);
            if (userData) {
                const token = JSON.parse(localStorage.getItem("token"))
                const response = await api.put("/startups/update-startup-company-data", { userData, token })
                if (response.data.success) {
                    toast.success(response.data.message)
                }
                else {
                    toast.error(response.data.message)
                }
            }
            else {
                toast.error("Please fill the detail first...")
            }
        }
        catch (error) {
            console.log('Error:', error);
        }
        finally {
            setLoading(false);
        }
    }

    return (general &&
        <div>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <form onSubmit={formSubmit}>
                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Startup Name</div>
                            <div>
                                <input className='p-2 startname-input-general' type="text" name="StartupName" value={userData.StartupName} onChange={handleInput} />
                            </div>
                        </div>
                    </div>

                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Tagline/small Description</div>
                            <div>
                                <input className='p-2 startname-input-general' type="text" name="startupTagline" value={userData.startupTagline} onChange={handleInput} />
                            </div>
                        </div>
                    </div>

                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Location</div>
                            <div>
                                <input className='p-2 startname-input-general' type="text" name="StartupState" value={userData.StartupState} onChange={handleInput} />
                            </div>
                        </div>
                    </div>

                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Website</div>
                            <div>
                                <input className='p-2 startname-input-general' type="text" name="StartupWebsiteUrl" value={userData.StartupWebsiteUrl} onChange={handleInput} />
                            </div>
                        </div>
                    </div>

                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Sector/Industory</div>
                            <div>
                                <textarea className='p-2 startname-input-general' type="text" name="startupSector" value={userData.startupSector} onChange={handleInput} />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
                </form>)}
        </div>
    )
}

export default General