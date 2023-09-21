import React from 'react'
import './FinancialModalling.css'
import image1 from './../../images/graph.png'
import image2 from './../../images/research2.png'
import financialModallingImage from "./../../images/Financial Modelling & Valuation.png"


const FinancialModalling = () => {
    return (
        <div className='my-pitch-deck-body'>
            <div className='pitch-banner-div'>
                <div className='px-4 py-4 pitch-banner-div-content'>
                    <h2>Justifiable Valuations to back
                        you up in front of investors
                    </h2>
                    <h5 className='py-2 '>While it is helpful for investors to know the estimated value of
                        your business, but it isn't necessarily the dominant reason why an investor will invest
                        in a startup. Quite often, convincing an investor is more about being influential,
                        passionate and bold about your business idea. Investors need to know that you, as
                        a business owner, will do everything you can to make the business work.</h5>
                    <button className='py-2 text-center pitch-banner-button'>Get Started &rarr;</button>
                </div>
            </div>

            <div className='data-centric-div px-4 py-3'>
                <div>
                    <h2 className='pb-3'>Data-centric Reliable Valuations</h2>
                    <h4 className='pb-3'>
                        Valuation Accepted by all Investors/Angel Investors/ Venture Capitalist/PE Firms
                    </h4>
                </div>
                <div>
                    <div className='reaserch-emoji-1'>
                        <img className='p-2' src={image1} alt="" />
                    </div>
                    <div className='reaserch-emoji-2'>
                        <img className='p-2' src={image2} alt="" />
                    </div>
                </div>
            </div>

            <div className='px-4 py-3'>
                <h5>Valuation is the process used to determine the value of the company. The most common
                    methods of valuation are DCF, which uses the free cash flows for the firm derived from
                    the financial statements, and Comparable Valuation which uses metrics such as sales
                    multiple and EBITDA multiple of similar companies and applies the same to the subject
                    company to determine it's value. When we look at investing in any company, it is very
                    important to understand that we are buying into the future and hence want to know the
                    future prospects of the same. This is very important for startups as we are looking at
                    value propositions on the basis of no history and hence the entire value is derived from the
                    future. Having worked with numerous companies, we provide guidance regarding various aspects
                    of projections and valuation to help you get your funding.
                </h5>
            </div>

            <div className='pitch-deck-sub-heading-1'>
                <h2 className='text-center py-4 mb-0'>Pillars of Creation for Financial
                    Modeling and Valuations</h2>
            </div>

            <div className='financial-modalling-image-div'>
                <img src={financialModallingImage} alt="" />
            </div>

            <div className='deck-spend-div py-3'>
                <div>
                    <h2 className='mb-4'>
                        1000s of Founders lose a deal because they lack data-centric reliable valuation report.
                    </h2>
                    <h2 className='investor-hate-heading'>
                        Investors Hate
                        Guesswork!
                    </h2>
                </div>
                <div className='p-3 inside-div-background'>
                    <h4 className='pb-3'>We Only Have Few Minutes
                        to Wow the Investors.</h4>
                    <button className='financial-start-button-css py-2'>Let’s Make it Happen &rarr;</button>
                </div>
            </div>

            <div className='email-subscribe-main-div py-3 '>
                <div>
                    <h2 className='mb-0 text-center'>Stay tuned with our Newsletter.</h2>
                </div>
                <div>
                    <input type="text" className='email-input-common' placeholder='Email Address' />
                    <button className='subscribe-button-css'>Subscribe To BuzzNetWork &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default FinancialModalling
