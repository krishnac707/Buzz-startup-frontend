import React, { useState } from 'react'
import StartupFirstForm from '../startupFirstForm/StartupFirstForm';
import StartupSecondForm from '../startupSecondForm/StartupSecondForm';
import StartupThirdForm from '../startupThirdForm/StartupThirdForm';
import './StartupMainForm.css';
import { useNavigate } from 'react-router-dom';

const StartupMainForm = () => {

    const [page, setPage] = useState(0);
    const router = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        website: "",
        headQuarter: "",
        state: "",
        city: "",
        pincode: "",
        stage: "",
        business: "",
        selectSector: "",
        currentRound: "",
        totalInvestment: "",
        knowAboutUs: "",
        agreePolicy: "",
    });
    const FormTitles = ["Create Your Startup Profile", "Let us know you better", "Create Your Startup Profile"];

    const PageDisplay = () => {
        if (page === 0) {
            return <StartupFirstForm formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <StartupSecondForm formData={formData} setFormData={setFormData} />;
        } else {
            return <StartupThirdForm formData={formData} setFormData={setFormData} />;
        }
    };

    const FormSubmit = () => {
        if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            router("/overview-profile")
            console.log(formData);
        } else {
            setPage((currPage) => currPage + 1);
        }
    }

    return (
        <div className="startup-form-body">
            <div className="startup-inside-body">
                <div className="startup-form-main-header">
                    <h3 className='text-center'>{FormTitles[page]}</h3>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="startup-form-footer">
                    <div>
                        <h4 className='mb-0'>step <span>{page + 1}</span>/3</h4>
                    </div>
                    <div>
                        <button disabled={page == 0} onClick={() => { setPage((currPage) => currPage - 1) }}>
                            Prev
                        </button>
                        <button onClick={FormSubmit}>
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupMainForm
