import React, { useEffect, useState } from 'react'
import './SingleInterestStartupDetail.css'
import { useParams } from 'react-router-dom';
import api from '../../apiConfig';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SingleInterestStartupDetail = () => {

    const { id } = useParams();
    const [singleStartupDetail, setSingleStartupDetial] = useState();

    useEffect(() => {
        const getStartupDetails = async () => {
            try {
                const response = await api.post("/investors/get-single-interested-startup-detail", { startupId: id })
                if (response.data.success) {
                    setSingleStartupDetial(response.data.result)
                }
            }
            catch (err) {
                toast.error(err.response.data.message)
            }
        }
        getStartupDetails()
    }, [])

    const handleDelete = () => {

    }

    return (
        <div className='interest-single-startup-main-div d-flex justify-content-center'>
            {singleStartupDetail && <div className='mt-3 fouder-detail-css test-width p-3'>
                <div className='delete-founder-button-css'>
                    <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Team Name :</div>
                        <div>
                            <p>{singleStartupDetail.startupName}</p>
                            {/* <input className='p-2 startname-input-general' type="text" name="teamName" value={singleStartupDetail.teamName} onChange={(e) => handleInput(e, i)} /> */}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Team Size :</div>
                        <div>
                            <p>{singleStartupDetail.startupTagline}</p>
                            {/* <input className='p-2 startname-input-general' type="number" name="teamSize" value={val.teamSize} onChange={(e) => handleInput(e, i)} /> */}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleInterestStartupDetail