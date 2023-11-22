import React, { useContext, useEffect, useState } from 'react'
import { PitchDashboardContext } from '../../../../context/PitchDashboard.context'
import { AuthContext } from '../../../../context/Auth.context';
import api from '../../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../../loader-component/Loader';

const Highlights = () => {
  const { highlights } = useContext(PitchDashboardContext);
  const { state } = useContext(AuthContext);
  const [userData, setUserData] = useState({ startupHighlights: "" })
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
      if (userData.startupHighlights) {
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

  return (highlights &&
    <div>
      {loading ? (
                <Loader loading={loading} />
            ) : (
      <form onSubmit={formSubmit} className='tract-body-css'>
        <p className='pt-3'>This is how others will learn about the project, so make it good!</p>
        <textarea className='p-1' type="text" name="startupHighlights" value={userData.startupHighlights} onChange={handleInput} />
        <div>
          <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
        </div>
      </form>)}
    </div>
  )
}

export default Highlights
