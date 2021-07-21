import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { latestProducts } from '../../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

import './ProductLatest.css'
const ProductLatest = () => {
    return <>
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className="mb-1 mt-5" >
                    <h4 style={{ float: "left", color: "black", fontWeight: "600", border: "none" }}>
                        Latest Products
                    </h4>
                    <div style={{ textAlign: "right" }}>
                        <span> <FontAwesomeIcon icon={faAngleLeft} /></span>&nbsp;&nbsp;
                        <span ><FontAwesomeIcon icon={faAngleRight} /></span>
                    </div>
                </Col>
                {latestProducts.map((e, i) => {
                    return <Col xs={12} md={12} sm={12} lg={12} >
                        <CustomCard value={e} />
                    </Col>
                })}

            </Row>
        </Container>
    </>
}
export default ProductLatest


const CustomCard = (props) => {
    return <div className="card " style={{ padding: "2%", border: "1px solid #f3f2f2" }}>
        <div className="card-body">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 text-right">
                    <img src={props.value.img} alt="sans" height="100%" width="100%" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 text-left pt-2">
                    <span classNameName="card-title" style={{ color: "#FDDD41", fontWeight: "700" }}>{props.value && props.value.title}</span><br />
                    <span style={{ fontSize: "0.75rem", color: "#D13839" }}>
                        <span> <FontAwesomeIcon icon={faStar} /></span>
                        <span> <FontAwesomeIcon icon={faStar} /></span>
                        <span> <FontAwesomeIcon icon={faStar} /></span>
                        <span> <FontAwesomeIcon icon={faStar} /></span>
                        <span> <FontAwesomeIcon icon={faStar} /></span>
                    </span><br />
                    <span classNameName="card-text" style={{ color: "#D13839", fontWeight: "700" }}>
                        ${props.value.price}
                    </span>
                </div>

            </div>
        </div>
    </div>
}

const changeBackground = (e) => {
    e.target.style.color = '#FFED94';
    e.target.style.cursor = 'pointer';

}
const changeBackgroundonLeave = (e) => {
    e.target.style.color = '#9898AC';
}