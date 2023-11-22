
import React, { useContext, useEffect, useState } from 'react'
import { BasicFormDashboardContext } from '../../../../context/BasicFormDashboard.context'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../../context/Auth.context'
import Loader from '../../../loader-component/Loader'

const BasicBanner = () => {
    const { banner } = useContext(BasicFormDashboardContext)
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
        setLoading(true);
        try {
            event.preventDefault();
            if (userData.startupBannerUrl) {
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

    return (banner &&
        <div>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <form onSubmit={formSubmit}>
                    <div className='startup-general-body'>
                        <div className='startup-general-startup-name-div py-3'>
                            <div className='py-2'>Banner Url</div>
                            <div>
                                <input className='p-2 startname-input-general' type="text" name="startupBannerUrl" value={userData.startupBannerUrl} onChange={handleInput} />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
                </form>)}
        </div>
    )
}

export default BasicBanner