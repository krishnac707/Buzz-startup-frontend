import React, { useContext, useEffect, useState } from 'react'
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import api from '../../../apiConfig'

const TeamSize = () => {
  const { teamSize } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([]);
  const [teamData, setTeamData] = useState([])

  console.log(teamData?.teamSizeDetails, "14");

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { teamName: "", teamSize: "" }])
  }

  const handleInput = (e, i) => {
    const { name, value } = e.target
    const onChangeValue = [...userData]
    onChangeValue[i][name] = value
    setUserData(onChangeValue)
  }

  const handleDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    // const confirmSubmit = window.confirm("Are you sure you want to submit this form?");
    // if(confirmSubmit){
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].teamName || userData[i].teamSize) {
        try {
          const response = await api.post("/startups/startup-team-size-detail", userData)
          if (response.data.success) {
            toast.success(response.data.message)
            return setUserData([])
          }
        }
        catch (err) {
          toast.error(err.response.data.message)
          console.log("err", err);
        }
      }
      else {
        toast.error("Please fill all detail first")
      }
    }
    // }
  }

  useEffect(() => {
    const getTeamSizeFunction = async () => {
      try {
        const response = await api.get("/startups/get-startup-team-size-data")
        if (response.data.success) {
          setTeamData(response.data.teamSizeDetails)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    getTeamSizeFunction()
  }, [])

  return (teamSize &&
    <div>
      {teamData?.teamSizeDetails && teamData?.teamSizeDetails.map((singleTeamData, i) => <div className='mt-3 fouder-detail-css p-3'>
        <div className='delete-founder-button-css'>
          <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Team Name :</div>
            <div>
              <p>{singleTeamData.teamName}</p>
              {/* <input className='p-2 startname-input-general' type="text" name="teamName" value={singleTeamData.teamName} onChange={(e) => handleInput(e, i)} /> */}
            </div>
          </div>
        </div>
        <div className='startup-general-body'>
          <div className='startup-general-startup-name-div py-3'>
            <div className='py-2'>Team Size :</div>
            <div>
              <p>{singleTeamData.teamSize}</p>
              {/* <input className='p-2 startname-input-general' type="number" name="teamSize" value={val.teamSize} onChange={(e) => handleInput(e, i)} /> */}
            </div>
          </div>
        </div>
      </div>
      )}
      <form onSubmit={formSubmit}>
        {userData && userData.map((val, i) => {
          return (
            <div className='mt-3 fouder-detail-css p-3'>
              <div className='delete-founder-button-css'>
                <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Team Name :</div>
                  <div>
                    <input className='p-2 startname-input-general' type="text" name="teamName" value={val.teamName} onChange={(e) => handleInput(e, i)} />
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Team Size :</div>
                  <div>
                    <input className='p-2 startname-input-general' type="number" name="teamSize" value={val.teamSize} onChange={(e) => handleInput(e, i)} />
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
        <div className='add-founder-button-css'>
          <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Team Size</button>
        </div>
        {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
      </form>
    </div>
  )
}

export default TeamSize