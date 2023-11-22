import React, { useState } from 'react'
import StartupFirstForm from '../startupFirstForm/StartupFirstForm';
import StartupSecondForm from '../startupSecondForm/StartupSecondForm';
import StartupThirdForm from '../startupThirdForm/StartupThirdForm';
import './StartupMainForm.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../../apiConfig';

const StartupMainForm = () => {

    const [page, setPage] = useState(0);
    const router = useNavigate();
    const [formData, setFormData] = useState({
        StartupName: "",
        StartupEmail: "",
        StartupDate: "",
        StartupWebsiteUrl: "",
        StartupHeadQuarter: "",
        StartupState: "",
        StartupCity: "",
        StartupPincode: "",
        StartupStage: "default",
        StartupBusinessType: "default",
        StartupMultipleSector: "default",
        StartupRound: "default",
        StartupPreviousInvestment: "",
        StartupKnowAboutUs: "default",
        StartupTermsAndCondition: false,
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



    const FormSubmit = async (event) => {
        event.preventDefault();
        if (page === FormTitles.length - 1) {
            if (formData.StartupName && formData.StartupEmail && formData.StartupDate && formData.StartupWebsiteUrl && formData.StartupHeadQuarter
                && formData.StartupState && formData.StartupCity && formData.StartupPincode && formData.StartupStage
                && formData.StartupBusinessType && formData.StartupMultipleSector && formData.StartupRound && formData.StartupPreviousInvestment
                && formData.StartupKnowAboutUs && formData.StartupTermsAndCondition) {
                const token = JSON.parse(localStorage.getItem("token"));
                try {
                    const response = await api.post("/startups/startup-fill-basic-details", { formData, token })
                    if (response.data.success) {
                        toast.success(response.data.message);
                        router("/overview-profile")
                        setFormData({
                            StartupName: "",
                            StartupEmail: "",
                            StartupDate: "",
                            StartupWebsiteUrl: "",
                            StartupHeadQuarter: "",
                            StartupState: "",
                            StartupCity: "",
                            StartupPincode: "",
                            StartupStage: "",
                            StartupBusinessType: "",
                            StartupMultipleSector: "",
                            StartupRound: "",
                            StartupPreviousInvestment: "",
                            StartupKnowAboutUs: "",
                            StartupTermsAndCondition: false,
                        })
                    }
                    // alert("FORM SUBMITTED");
                } catch (error) {
                    toast.error(error.response.data.message)
                }
            }
            else {
                toast.error("All fields are mandatory")
            }
        }
        else {
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
