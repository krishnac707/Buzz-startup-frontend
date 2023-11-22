import React from 'react'
import { HashLoader } from 'react-spinners';
import './Loader.css'

const Loader = ({ loading }) => {
    return (
        <div className="loader-container">
            <HashLoader color="#000000" loading={loading} size={100} />
        </div>
    )
}

export default Loader