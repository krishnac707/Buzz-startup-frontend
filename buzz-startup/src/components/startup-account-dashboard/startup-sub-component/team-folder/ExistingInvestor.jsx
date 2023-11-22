import React, { useContext, useEffect, useState } from 'react'
import { TeamDashboardContext } from '../../../../context/TeamDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'
import Loader from '../../../loader-component/Loader'

const ExistingInvestor = () => {
  const { existingInvestor } = useContext(TeamDashboardContext)
  const [isSaveButton, setIsSaveButton] = useState(false);
  const [userData, setUserData] = useState([])
  const [existingInvestorData, setExistingInvestorData] = useState([])
  const [loading, setLoading] = useState(false);

  const getExistingInvestorFunction = async () => {
    setLoading(true);
    try {
      const response = await api.get("/startups/get-startup-team-existing-investor-detail")
      if (response.data.success) {
        setExistingInvestorData(response.data.startupExistingInvestorDetails)
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
    getExistingInvestorFunction()
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

          const response = await api.post("/startups/add-startup-existing-investor-data", userData)
          if (response.data.success) {
            toast.success(response.data.message)
            setUserData([]);
            return getExistingInvestorFunction();
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

  const handleDelete = async (startupExistingInvestorId) => {
    setLoading(true);
    try {
      const response = await api.delete(`/startups/remove-startup-interest-investor-detail/${encodeURIComponent(existingInvestorData?._id)}`, {
        data: { startupExistingInvestorId },
      });
      if (response.data.success) {
        toast.success(response.data.message)
        return getExistingInvestorFunction();
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.error('Error deleting item:', error);
    }
    finally {
      setLoading(false);
    }
  };

  return (existingInvestor &&
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) :
        (<div>
          {existingInvestorData?.existingInvestorDetails && existingInvestorData?.existingInvestorDetails.map((singleExistingInvestorData, i) => {
            return (
              <div className='mt-3 fouder-detail-css p-3'>
                <div className='delete-founder-button-css'>
                  <button onClick={() => handleDelete(singleExistingInvestorData?._id)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className='startup-general-body'>
                  <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Name :</div>
                    <div>
                      <p>{singleExistingInvestorData.name}</p>
                    </div>
                  </div>
                </div>
                <div className='startup-general-body'>
                  <div className='startup-general-startup-name-div py-3'>
                    <div className='py-2'>Linkedin Url :</div>
                    <div>
                      <p>{singleExistingInvestorData.linkedinUrl}</p>
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
              <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+Add Investor details</button>
            </div>
            {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
          </form>
        </div>
        )}
    </div>
  )
}

export default ExistingInvestor
