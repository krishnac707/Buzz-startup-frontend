import React, { useContext, useState } from 'react'
import { DocumentDashboardContext } from '../../../../context/DocumentDashboard.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './PitchDeck.css'

const PitchDeck = () => {

    const { pitchDeck } = useContext(DocumentDashboardContext)
    const [isSaveButton, setIsSaveButton] = useState(false);
    const [userData, setUserData] = useState([])

    const addFormButton = () => {
        if (!isSaveButton) {
            setIsSaveButton(true)
        }
        setUserData([...userData, { documentName: "", documentDetail: "",documentFile:"" }])
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

    return (pitchDeck &&
        <div>
            {userData && userData.map((val, i) => {
                return (
                    <div className='pitch-deck-body-css p-3'>
                        <div className='delete-founder-button-css'>
                            <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className='startup-pitch-deck-input-div'>
                            <div className='pitch-deck-input-div-inside py-3'>
                                <div>
                                    <input className='p-2 pitch-deck-input' type="text" placeholder='Document Name' name="documentName" value={val.documentName} onChange={(e) => handleInput(e, i)} />
                                </div>
                            </div>
                        </div>
                        <div className='startup-pitch-deck-input-div'>
                            <div className='pitch-deck-input-div-inside py-3'>
                                <div>
                                    <input className='p-2 pitch-deck-input' type="text" placeholder='Document Description' name="documentDetail" value={val.documentDetail} onChange={(e) => handleInput(e, i)} />
                                </div>
                            </div>
                        </div>
                        <div className='startup-pitch-deck-input-div'>
                            <div className='pitch-deck-input-div-inside py-3'>
                                <div>
                                    <input className='p-2 pitch-deck-input' type="file"  name="documentFile" value={val.documentFile} onChange={(e) => handleInput(e, i)} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
            <div className='add-founder-button-css'>
                <button className='startup-team-add-button text-center py-2 my-3' onClick={addFormButton}>+ Add Document</button>
            </div>
            {isSaveButton && <button className='startup-basic-general-save-button text-center py-1 my-3'>Save</button>}
        </div>
    )
}

export default PitchDeck
