import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import ProductFeature from '../../components/product/productFeature/ProductFeature';
import ProductNewArrivals from '../../components/product/productNewArrivals/productNewArrivals';
import ProductsRecentlyView from '../../components/product/productsRecentlyView/ProductsRecentlyView';
import ProductLatest from '../../components/product/productLatest/productLatest';
import Blogs from '../../components/blogs/Blogs';


const LandingPage = () => {
    return <Container>
        <Col xs={12} md={12} sm={12} lg={12} >
            <ProductFeature />
        </Col>
        <Col xs={12} md={12} sm={12} lg={12} >
            <ProductsRecentlyView />
        </Col>
        <Col xs={12} md={12} sm={12} lg={12} >
            <ProductNewArrivals />
        </Col>
        <Col xs={12} md={4} sm={12} lg={3} >
            <ProductLatest />
            <Blogs/>
        </Col>

    </Container>
}
export default LandingPage