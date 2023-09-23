import React, { useContext } from 'react'
import { StartupDashboardContext } from '../../../context/StartupDashboard.context'
import { Nav } from 'react-bootstrap'
import Highlights from './pitch-folder/Highlights'
import ProblemStatement from './pitch-folder/ProblemStatement'
import Product from './pitch-folder/Product'
import Solution from './pitch-folder/Solution'
import StartupStory from './pitch-folder/StartupStory'
import Tract from './pitch-folder/Tract'
import { PitchDashboardContext } from '../../../context/PitchDashboard.context'

const Pitch = () => {
  const { pitchStartup } = useContext(StartupDashboardContext)
  const {setHighlights,setStartupStory,setProblemStatement,setSolution,setProductStartup,setTractStartup} = useContext(PitchDashboardContext)
  // const [userData,setUserData] = useState({highlight:""})

  const highlightFunction = () => {
    setHighlights(true);
    setStartupStory(false);
    setProblemStatement(false);
    setSolution(false);
    setProductStartup(false);
    setTractStartup(false);
  }

  const storyFunction = () => {
    setHighlights(false);
    setStartupStory(true);
    setProblemStatement(false);
    setSolution(false);
    setProductStartup(false);
    setTractStartup(false);

  }

  const problemFunction = () => {
    setHighlights(false);
    setStartupStory(false);
    setProblemStatement(true);
    setSolution(false);
    setProductStartup(false);
    setTractStartup(false);

  }
  
  const solutionFuntion = () => {
    setHighlights(false);
    setStartupStory(false);
    setProblemStatement(false);
    setSolution(true);
    setProductStartup(false);
    setTractStartup(false);

  }

  const productFunction = () => {
    setHighlights(false);
    setStartupStory(false);
    setProblemStatement(false);
    setSolution(false);
    setProductStartup(true);
    setTractStartup(false);
  }
  
  const tractFunction = () => {
    setHighlights(false);
    setStartupStory(false);
    setProblemStatement(false);
    setSolution(false);
    setProductStartup(false);
    setTractStartup(true);
  }

  return (pitchStartup &&
    <div>
      <Nav className='border-bottom-navbar-css horizontal-scrollable' defaultActiveKey="link-1">
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={highlightFunction} eventKey="link-1">Highlights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={storyFunction} eventKey="link-2">Startup Story</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={problemFunction} eventKey="link-3">Problem Statement</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className='background-color-startup-navbar' onClick={solutionFuntion} eventKey="link-4">Solution</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={productFunction} eventKey="link-5">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='background-color-startup-navbar' onClick={tractFunction} eventKey="link-6">Tract</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <Highlights />
        <ProblemStatement />
        <Product />
        <Solution />
        <StartupStory />
        <Tract />
      </div>
    </div>
  )
}

export default Pitch
