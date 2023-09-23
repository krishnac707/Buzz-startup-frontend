import React, { useContext } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'
import { Nav } from 'react-bootstrap'
import { BasicFormDashboardContext } from '../../../context/BasicFormDashboard.context'
import General from './basic-subfolder/General'
import BasicLogo from './basic-subfolder/BasicLogo'
import BasicBanner from './basic-subfolder/BasicBanner'
import "./basic-subfolder/Basic.css"

const Basic = () => {
    const { basicStartup } = useContext(StartupDashboardContext)
    const {setGeneral,setLogo,setBanner} = useContext(BasicFormDashboardContext)

    const generalFunction = () => {
        setGeneral(true);
        setLogo(false);
        setBanner(false);
    }

    const logoFunction = () => {
        setGeneral(false);
        setLogo(true);
        setBanner(false);
    }

    const bannerFunction = () => {
        setGeneral(false);
        setLogo(false);
        setBanner(true);
    }


    return basicStartup &&
        <div>
            <Nav className='border-bottom-navbar-css horizontal-scrollable' defaultActiveKey="link-1">
                <Nav.Item >
                    <Nav.Link className='background-color-startup-navbar' onClick={generalFunction} eventKey="link-1">Basic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='background-color-startup-navbar' onClick={logoFunction} eventKey="link-2">Pitch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='background-color-startup-navbar' onClick={bannerFunction} eventKey="link-3">Funding</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <General />
                <BasicLogo />
                <BasicBanner />
            </div>
        </div>
}

export default Basic
