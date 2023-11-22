import React, { useContext, useEffect, useState } from 'react'
import "./Team.css";
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../../loader-component/Loader';

const FounderDetail = () => {
  const { founderDetail } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])
  const [startupFounderDetail, setStartupFounderDetail] = useState([])
  const [loading, setLoading] = useState(false);
  // const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const getStartupFounderFunction = async () => {
    setLoading(true);
    try {
      const response = await api.get("/startups/get-startup-team-founder-detail")
      if (response.data.success) {
        setStartupFounderDetail(response.data.founderDetails)
      }
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  }

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

  const handleFormDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  const handleDelete = async (founderId) => {
    setLoading(true);
    try {
      const response = await api.delete(`/startups/remove-startup-founder-detail/${encodeURIComponent(startupFounderDetail?._id)}`, {
        data: { founderId },
      });
      if (response.data.success) {
        toast.success(response.data.message)
        return getStartupFounderFunction();
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.error('Error deleting item:', error);
    }
    finally {
      setLoading(false);
    }
  };

  const formSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].name || userData[i].dateOfBirth || userData[i].emailId || userData[i].linkedinUrl || userData[i].currentCity || userData[i].experience || userData[i].education || userData[i].phoneNo) {
        try {
          const response = await api.post("/startups/add-startup-team-data", userData)
          if (response.data.success) {
            toast.success(response.data.message)
            setUserData([])
            return getStartupFounderFunction()
          }
        }
        catch (err) {
          toast.error(err.response.data.message)
          console.log("err", err);
        }
        finally {
          setLoading(false);
        }
      }
      else {
        toast.error("Please fill all detail first")
      }
    }
  }

  useEffect(() => {
    getStartupFounderFunction()
  }, [])

  return (founderDetail &&
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) :
        (<div>
        {startupFounderDetail?.founderArray && startupFounderDetail?.founderArray.map((founderData, i) => {
          return (
            <div className='mt-3 fouder-detail-css p-3'>
              <div className='delete-founder-button-css'>
                <button type='button' onClick={() => handleDelete(founderData?._id)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Name :</div>
                  <div>
                    <p>{founderData.name}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Date of Birth :</div>
                  <div>
                    <p>{new Date(founderData.dateOfBirth).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Email Id :</div>
                  <div>
                    <p>{founderData.emailId}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>LinkedinUrl :</div>
                  <div>
                    <p>{founderData.linkedinUrl}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Current city :</div>
                  <div>
                    <p>{founderData.currentCity}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Experience :</div>
                  <div>
                    <p>{founderData.experience}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Education :</div>
                  <div>
                    <p>{founderData.education}</p>
                  </div>
                </div>
              </div>
              <div className='startup-general-body'>
                <div className='startup-general-startup-name-div py-3'>
                  <div className='py-2'>Phone NO :</div>
                  <div>
                    <p>{founderData.phoneNo}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
        <form onSubmit={formSubmit}>
          {userData && userData.map((val, i) => {
            return (
              <div className='mt-3 fouder-detail-css p-3'>
                <div className='delete-founder-button-css'>
                  <button type='button' onClick={handleFormDelete}><FontAwesomeIcon icon={faXmark} /></button>
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
      </div>)}
    </div>
  )
}

export default FounderDetail