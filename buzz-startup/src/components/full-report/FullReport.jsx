import React, { useContext } from 'react'
import "./FullReport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'
import { FullReportDashboardContext } from '../../context/fullReportDashboard.context'
import BrandingReport from './BrandingReport'
import IndustryInsightsReport from './IndustryInsightsReport'
import MarketResearchComponent from './MarketResearchComponent'
import SwotAnalysisComponent from './SwotAnalysisComponent'
import PestelAnalysisComponent from './PestelAnalysisComponent'
import ProductRequirementComponent from './ProductRequirementComponent'
import PathtoMvpComponent from './PathtoMvpComponent'
import BusinessOnepagerComponent from './BusinessOnepagerComponent'
import MarketPlanerComponent from './MarketPlanerComponent'
import HiringPlanComponent from './HiringPlanComponent'
import GotoStrategyComponent from './GotoStrategyComponent'

const FullReport = () => {
    
    const {setBranding,setIndustryInsight,setMarketResearch,setSwotAnalysis,setPestelAnalysis,setProductRequirement,setPathToMvp,setBusinessOnepager,setMarketPlan,setHiring,setMarketStrategy} = useContext(FullReportDashboardContext)

    const brandingFunction = () =>{
        setBranding(true);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const industryFunction = () => {
        setBranding(false);
        setIndustryInsight(true);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const marketResearchFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(true);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const swotFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(true);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const pestelFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(true);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const productFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(true);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const pathtoFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(true);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const businessoneFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(true);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(false)
    }

    const marketPlanFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(true);
        setHiring(false);
        setMarketStrategy(false)
    }

    const hiringFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(true);
        setMarketStrategy(false)
    }

    const stratefyFunction = () => {
        setBranding(false);
        setIndustryInsight(false);
        setMarketResearch(false);
        setSwotAnalysis(false);
        setPestelAnalysis(false);
        setProductRequirement(false);
        setPathToMvp(false);
        setBusinessOnepager(false);
        setMarketPlan(false);
        setHiring(false);
        setMarketStrategy(true)
    }

    

    return (
        <div className='full-report-body'>
            <div className='startup-report-heading-div'>
                <h2>Startup report <span><FontAwesomeIcon className='mx-3' icon={faFilePdf} /></span></h2>
                <p>Generated 08/28/2023, 05:59:59 PM</p>

                <input type="text" className='search-report-input px-4 py-1' placeholder='Ideas Searched Input' />
            </div>

            <div className='report-menu-main-div mt-4'>
                <Nav className='report-menu-div' variant="pills" defaultActiveKey="link-1">
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>brandingFunction()} eventKey="link-1">Branding</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link  className='report-sub-menu-color common-font-weight py-2' onClick={()=>industryFunction()} eventKey="link-2">Industry Insight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>marketResearchFunction()}  eventKey="link-3">Market Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>swotFunction()}  eventKey="link-4">SWOT Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>pestelFunction()} eventKey="link-5">PESTEL Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>productFunction()} eventKey="link-6">Product Requirement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>pathtoFunction()} eventKey="link-7">Path to MVP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>businessoneFunction()} eventKey="link-8">Business One Pager</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>marketPlanFunction()} eventKey="link-9">Market Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>hiringFunction()} eventKey="link-10">Hiring Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="report-menu-sub-div mb-4">
                        <Nav.Link className='report-sub-menu-color common-font-weight py-2' onClick={()=>stratefyFunction()} eventKey="link-11">Go-To-Market Strategy</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='report-content-div'>
                    <BrandingReport />
                    <IndustryInsightsReport />
                    <MarketResearchComponent />
                    <SwotAnalysisComponent />
                    <PestelAnalysisComponent />
                    <ProductRequirementComponent />
                    <PathtoMvpComponent />
                    <BusinessOnepagerComponent />
                    <MarketPlanerComponent />
                    <HiringPlanComponent />
                    <GotoStrategyComponent />
                </div>
            </div>
        </div>
    )

}

export default FullReport