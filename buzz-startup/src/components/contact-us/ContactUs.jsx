import React from 'react'
import './ContactUs.css'
import emailImage from './../../images/email.png'
import messageImage from './../../images/mail.png'
import locationImage from './../../images/location.png'

const ContactUs = () => {
    return (
        <div className='contact-us-body'>
            <div className='contact-us-main-div'>
                <div className='contact-us-left-main-div'>
                    <h2 className='orange-color mb-4'>LET’S WORK TOEGTHER</h2>
                    <div className='border-bottom pt-5 mb-5'></div>
                    <div className='contact-us-sr-div'>
                        <div>
                            <h4>01</h4>
                        </div>
                        <div>
                            <h4 className='mb-2'>What’s your name?</h4>
                            <input className='contact-us-input p-2' type="text" placeholder='Buzz Startups' />
                        </div>
                    </div>

                    <div className='border-bottom pt-5 mb-5'></div>

                    <div className='contact-us-sr-div'>
                        <div>
                            <h4>02</h4>
                        </div>
                        <div>
                            <h4 className='mb-4'>What’s your email?</h4>
                            <input className='contact-us-input p-2' type="text" placeholder='contact@buzzstartups.com' />
                        </div>
                    </div>

                    <div className='border-bottom pt-5 mb-5'></div>
                    <div className='contact-us-sr-div'>
                        <div>
                            <h4>03</h4>
                        </div>
                        <div>
                            <h4 className='mb-4'>What is the name of your organization?</h4>
                            <input className='contact-us-input p-2' type="text" placeholder='BuzzStartups' />
                        </div>
                    </div>

                    <div className='border-bottom pt-5 mb-5'></div>
                    <div className='contact-us-sr-div'>
                        <div>
                            <h4>04</h4>
                        </div>
                        <div>
                            <h4 className='mb-4'>Your Message</h4>
                            <input className='contact-us-input p-2' type="text" placeholder='Hello BuzzStartups, Can you....' />
                        </div>
                    </div>

                    <button className='button-contact-us-send py-2 mt-4 mb-4'><h4>Send it!</h4></button>

                </div>
                <div className='contact-us-right-main-div'>
                    <div className='contact-us-mail-emoji-div mx-3'>
                        <img className='contact-us-email-image' src={emailImage} alt="" />
                    </div>

                    <h4 className='my-4'>OFFICE ADDRESS</h4>
                    <div className='contact-us-location-main-div'>
                        <div className='p-2'>
                            <img src={locationImage} alt="" />
                        </div>
                        <div>
                            <h5 className='pt-2'>Link Plaza, Suite # 100,
                                New Link Rd, Oshiwara,
                                Andheri West, Mumbai, Maharashtra 400053</h5>
                        </div>
                    </div>
                    
                    <h4 className='my-4'>CONTACT DETAILS</h4>

                    <div className='contact-us-location-main-div'>
                        <div className='p-2'>
                            <img src={messageImage} alt="" />
                        </div>
                        <div>
                            <h5 className='pt-2'>contact@buzzstartups.com</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='email-subscribe-main-div py-3 mt-3 '>
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

export default ContactUs