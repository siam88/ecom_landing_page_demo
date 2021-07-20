import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { recentlyViewProductDetails } from '../../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTrophy } from '@fortawesome/free-solid-svg-icons'

import './productNewArrivals.css'
const productNewArrivals = () => {
    return <>
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className="mb-3 mt-5" style={{ borderBottom: "1px solid #f0f0f0", }}>
                    <button type="button" className="btn btn-warning " style={{ float: "left", padding: "1% 5%", color: "white", fontWeight: "bold", background: "#FED90F", border: "none" }}>
                        NEW ARRIVALS
                    </button>
                    <div style={{ textAlign: "right" }}>
                        <button type="button" type="button" class="btn btn-light m-1" > <FontAwesomeIcon icon={faAngleLeft} /></button>
                        <button type="button" type="button" class="btn btn-light" ><FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </Col>
                <Col xs={12} md={4} sm={4} lg={5} >
            
                </Col>
                <Col xs={12} md={8} sm={8} lg={7} >

                </Col>
            </Row>
        </Container>
    </>
}
export default productNewArrivals




const changeBackground = (e) => {
    e.target.style.color = '#FFED94';
    e.target.style.cursor = 'pointer';

}
const changeBackgroundonLeave = (e) => {
    e.target.style.color = '#9898AC';
}