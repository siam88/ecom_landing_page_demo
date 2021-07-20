import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { recentlyViewProductDetails } from '../../../data'
import './ProductsRecentlyView.css'

const ProductsRecentlyView = () => {
    return <>
        <Container style={{border:"1px solid red"}}>
            <Row>
                {recentlyViewProductDetails.map((e, i) => {
                    return <Col xs={6} md={4} sm={6} lg={4}>
                        <CustomCard val={e} />
                    </Col>
                })}

            </Row>
        </Container>
    </>
}
export default ProductsRecentlyView


const CustomCard = (e) => {
    return e.val.title
}
