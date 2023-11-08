import React, { useContext, useEffect, useState } from 'react'
import { PitchDashboardContext } from '../../../../context/PitchDashboard.context'
import "./Pitch.css"
import toast from 'react-hot-toast'
import api from '../../../apiConfig'
import { AuthContext } from '../../../../context/Auth.context'

const Tract = () => {
    const { tractStartup } = useContext(PitchDashboardContext)
    const { state } = useContext(AuthContext);
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const startupDetailFunction = async () => {
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
                    }
                }
                else {
                    toast.error("You are Not a Startup User");
                }
            }
        }
        startupDetailFunction()
    }, [])

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const formSubmit = async (event) => {
        try {
            event.preventDefault();
            if (userData.startupTract) {
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
    }

    return (tractStartup &&
        <div>
            <form onSubmit={formSubmit} className='tract-body-css'>
                <p className='pt-3'>This is how others will learn about the project, so make it good!</p>
                <textarea className='p-1' type="text" name="startupTract" value={userData.startupTract} onChange={handleInput} />
                <div>
                    <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Tract