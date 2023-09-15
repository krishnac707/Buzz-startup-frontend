import React, { useContext } from 'react'
import { InvesterAccountDashboardContext } from '../../../../context/InvestorAccountDashboard.context'
import { Nav } from 'react-bootstrap'
import AadharCardComponent from './AadharCardComponent'
import PassportComponent from './PassportComponent'
import PancardComponent from './PancardComponent'
import { KycFormDashboardContext } from '../../../../context/KycFormDashboard.context'

const KycDocument = () => {

  const { kycDocumentInside } = useContext(InvesterAccountDashboardContext)
  const {setAadharcard,setPassport,setPancard} = useContext(KycFormDashboardContext)

  const AdharFunction = () => {
    setAadharcard(true);
    setPassport(false);
    setPancard(false)
  }

  const PassportFunction = () =>{
    setAadharcard(false);
    setPassport(true);
    setPancard(false)
  }

  const PancardFunction = () => {
    setAadharcard(false);
    setPassport(false);
    setPancard(true)
  }


  return kycDocumentInside &&
    <div>
      <Nav className='border-bottom-navbar-css' defaultActiveKey="link-1">
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={AdharFunction} eventKey="link-1">Aadhar Card</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={PassportFunction} eventKey="link-2">Passport Card</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={PancardFunction} eventKey="link-3">Pan Card</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <AadharCardComponent />
        <PassportComponent />
        <PancardComponent />
      </div>
    </div>

}

export default KycDocument
