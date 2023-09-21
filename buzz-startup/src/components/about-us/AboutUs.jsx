import React from 'react'
import './AboutUs.css'
import buzzAboutImage from './../../images/buzzaboutus.jpg'
import buzzAboutImage2 from './../../images/About us.jpeg'
import checkedImage from './../../images/checked (1).png'

const AboutUs = () => {
    return (
        <div className='about-us-body'>
            <div className='about-us-intro-div'>
                <div className='about-us-intro-left-div'>
                    <h2>WHO WE ARE</h2>
                    <h3 className='orange-color'>THE FUTURE OF PRIVATE INVESTING</h3>
                    <p>
                        Our dedication to bridging the gap between proposals and lucrative opportunities
                        sets us apart. Our vision is to foster entrepreneurship in our nation, aiming to
                        be the driving force behind private investments and startups. With an extensive network
                        spanning geographic boundaries, our goal is to establish a vast ecosystem of investors.
                    </p>

                </div>
                <div className='about-us-intro-right-div'>
                    <img src={buzzAboutImage} alt="" />
                </div>
            </div>

            <div className='about-us-stage-main-div mt-5'>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'><span className='orange-color'>Stages- </span>Seed to Pre Series A</p>
                    </div>
                </div>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'><span className='orange-color'>Ticket Size- </span>USD $10K TO $500K</p>
                    </div>
                </div>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'><span className='orange-color'>Investors - </span>India, Singapore, USA, UK & Canada</p>
                    </div>
                </div>

                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'><span className='orange-color'>Network of 1000+ - </span>Investors(Angels/HNIs/Vc’s)</p>
                    </div>
                </div>
            </div>

            <div className='about-us-middle-image-div mt-4 mb-2'>
                <img src={buzzAboutImage2} alt="" />
            </div>

            <div className='about-us-presence-div'>
                <h2 className='text-center orange-color mt-4'>OUR PRESENCE</h2>
                <h3 className='text-center'>Be a Part of Our <span className='orange-color'>Global Community</span></h3>
                <p className='text-center'>Join our vibrant community to engage with individuals who share your vision, capture
                    exceptional investment prospects, establish valuable strategic alliances, and access
                    a realm of opportunities to energize your entrepreneurial voyage. Embrace an encouraging
                    environment where inventive thinkers come together, cooperate, and accelerate progress,
                    propelling your initiatives toward unparalleled achievements on a global level.</p>
            </div>

            <div className='about-us-stage-main-div mt-3'>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>Business Owners/successful entrepreneurs</p>
                    </div>
                </div>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>2nd/3rd generation entrepreneurs</p>
                    </div>
                </div>
                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>CXO's/Sr. executives working in corporates</p>
                    </div>
                </div>

                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>Family offices/business houses.</p>
                    </div>
                </div>

                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>NRI's who wants to contribute to the growth of the Indian Economy.</p>
                    </div>
                </div>

                <div className='about-us-stage-left-div px-3 mb-2 py-1'>
                    <div className='about-us-image-content-stage-div'>
                        <div className='about-us-image-stage-div p-1'>
                            <img src={checkedImage} alt="" />
                        </div>
                        <p className='mb-0 pt-2 stage-font-size'>People who have a capacity to invest at least min. of 5-10% of their Investment portfolio into start-ups.</p>
                    </div>
                </div>
            </div>

            <div className='email-subscribe-main-div py-3 mt-3 '>
                <div>
                    <h3 className='mb-0 text-center'>Stay tuned with our Newsletter.</h3>
                </div>
                <div>
                    <input type="text" className='email-input-common' placeholder='Email Address' />
                    <button className='subscribe-button-css'>Subscribe To BuzzNetWork &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default AboutUs