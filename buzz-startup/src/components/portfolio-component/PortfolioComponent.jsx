import React, { useState } from 'react'
import "./PortfolioComponent.css"
import { Card, Col, Row } from 'react-bootstrap'
import gulfGpt from './../../images/GulfGPT.jpeg'
import bharatGpt from './../../images/BharatCHAT.png'
import newsApi from './../../images/NewzAPI.jpeg'
import osNine from './../../images/OS9.png'

const PortfolioComponent = () => {

    const [cardDetail,setCardDetail] = useState([
        {image:gulfGpt,title:"GulfGPT",desc:"Tailoring Artificial General Intelligence for MENA region."},
        {image:bharatGpt,title:"BharatChat",desc:"Transforming Businesses with AI Powered Chatbots."},
        {image:newsApi,title:"NewzAPI",desc:"Media Intelligence AI-ML driven data insights tool."},
        {image:osNine,title:"OS9",desc:"Revolutionize Digital Infrastructure with OS9 Enterprise Linux."}        
    ])

    // console.log(cardDetail);
    cardDetail.map(singleImage => console.log(singleImage.image))

    return (
        <div className='protfolio-body-css'>
            <div className='card-margin'>
            <Row xs={1} md={2} lg={4} className="g-4">
                {cardDetail && cardDetail.map((singleCard,idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" className='card-image-size' src={singleCard?.image} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold' >{singleCard?.title}</Card.Title>
                                <Card.Text className='text-center'>{singleCard?.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    )
}

export default PortfolioComponent