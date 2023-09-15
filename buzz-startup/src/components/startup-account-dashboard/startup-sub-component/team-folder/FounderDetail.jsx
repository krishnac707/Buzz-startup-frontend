import React, { useContext, useState } from 'react'
import "./Team.css";
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const FounderDetail = () => {
  const { founderDetail } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { name: "", dateOfBirth: "", emailId: "", linkedinUrl: "", currentCity: "", experience: "", education: "", phoneNo: "" }])
  }

  // console.log(userData,"hello");

  const handleInput = (e, i) => {
    const { name, value } = e.target
    const onChangeValue = [...userData]
    onChangeValue[i][name] = value
    // console.log(onChangeValue[i][name],"25");
    setUserData(onChangeValue)
  }

  const handleDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  return (founderDetail &&
    <div>
      {userData && userData.map((val, i) => {
        return (
          <div className='mt-3 fouder-detail-css p-3'>
            <div className='delete-founder-button-css'>
              <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Name :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="name" value={val.name} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Date of Birth :</div>
                <div>
                  <input className='p-2 startname-input-general' type="date" name="dateOfBirth" value={val.dateOfBirth} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Email Id :</div>
                <div>
                  <input className='p-2 startname-input-general' type="email" name="emailId" value={val.emailId} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>LinkedinUrl :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="linkedinUrl" value={val.linkedinUrl} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Current city :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="currentCity" value={val.currentCity} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Experience :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="experience" value={val.experience} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Education :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="education" value={val.education} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
            <div className='startup-general-body'>
              <div className='startup-general-startup-name-div py-3'>
                <div className='py-2'>Phone NO :</div>
                <div>
                  <input className='p-2 startname-input-general' type="text" name="phoneNo" value={val.phoneNo} onChange={(e) => handleInput(e, i)} />
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
      <div className='add-founder-button-css'>
        <button className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Founder details</button>
      </div>
      {isSaveButton && <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
    </div>
  )
}

export default FounderDetail