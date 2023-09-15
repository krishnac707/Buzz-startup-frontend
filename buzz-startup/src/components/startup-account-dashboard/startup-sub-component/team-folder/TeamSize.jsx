import React, { useContext, useState } from 'react'
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const TeamSize = () => {
  const { teamSize } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { teamCount: "" }])
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

  return (teamSize &&
    <div>
      {userData && userData.map((val, i) => {
        return (
          <div className='mt-3 fouder-detail-css p-3'>
            <div className='delete-founder-button-css'>
              <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Team Size :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="teamCount" value={val.teamCount} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
      <div className='add-founder-button-css'>
        <button className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Team Size</button>
      </div>
      {isSaveButton && <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
    </div>
  )
}

export default TeamSize