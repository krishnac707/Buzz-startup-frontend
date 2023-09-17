import React from 'react'
import './MyPitchDeck.css'
import image1 from './../../images/Pitch deck icon.png'
import image2 from './../../images/Pitch deck icon2.png'
import image3 from './../../images/Pitch deck icon3.png'
import image4 from './../../images/Pitch deck icon4.png'
import image5 from './../../images/Pitch deck icon5.png'
import image6 from './../../images/Pitch deck icon6.png'
import image7 from './../../images/Pitch deck icon7.png'
import image8 from './../../images/Pitch deck icon8.png'
import image9 from './../../images/Pitch deck image.jpg'


const MyPitchDeck = () => {
  return (
    <div className='my-pitch-deck-body'>
      <div className='pitch-banner-div'>
        <div className='px-4 py-4 pitch-banner-div-content'>
          <h2>We Take The Hassle
            Out Of Pitch Deck Making
          </h2>
          <h5 className='py-2 '>With over USD $10M raised by our clients, we can help you with the perfect
            investment collateral. Since our experts know what it takes to hook investors'
            attention and present your compelling story.</h5>
          <button className='py-2 text-center pitch-banner-button'>Get Started &rarr;</button>
        </div>
      </div>
      <div className='pitch-deck-percentage-div my-3'>
        <div>
          <div className='pitch-percentage'>
            <h2 className='text-center py-3'>95%</h2>
          </div>
          <div className='pitch-percent-para'>
            <p className='mb-0 pt-2'>of The Founders Struggle at Pitch
              Deck Making
            </p>
          </div>
        </div>
        <div>
          <div className='pitch-percentage'>
            <h2 className='text-center py-3'>87%</h2>
          </div>
          <div className='pitch-percent-para'>
            <p className='mb-0 pt-2'>of Founders, Spend More Than 3 Months
              To Finalize A Deck
            </p>
          </div>
        </div>
        <div>
          <div className='pitch-percentage'>
            <h2 className='text-center py-3'>75%</h2>
          </div>
          <div className='pitch-percent-para'>
            <p className='mb-0 pt-2'>of Them Are Not Confident About
              Their Pitch
            </p>
          </div>
        </div>
      </div>

      <div className='pitch-deck-sub-heading-1'>
        <h2 className='text-center py-4 mb-0'>Pitch Deck Creating Solutions To
          Make Your Life Easier</h2>
      </div>

      <div className='deck-7x-main-div mb-2'>
        <div className='deck-7x-div p-2'>
          <h2 className='mb-0 pt-3 px-2'>7X</h2>
          <h4 className='mb-0 pt-3'>Increase Your Chances
            of Funding
          </h4>
          <div className='pt-1'>
            <img src={image1} alt="" />
          </div>
        </div>

        <div className='deck-7x-div p-2'>
          <h2 className='mb-0 pt-3 px-2 '>75%</h2>
          <h4 className='mb-0 pt-3'>Time-Saving in
            Investment Prep.
          </h4>
          <div className=''>
            <img src={image2} alt="" />
          </div>
        </div>
      </div>


      <div className='pitch-deck-sub-heading-1'>
        <h2 className='text-center py-4 mb-0'>You Never Get a Second Chance to
          Make a First Impression!</h2>
      </div>

      <div className='deck-feature-div-css mb-2'>
        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image3} alt="" />
          </div>
          <h4 className='pt-3'>Professional Content</h4>
        </div>

        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image4} alt="" />
          </div>
          <h4 className='pt-3'>Persuasive Narrative
            & Storyline</h4>
        </div>

        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image5} alt="" />
          </div>
          <h4 className='pt-3'>Credible Market
            Research</h4>
        </div>

        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image6} alt="" />
          </div>
          <h4 className='pt-3'>Jaw-dropping
            Design</h4>
        </div>

        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image7} alt="" />
          </div>
          <h4 className='pt-3'>Reliable Financial
            Projecions</h4>
        </div>

        <div className='deck-first-feature-div-css'>
          <div>
            <img src={image8} alt="" />
          </div>
          <h4 className='pt-3'>Complete Protection
            via NDA</h4>
        </div>

      </div>

      <div className='deck-spend-div py-3'>
        <div>
          <h2 className='mb-4'>
            On Average, an Investor
            Spends 4 Mins on a Pitch Deck.
          </h2>
          <h2>
            An Investment Associate
            Gets 2000 Decks a Year.
          </h2>
        </div>
        <div className='p-3'>
          <h4 className='pb-3'>We Only Have Few Minutes
            to Wow the Investors.</h4>
          <button className='deck-happen-button-css py-2'>Let’s Make it Happen &rarr;</button>
        </div>
      </div>

      <div className='pitch-deck-live-div-css'>
        <div>
          <h2>Pitch Decks are what we live and breathe!</h2>
          <p className='pitch-deck-para-css'>A dedicated team of 30+ strive to assist you at every step of the way.
            We are here to help you carve a successful path where you achieve your dreams.</p>
        </div>
        <div>
          <img src={image9} alt="" />
        </div>
      </div>

      <div className='email-subscribe-main-div py-3 '>
        <div>
          <h2 className='mb-0 text-center'>Stay tuned with our Newsletter.</h2>
        </div>
        <div>
          <input type="text" className='email-input-common px-3 py-2' placeholder='Email Address' />
          <button className='subscribe-button-css px-3 py-2'>Subscribe To BuzzNetWork &rarr;</button>
        </div>
      </div>

    </div>
  )
}

export default MyPitchDeck