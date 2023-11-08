import React, { useContext, useState } from 'react'
import { DocumentDashboardContext } from '../../../../context/DocumentDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'

const FinancialProjection = () => {

    const { financialProjection } = useContext(DocumentDashboardContext)
    const [isSaveButton, setIsSaveButton] = useState(false);
    const [userData, setUserData] = useState([{ docName: "", docDescription: "", docFile: null }])

    const addFormButton = () => {
        if (!isSaveButton) {
            setIsSaveButton(true)
        }
        setUserData([...userData, { docName: "", docDescription: "", docFile: null }])
    }

    const handleInput = (e, i) => {
        const { name, value, type, files } = e.target
        const newFormData = [...userData]
        if (type === 'file') {
            newFormData[i] = { ...newFormData[i], [name]: files[0] };
        } else {
            newFormData[i] = { ...newFormData[i], [name]: value };
        }
        setUserData(newFormData)
    }

    const handleDelete = (i) => {
        const deleteValue = [...userData]
        deleteValue.splice(i, 1)
        setUserData(deleteValue)
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        userData.forEach((data, index) => {
            formData.append('docName', data.docName);
            formData.append('docDescription', data.docDescription);
            formData.append('docFile', data.docFile);
        });
        try {
            if (formData) {
                try {
                    const response = await api.post("/startups/startup-final-projection-doc", formData)
                    if (response.data.success) {
                        toast.success(response.data.message)
                        return setUserData([])
                    }
                }
                catch (err) {
                    toast.error(err.response.data.message)
                }
            }
        }
        catch (err) {
            toast.error("Please fill the detail first...")
            console.log(err);
        }
    };

    return (financialProjection &&
        <div>
            <form onSubmit={formSubmit}>
                {userData && userData.map((val, i) => {
                    return (
                        <div className='pitch-deck-body-css p-3'>
                            <div className='delete-founder-button-css'>
                                <button type='button' onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="text" placeholder='Document Name' name="docName" value={val.docName} onChange={(e) => handleInput(e, i)} />
                                    </div>
                                </div>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="text" placeholder='Document Description' name="docDescription" value={val.docDescription} onChange={(e) => handleInput(e, i)} />
                                    </div>
                                </div>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="file" name="docFile" onChange={(e) => handleInput(e, i)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                <div className='add-founder-button-css'>
                    <button type='button' className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+ Add Document</button>
                </div>
                <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
                {/* {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>} */}
            </form>
        </div>
    )
}

export default FinancialProjection
