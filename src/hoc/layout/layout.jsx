import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/footer/Footer';
import FooterMoblie from '../../components/footer/FooterMobile';
import card from '../../assets/card.PNG'
import Header from '../../components/header/Header';
import livechat from '../../assets/livechat.PNG'
import appav from '../../assets/appav.PNG'
const Layout = (props) => {
    return <div className="container-fluid">
        <Col xs={12} md={12} sm={12} lg={12} >
            <Header />
        </Col>
        <Col xs={12} md={12} sm={12} lg={12}>
            {props.children}
        </Col>
        <Col xs={12} md={12} sm={12} lg={12} >
            <div class="d-none d-lg-block">
                <Footer />
            </div>
            <div class="d-lg-none">
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
            </div>

        </Col>


    </div>
}
export default Layout