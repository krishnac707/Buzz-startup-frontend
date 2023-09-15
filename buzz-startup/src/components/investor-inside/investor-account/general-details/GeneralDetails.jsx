import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import GeneralDetailInside from './inside-general-details/GeneralDetailInside'
import ProfilePic from './inside-general-details/ProfilePic'
import AboutMe from './inside-general-details/AboutMe'
import OtherDetails from './inside-general-details/OtherDetails'
import { InvesterAccountDashboardContext } from '../../../../context/InvestorAccountDashboard.context'
import { GeneralDetailDashboardContext } from '../../../../context/GeneralDetailDashboard.context'

const GeneralDetails = () => {

    const {generalDetail} = useContext(InvesterAccountDashboardContext)
    const {setProfilePic,setAboutMe,setGeneralDetailInside,setOtherDetails} = useContext(GeneralDetailDashboardContext)

    const profilePicFunction = () => {
        setProfilePic(true);
        setAboutMe(false);
        setGeneralDetailInside(false);
        setOtherDetails(false);
    }

    const aboutMeFunction = () => {
        setProfilePic(false);
        setAboutMe(true);
        setGeneralDetailInside(false);
        setOtherDetails(false);
    }

    const generalDetailFunction = () => {
        setProfilePic(false);
        setAboutMe(false);
        setGeneralDetailInside(true);
        setOtherDetails(false);
    }

    const otherDetailFunction = () => {
        setProfilePic(false);
        setAboutMe(false);
        setGeneralDetailInside(false);
        setOtherDetails(true);
    }

    return generalDetail &&
        <div>
            <Nav className='border-bottom-navbar-css' defaultActiveKey="link-1">
                <Nav.Item >
                    <Nav.Link className='background-color-startup-navbar' onClick={profilePicFunction} eventKey="link-1">Profile Pic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='background-color-startup-navbar' onClick={aboutMeFunction} eventKey="link-2">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='background-color-startup-navbar' onClick={generalDetailFunction} eventKey="link-3">General Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='background-color-startup-navbar' onClick={otherDetailFunction} eventKey="link-4">Other Details</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <GeneralDetailInside />
                <ProfilePic />
                <AboutMe />
                <OtherDetails />
            </div>
        </div>
    
}

export default GeneralDetails