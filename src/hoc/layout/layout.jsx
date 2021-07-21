import React, { useEffect, useState } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/footer/Footer';
import FooterMoblie from '../../components/footer/FooterMobile';

import Header from '../../components/header/Header';

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
            {/* <div class="d-lg-none">
                <FooterMoblie />
            </div> */}
        </Col>


    </div>
}
export default Layout