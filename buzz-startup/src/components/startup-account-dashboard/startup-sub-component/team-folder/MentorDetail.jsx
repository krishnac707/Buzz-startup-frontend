import React, { useContext, useEffect, useState } from 'react'
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import api from '../../../apiConfig'
import Loader from '../../../loader-component/Loader'

const MentorDetail = () => {
  const { advisor } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])
  const [mentorData, setMentorData] = useState([])
  const [loading, setLoading] = useState(false);

  const getMentorDetailFunction = async () => {
    setLoading(true);
    try {
      const response = await api.get("/startups/get-startup-team-advisor-detail")
      if (response.data.success) {
        setMentorData(response.data.advisorDetails)
      }
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMentorDetailFunction()
  }, [])

  const addFormButton = () => {
    if (!isSaveButton) {
      setIsSaveButton(true)
    }
    setUserData([...userData, { name: "", linkedinUrl: "" }])
  }

  const handleInput = (e, i) => {
    const { name, value } = e.target
    const onChangeValue = [...userData]
    onChangeValue[i][name] = value
    setUserData(onChangeValue)
  }

  const formSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].name || userData[i].linkedinUrl) {
        try {
          const response = await api.post("/startups/add-startup-advisor-data", userData)
          if (response.data.success) {
            toast.success(response.data.message)
            setUserData([]);
            return getMentorDetailFunction();
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

  const handleFormDelete = (i) => {
    const deleteValue = [...userData]
    deleteValue.splice(i, 1)
    setUserData(deleteValue)
  }

  const handleDelete = async (startupAdvisorId) => {
    setLoading(true);
    try {
      const response = await api.delete(`/startups/remove-startup-advisor-detail/${encodeURIComponent(mentorData?._id)}`, {
        data: { startupAdvisorId },
      });
      if (response.data.success) {
        toast.success(response.data.message)
        return getMentorDetailFunction();
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.error('Error deleting item:', error);
    }
    finally {
      setLoading(false);
    }
  };

  return (advisor &&
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) :
        (<div>
          {mentorData?.advisorDetails && mentorData?.advisorDetails.map((singleStartupAdvisorDetail, i) => {
            return (
              <div className='mt-3 fouder-detail-css p-3'>
                <div className='delete-founder-button-css'>
                  <button onClick={() => handleDelete(singleStartupAdvisorDetail?._id)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className='startup-general-body'>
                  <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Name :</div>
                    <div>
                      <p>{singleStartupAdvisorDetail.name}</p>
                    </div>
                  </div>
                </div>
                <div className='startup-general-body'>
                  <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Linkedin Url :</div>
                    <div>
                      <p>{singleStartupAdvisorDetail.linkedinUrl}</p>
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
                    <button onClick={handleFormDelete}><FontAwesomeIcon icon={faXmark} /></button>
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
                      <div className='py-2'>Linkedin Url :</div>
                      <div>
                        <input className='p-2 startname-input-general' type="text" name="linkedinUrl" value={val.linkedinUrl} onChange={(e) => handleInput(e, i)} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )}
            <div className='add-founder-button-css'>
              <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Advisor details</button>
            </div>
            {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
          </form>
        </div>)}
    </div>
  )
}

export default MentorDetail
