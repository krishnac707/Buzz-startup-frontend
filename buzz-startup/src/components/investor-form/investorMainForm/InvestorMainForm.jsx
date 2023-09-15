import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InvestorFirstForm from '../investorFirstForm/InvestorFirstForm';
import InvestorSecondForm from '../investorSecondForm/InvestorSecondForm';
import InvestorThirdForm from '../investorThirdForm/InvestorThirdForm';

const InvestorMainForm = () => {

    const [page, setPage] = useState(0);
    const router = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "",
        phoneNo:"",
        linkedinUrl:"",
        country:"",
        youAreAn:"",
        organization:"",
        designation:"",
        websiteUrl: "",
        startUpInvest:"",
        investorInterest:"",
        investorAmount:"",
        state: "",
        city: "",
        pincode: "",
        knowAboutUs: "",
        agreePolicy: "",
    });
    const FormTitles = ["Create Your Investor Profile", "Let us know you better", "Create Your Investor Profile"];

    const PageDisplay = () => {
        if (page === 0) {
            return <InvestorFirstForm formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <InvestorSecondForm formData={formData} setFormData={setFormData} />;
        } else {
            return <InvestorThirdForm formData={formData} setFormData={setFormData} />;
        }
    };

    const FormSubmit = () => {
        if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            router("/investor/home")
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

export default InvestorMainForm