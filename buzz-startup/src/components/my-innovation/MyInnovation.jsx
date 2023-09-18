import React, { useState } from 'react'
import './MyInnovation.css'
import IstockImage from './../../images/MyInnovation.jpeg'
import searchIcon from './../../images/search-interface-symbol.png'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const MyInnovation = () => {

    const [isSolution, setSolution] = useState(false)
    const router = useNavigate()

    return (
        <div className='my-innovation-body'>
            <h2 className='text-center customfW'>Unleash Your Startup
                Superpower with Buzz AI </h2>
            <h5 className='text-center'>AI-Powered Startup Ideas and Tools to Fuel Your Entrepreneurial Journey</h5>
            <div class="d-grid gap-2 col-2 mx-auto">
                <button class="road-map-button mb-2" type="button">Get Started</button>
            </div>
            <div className='my-innovation-image-div'>
                <img src={IstockImage} alt="" />
            </div>
            <h2 className='text-center mt-2 customfW'>Explore 100000+ ideas</h2>

            <div className='my-innovation-searchbar-div py-1'>
                <input type="text" placeholder='Suggest a startup idea that uses AI to improve health and wellness.' />
                <img src={searchIcon} alt="" onClick={() => setSolution(true)} />
            </div>

            {!isSolution && <div className='my-innovation-suggestion-div mb-3'>
                <h4 className='text-center'>Try out these example searches</h4>
                <div className='my-innovation-suggestion-div-inside'>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Find a startup idea about utilizing blockchain for improving supply chain transparency."</p></div>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Suggest a startup idea that uses AI for enhancing customer service in e-commerce."</p></div>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Find a startup idea that revolves around virtual reality in the education sector."</p></div>
                </div>
            </div>}

            {isSolution && <div className='my-innovation-solution-div p-2'>
                <h4 className='common-font-weight'>AI-Powered Wellness Platform</h4>
                <p>
                    <Typewriter
                        words={['One common frustration in the wellness industry is the difficulty in finding personalized and effective health solutions that fit into busy lifestyles. A startup business idea could be to create an AI-powered wellness platform that uses machine learning algorithms to analyze individual health data and provide targeted recommendations for diet, exercise, and mental health practices. The platform could also offer personalized coaching, community support, and gamification features to increase engagement and motivation. According to a report by Grand View Research, the global digital health market size is expected to reach $509.2 billion by 2025, with a compound annual growth rate of 27.7%.']}
                        loop={1}
                        typeSpeed={40}
                        delaySpeed={2000}
                    />
                </p>
                <div className='border-bottom'></div>
                <h4 className='common-font-weight'>Follow up questions</h4>
                <div className='follow-question-div'>
                    <p>Competition: Who are the potential competitors, and how does the startup idea stand out against them?</p>
                    <p><FontAwesomeIcon className='svg-font-size' icon={faMagnifyingGlass} /></p>
                </div>
                <div className='border-bottom'></div>
                <div className='follow-question-div pt-1'>
                    <p>Growth Potential: What might be the size of the target market? What strategies could be employed to scale and
                        capture a significant share of this market?</p>
                    <p><FontAwesomeIcon className='svg-font-size' icon={faMagnifyingGlass} /></p>
                </div>
                <div className='border-bottom'></div>
                <div className='follow-question-div pt-1'>
                    <p>Future Vision: Where might this startup be in 5 years?</p>
                    <p><FontAwesomeIcon className='svg-font-size' icon={faMagnifyingGlass} /></p>
                </div>
                <div className='border-bottom'></div>
                <div class="d-grid gap-2 col-2 mx-auto">
                    <button class="road-map-button mb-2 mt-2" type="button" onClick={()=>router("/full-report")}>Get Full Report</button>
                </div>

            </div>}

            <div className='my-innovation-step-div mb-4'>
                <h2 className='text-center mt-2 py-2 customfW'>Getting Started</h2>
                <div className='innovation-three-step-div'>
                    <div className='px-2 pt-2'>
                        <div className=' text-center'>
                            <p className='my-innovation-step-circle-div mx-auto text-center mb-0'>1</p>
                        </div>
                        <h5 className='text-center'>Ideas & solutions</h5>
                        <p className='text-center'>Generate endless startup ideas and solutions to kickstart your next business venture.</p>
                    </div>

                    <div className='px-2 pt-2'>
                        <div>
                            <p className='my-innovation-step-circle-div mx-auto text-center mb-0'>2</p>
                        </div>
                        <h5 className='text-center'>Reports</h5>
                        <p className='text-center'>Generate detailed reports including branding, requirements, market research, and more!</p>
                    </div>

                    <div className='px-2 pt-2'>
                        <div>
                            <p className='my-innovation-step-circle-div mx-auto text-center mb-0'>3</p>
                        </div>
                        <h5 className='text-center'>Search 60,000+ ideas</h5>
                        <p className='text-center'>Search the growing database of startup ideas instantly. Hundreds added daily!</p>
                    </div>
                </div>
            </div>

            <div className='email-subscribe-main-div py-3 '>
                <div>
                    <h3 className='mb-0 text-center'>Stay tuned with our Newsletter.</h3>
                </div>
                <div>
                    <input type="text" className='email-input-common px-3 py-2' placeholder='Email Address' />
                    <button className='subscribe-button-css px-3 py-2'>Subscribe To BuzzNetWork &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default MyInnovation