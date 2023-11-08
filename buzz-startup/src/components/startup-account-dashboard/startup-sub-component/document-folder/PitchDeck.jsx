import React, { useContext, useState } from 'react'
import { DocumentDashboardContext } from '../../../../context/DocumentDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './PitchDeck.css'
import api from '../../../apiConfig'
import toast from 'react-hot-toast'

const PitchDeck = () => {

    const { pitchDeck } = useContext(DocumentDashboardContext)
    const [isSaveButton, setIsSaveButton] = useState(false);
    const [pitchData, setPitchData] = useState([{ pitchName: "", pitchDescription: "", pitchFile: null }])

    const addFormButton = () => {
        if (!isSaveButton) {
            setIsSaveButton(true)
        }
        setPitchData([...pitchData, { pitchName: "", pitchDescription: "", pitchFile: null }])
    }

    const handleInput = (e, i) => {
        const { name, value, type, files } = e.target
        const newFormData = [...pitchData]
        if (type === 'file') {
            newFormData[i] = { ...newFormData[i], [name]: files[0] };
        } else {
            newFormData[i] = { ...newFormData[i], [name]: value };
        }
        setPitchData(newFormData)
    }

    const handleDelete = (i) => {
        const deleteValue = [...pitchData]
        deleteValue.splice(i, 1)
        setPitchData(deleteValue)
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        pitchData.forEach((data, index) => {
            formData.append('pitchName', data.pitchName);
            formData.append('pitchDescription', data.pitchDescription);
            formData.append('pitchFile', data.pitchFile);
        });
        try {
            if (formData) {
                try {
                    const response = await api.post("/startups/startup-pitch-deck-document", formData)
                    if (response.data.success) {
                        toast.success(response.data.message)
                        return setPitchData([])
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

    return (pitchDeck &&
        <div>
            <form onSubmit={formSubmit}>
                {pitchData && pitchData.map((val, i) => {
                    return (
                        <div className='pitch-deck-body-css p-3'>
                            <div className='delete-founder-button-css'>
                                <button type='button' onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="text" placeholder='Document Name' name="pitchName" value={val.pitchName} onChange={(e) => handleInput(e, i)} />
                                    </div>
                                </div>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="text" placeholder='Document Description' name="pitchDescription" value={val.pitchDescription} onChange={(e) => handleInput(e, i)} />
                                    </div>
                                </div>
                            </div>
                            <div className='startup-pitch-deck-input-div'>
                                <div className='pitch-deck-input-div-inside py-3'>
                                    <div>
                                        <input className='p-2 pitch-deck-input' type="file" name='pitchFile' onChange={(e) => handleInput(e, i)} />
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
                {/* {isSaveButton && <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>} */}
                <button type='submit' className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>
            </form>
        </div>
    )
}

export default PitchDeck
