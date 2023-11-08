import React, { useContext, useState } from 'react'
import "./Team.css";
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../../../apiConfig';
import toast from 'react-hot-toast';

const FounderDetail = () => {
  const { founderDetail } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  console.log(userData, "12");

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { name: "", dateOfBirth: "", emailId: "", linkedinUrl: "", currentCity: "", experience: "", education: "", phoneNo: "" }])

  }

  const handleInput = (e, i) => {
    const { name, value } = e.target;
    const onChangeValue = [...userData]
    // if (name === 'phoneNo') {
    //   const phoneNumberPattern = /^[6-9]\d{9}$/;
    //   if (phoneNumberPattern.test(value)) {
    //     onChangeValue[i][name] = value;
    //     onChangeValue[i].isValidPhoneNumber = true;
    //   } else {
    //     toast.error("please enter valid phone number")
    //   }
    // } else {
    onChangeValue[i][name] = value;
    // }
    setUserData(onChangeValue)
  }

  const handleDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].name || userData[i].dateOfBirth || userData[i].emailId || userData[i].linkedinUrl || userData[i].currentCity || userData[i].experience || userData[i].education || userData[i].phoneNo) {
        try {
          const response = await api.post("/startups/add-startup-team-data", userData)
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
  }

  return (founderDetail &&
    <div>
      <form onSubmit={formSubmit}>
        {userData && userData.map((val, i) => {
          return (
            <div className='mt-3 fouder-detail-css p-3'>
              <div className='delete-founder-button-css'>
                <button type='button' onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
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
                    <input className='p-2 startname-input-general' type="text" name="experience" value={val.experience} onChange={(e) => handleInput(e, i)} placeholder='e.g 2 years' />
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
                    <input className='p-2 startname-input-general' type="number" name="phoneNo" value={val.phoneNo} onChange={(e) => handleInput(e, i)} />
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
        <div className='add-founder-button-css'>
          <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Founder details</button>
        </div>
        {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
      </form>
    </div>
  )
}

export default FounderDetail