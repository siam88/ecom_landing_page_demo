import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import ProductFeature from '../../components/product/productFeature/ProductFeature';
import ProductNewArrivals from '../../components/product/productNewArrivals/productNewArrivals';
import ProductsRecentlyView from '../../components/product/productsRecentlyView/ProductsRecentlyView';
import ProductLatest from '../../components/product/productLatest/productLatest';
import Blogs from '../../components/blogs/Blogs';
import AddBanner from '../../components/addBanner/AddBanner';
import Product from '../../components/product/product/Product'
import { products } from '../../data'
import BottomBanner from '../../assets/bottomBanner.PNG'

const LandingPage = () => {
    return <Container>
        <Row>
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
                <Blogs />
            </Col>
            <Col xs={12} md={8} sm={12} lg={9} >
                <AddBanner />
                <Container>
                    <Row>
                        {products.map((e, i) => {
                            return <Col xs={12} md={6} sm={12} lg={3} >
                                <Product product={e} serial={i} key={i} />
                            </Col>
                        })}

                    </Row>
                </Container>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} align="center" className="mt-5">
                <img src={BottomBanner} alt="sans" height="70%" width="98%" className="mt-5"/>
            </Col>
        </Row>
    </Container>
}
export default LandingPage