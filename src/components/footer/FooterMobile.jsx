import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Image, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import you from '../../assets/youtube.png'
import ins from '../../assets/instagram.png'
import twitter from '../../assets/twitter-logo-png-5860.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin-logo-png-1829.png'
import livechat from '../../assets/livechat.PNG'
import appav from '../../assets/appav.PNG'
import card from '../../assets/card.PNG'

const Footer = () => {
    return <Container fluid className=" mt-5" >
        <Row >
           
            

            <Col xs={12} md={12} sm={12} lg={12} className="mb-3">
                <div className="container">
                    <Row >
                        <Col xs={12} md={12} sm={12} lg={6} align="left">
                            ©2015 - 2021 <span style={{ color: "#FCD404", fontSize: "0.85rem" }}>Rafshanul Hoque Siam.</span> All Right Reserved.
                        </Col>

                        <Col xs={12} md={12} sm={12} lg={6} align="right">
                            <div class="d-none d-lg-block"> Payment :<span>  <Image src={card} fluid /></span></div>
                        </Col>

                    </Row>
                </div>

            </Col>


        </Row>

    </Container >
}
export default Footer