import React, { useContext } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'
import { Nav } from 'react-bootstrap'
import PitchDeck from './document-folder/PitchDeck'
import FinancialProjection from './document-folder/FinancialProjection'
import { DocumentDashboardContext } from '../../../context/DocumentDashboard.context'

const Documents = () => {
  const { documentStartup } = useContext(StartupDashboardContext)
  const {setPitchDeck,setFinancialProjection} = useContext(DocumentDashboardContext)

  const pitchDeckFunction = () => {
    setPitchDeck(true);
    setFinancialProjection(false);
  }
  
  const financialProjectionFunction = () => {
    setPitchDeck(false);
    setFinancialProjection(true);
  }

  return (documentStartup &&
    <div >
      <Nav className='border-bottom-navbar-css horizontal-scrollable' defaultActiveKey="link-1">
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={pitchDeckFunction} eventKey="link-1">Pitch Deck</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={financialProjectionFunction} eventKey="link-2">Financial Projection</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <PitchDeck />
        <FinancialProjection />
      </div>
    </div>
  )
}

export default Documents
