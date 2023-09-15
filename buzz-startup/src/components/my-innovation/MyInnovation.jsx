import React from 'react'
import './MyInnovation.css'
import IstockImage from './../../images/istockphoto-1385970223-612x612.jpg'
import searchIcon from './../../images/search-interface-symbol.png'

const MyInnovation = () => {
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
                <img src={searchIcon} alt="" />
            </div>

            <div className='my-innovation-suggestion-div mb-3'>
                <h4 className='text-center'>Try out these example searches</h4>
                <div className='my-innovation-suggestion-div-inside'>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Find a startup idea about utilizing blockchain for improving supply chain transparency."</p></div>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Suggest a startup idea that uses AI for enhancing customer service in e-commerce."</p></div>
                    <div className='pt-3 px-3 border-end text-center'><p className='mb-0'>"Find a startup idea that revolves around virtual reality in the education sector."</p></div>
                </div>
            </div>

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