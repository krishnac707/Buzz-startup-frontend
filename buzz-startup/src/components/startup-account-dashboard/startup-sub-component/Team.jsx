import React, { useContext } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'
import { TeamDashboardContext } from '../../../context/TeamDashboard.context'
import { Nav } from 'react-bootstrap'
import FounderDetail from './team-folder/FounderDetail'
import TeamSize from './team-folder/TeamSize'
import MentorDetails from './team-folder/MentorDetail'
import ExistingInvestor from './team-folder/ExistingInvestor'

const Team = () => {
  const { teamStartup } = useContext(StartupDashboardContext)
  const {setFounderDetail,setTeamSize,setAdvisor,setExistingInvestor} = useContext(TeamDashboardContext);

  const founderDetailFunction = () => {
    setFounderDetail(true);
    setTeamSize(false);
    setAdvisor(false);
    setExistingInvestor(false)
  }

  const teamSizeFunction = () => {
    setFounderDetail(false);
    setTeamSize(true);
    setAdvisor(false);
    setExistingInvestor(false)
  }

  const advisorFunction = () => {
    setFounderDetail(false);
    setTeamSize(false);
    setAdvisor(true);
    setExistingInvestor(false)
  }

  const existInvestorFuncton = () => {
    setFounderDetail(false);
    setTeamSize(false);
    setAdvisor(false);
    setExistingInvestor(true)
  }

  return (teamStartup &&
    <div>
      <Nav className='border-bottom-navbar-css' defaultActiveKey="link-1">
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={founderDetailFunction} eventKey="link-1">Founder Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={teamSizeFunction} eventKey="link-2">Team Size</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={advisorFunction} eventKey="link-3">Advisor/Mentor Details</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={existInvestorFuncton} eventKey="link-4">Existing Investor Details</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <FounderDetail />
        <TeamSize />
        <MentorDetails />
        <ExistingInvestor />
      </div>
    </div>
  )
}

export default Team
