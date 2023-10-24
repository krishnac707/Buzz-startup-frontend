import React, { useContext, useEffect, useState } from 'react'
import './MyInnovation.css'
import IstockImage from './../../images/MyInnovation.jpeg'
import searchIcon from './../../images/search-interface-symbol.png'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../apiConfig'
import { AuthContext } from '../../context/Auth.context'
import { MagnifyingGlass } from 'react-loader-spinner'


const MyInnovation = () => {

    const [isSolution, setSolution] = useState(false)
    const router = useNavigate()
    const [InvestorFormDetail, setInvestorFormDetail] = useState({});
    const { state, dispatch } = useContext(AuthContext);
    const [prompt, setPrompt] = useState();
    const [promptData, setPromptData] = useState();
    const [latestArray, setLatestArray] = useState();

    useEffect(() => {
        const stringArray = promptData?.data.split('== ');
        setLatestArray(stringArray)
    }, [promptData?.data])

    // useEffect(() => {
    //     const InvestorDetailFunction = async () => {
    //         if (state?.user?.Email) {
    //             if (state?.user?.Role == "Investor") {
    //                 const token = JSON.parse(localStorage.getItem("token"));
    //                 if (token) {
    //                     try {
    //                         const response = await api.post("/investors/investor-basic-detail", { token })
    //                         if (response.data.success) {
    //                             setInvestorFormDetail(response.data.InvestorDetail)
    //                         }
    //                     }
    //                     catch (error) {
    //                         console.log(error);
    //                     }
    //                 }
    //             }
    //             else {
    //                 toast.error("You are Not a Investor User");
    //             }
    //         }
    //     }
    //     InvestorDetailFunction()
    // }, [])

    const searchChat = async () => {
        setLatestArray("")
        if (prompt) {
            setSolution(true)
            try {
                const token = JSON.parse(localStorage.getItem("token"))
                if (token) {
                    const response = await api.post("/buzz-startup-ai/buzzstartups-chat-report", { token, prompt })
                    if (response.data.success) {
                        setPromptData(response.data.promptData)
                    }
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            toast.error("Please Type something first and then click on search")
        }
    }

    return (
        <div className='my-innovation-body'>
            <h2 className='text-center customfW'>Unleash Your Startup
                Superpower with Buzz AI </h2>
            <h5 className='text-center'>AI-Powered Startup Ideas and Tools to Fuel Your Entrepreneurial Journey</h5>
            <div className="d-grid gap-2 col-2 mx-auto get-start-button-mobile-css">
                <button className="road-map-button mb-2" type="button">Get Started</button>
            </div>
            {/* <div className='my-innovation-image-div'>
                <img src={IstockImage} alt="" />
            </div> */}
            <h2 className='text-center mt-2 customfW'>Explore 100000+ ideas</h2>

            <div className='my-innovation-searchbar-div py-1'>
                <input type="text" value={prompt} placeholder='Suggest a startup idea that uses AI to improve health and wellness.' onChange={(e) => setPrompt(e.target.value)} />
                <img src={searchIcon} alt="" onClick={searchChat} />
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
                    {latestArray ?
                        <Typewriter
                            words={latestArray}
                            loop={1}
                            typeSpeed={40}
                            delaySpeed={2000}
                        />
                        : <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="MagnifyingGlass-loading"
                            wrapperStyle={{}}
                            wrapperClass="MagnifyingGlass-wrapper"
                            glassColor='#c0efff'
                            color='#e15b64'
                        />}

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
                <div className="d-grid gap-2 col-2 mx-auto mobile-full-report-width-div">
                    <button className="road-map-button mb-2 mt-2 " type="button" onClick={() => router("/full-report")}>Get Full Report</button>
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
                    <input type="text" className='email-input-common' placeholder='Email Address' />
                    <button className='subscribe-button-css '>Subscribe To BuzzNetWork &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default MyInnovation