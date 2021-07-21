import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap'
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
    return <div className="container-fluid mt-5" >
        <Row >
            <div class="d-none d-lg-block">
                <Col xs={12} md={12} sm={12} lg={12} style={{ background: "#FAD403" }} className="pt-5 pb-5 " >

                    <div className="container">
                        <Row >
                            <Col xs={12} md={12} sm={12} lg={6} className="pt-5 pb-5" align="left">
                                <h2>  <FontAwesomeIcon icon={faPaperPlane} /> Sign Up for Newsletter</h2>
                            </Col>
                            <Col xs={12} md={12} sm={12} lg={6} className="pt-5 pb-5">
                                <Row>
                                    <Col xs={12} md={12} sm={12} lg={8} style={{ width: "70%", padding: "0%" }}>
                                        <input type="password" className="place-holder-center" id="inputPassword" placeholder="text" style={{ width: "100%", fontSize: "14px" }} className="pt-3 " />
                                    </Col>
                                    <Col xs={12} md={12} sm={12} lg={4} style={{ width: "30%", background: "#051D43", color: "white" }}>
                                        <label for="inputPassword" className="col-sm-2 col-form-label"  >Password</label>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </div>
            
            <Col xs={12} md={12} sm={12} lg={12} className="mt-5 mb-5">
                <div className="container">
                    <Row >
                        <Col xs={12} md={12} sm={12} lg={4}>
                            
                            <div className="card" style={{ border: "none" }}>

                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: "#FAD403", fontWeight: "bold" }}><span style={{ color: "#403012" }}>JUSA</span>KO</h3>
                                    <p className="card-text mb-2 text-muted" style={{ lineHeight: "1.5rem", letterSpacing: "0.4px", fontSize: "0.90rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ulis egestas ante, quis lacinia eros convallis sit amet.</p>
                                    <span style={{ borderRadius: "80%", padding: "5%", fontSize: "0.8rem", }}>
                                        <Image src={you} roundedCircle height="30px" style={{ borderRadius: "60%", background: "#D5D5D5", paddingBottom: "5px", paddingTop: "5px" }} />
                                    </span>
                                    <span style={{ borderRadius: "80%", padding: "5%", fontSize: "0.4rem", }}>
                                        <Image src={ins} roundedCircle height="30px" style={{ borderRadius: "60%", background: "#D5D5D5", padding: "7px" }} />
                                    </span>
                                    <span style={{ borderRadius: "80%", padding: "5%", fontSize: "0.6rem", }}>
                                        <Image src={twitter} roundedCircle height="30px" style={{ borderRadius: "60%", background: "#D5D5D5", padding: "7px" }} />
                                    </span>
                                    <span style={{ borderRadius: "80%", padding: "5%", fontSize: "0.6rem", }}>
                                        <Image src={facebook} roundedCircle height="30px" style={{ borderRadius: "60%", background: "#D5D5D5", padding: "7px" }} />
                                    </span>
                                    <span style={{ borderRadius: "80%", padding: "5%", fontSize: "0.6rem", }}>
                                        <Image src={linkedin} roundedCircle height="30px" style={{ borderRadius: "60%", background: "#D5D5D5", padding: "7px" }} />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={2}>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="mb-2">Quick Links</Card.Title>

                                    <Card.Text className="mt-4  text-muted" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                                        <p >About Us</p>
                                        <p>Contact Us</p>
                                        <p>Products</p>
                                        <p>Login</p>
                                        <p>Sign Up</p>

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={2}>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="mb-2">CUSTOM AREA</Card.Title>

                                    <Card.Text className="mt-4  text-muted" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                                        <p>My Account</p>
                                        <p>Orders</p>
                                        <p>Tracking List</p>
                                        <p>Login</p>
                                        <p>Tearm</p>
                                        <p>Privacy Policy</p>
                                        <p>My Cart</p>

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={4}>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="mb-2">Contact Info</Card.Title>

                                    <Card.Text className="mt-4  text-muted" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ulis eg
                                    </Card.Text>
                                    <Card.Text >
                                        <Image src={livechat} fluid />
                                    </Card.Text>
                                    <Card.Text className="mt-4  ">
                                        <Image src={appav} fluid />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Col>


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

    </div>
}
export default Footer