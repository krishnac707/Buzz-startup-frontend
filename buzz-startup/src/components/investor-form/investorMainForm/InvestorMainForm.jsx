import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InvestorFirstForm from '../investorFirstForm/InvestorFirstForm';
import InvestorSecondForm from '../investorSecondForm/InvestorSecondForm';
import InvestorThirdForm from '../investorThirdForm/InvestorThirdForm';
import toast from 'react-hot-toast';
import api from '../../apiConfig';

const InvestorMainForm = () => {

    const [page, setPage] = useState(0);
    const router = useNavigate();
    const [formData, setFormData] = useState({
        InvestorName: "",
        InvestorEmail: "",
        InvestorNumber: "",
        InvestorLinkdinUrl: "",
        InvestorCountry: "",
        InvestorCity: "",
        InvestorPincode: "",
        InvestorBusinessType: "",
        InvestorOrganizationName: "",
        InvestorDesignation: "",
        InvestorWebsiteUrl: "",
        InvestorInvestedStartup: "",
        InvestorInterestedSector: "",
        InvestorInvestingAmount: "",
        InvestorKownAboutUs: "",
        InvestorTermAndCondition: "",
    });
    const FormTitles = ["Create Your Investor Profile", "Let us know you better", "Create Your Investor Profile"];

    console.log(formData,"35");
    const PageDisplay = () => {
        if (page === 0) {
            return <InvestorFirstForm formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <InvestorSecondForm formData={formData} setFormData={setFormData} />;
        } else {
            return <InvestorThirdForm formData={formData} setFormData={setFormData} />;
        }
    };

    const FormSubmit = async (event) => {
        event.preventDefault();
        if (page === FormTitles.length - 1) {
            if (formData.InvestorName && formData.InvestorEmail && formData.InvestorNumber && formData.InvestorLinkdinUrl
                && formData.InvestorCountry && formData.InvestorCity && formData.InvestorPincode && formData.InvestorBusinessType
                && formData.InvestorOrganizationName && formData.InvestorDesignation && formData.InvestorWebsiteUrl && formData.InvestorInvestedStartup
                && formData.InvestorInterestedSector && formData.InvestorInvestingAmount && formData.InvestorKownAboutUs && formData.InvestorTermAndCondition) {
                const token = JSON.parse(localStorage.getItem("token"));
                try {
                    const response = await api.post("/investors/investor-fill-basic-detail", { formData, token })
                    if (response.data.success) {
                        toast.success(response.data.message);
                        router("/investor/home")
                        setFormData({
                            InvestorName: "",
                            InvestorEmail: "",
                            InvestorNumber: "",
                            InvestorLinkdinUrl: "",
                            InvestorCountry: "default",
                            InvestorCity: "",
                            InvestorPincode: "",
                            InvestorBusinessType: "default",
                            InvestorOrganizationName: "",
                            InvestorDesignation: "",
                            InvestorWebsiteUrl: "",
                            InvestorInvestedStartup: "",
                            InvestorInterestedSector: "default",
                            InvestorInvestingAmount: "default",
                            InvestorKownAboutUs: "default",
                            InvestorTermAndCondition: false,
                        })
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                }
            }
            else {
                toast.error("All fields are mandatory")
            }
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