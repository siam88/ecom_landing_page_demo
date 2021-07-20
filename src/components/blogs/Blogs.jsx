import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { blogs } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

import './Blogs.css'
const Blogs = () => {
    return <>
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className="mb-1" >
                    <h4 style={{ float: "left", color: "black", fontWeight: "600", border: "none" }}>
                        From the Blog
                    </h4>
                    <div style={{ textAlign: "right" }}>
                        <span> <FontAwesomeIcon icon={faAngleLeft} /></span>&nbsp;&nbsp;
                        <span ><FontAwesomeIcon icon={faAngleRight} /></span>
                    </div>
                </Col>
                {blogs.map((e, i) => {
                    return <Col xs={12} md={12} sm={12} lg={12} >
                        <CustomCard value={e} />
                    </Col>
                })}

            </Row>
        </Container>
    </>
}
export default Blogs


const CustomCard = (props) => {
    return <div className="card " style={{ padding: "1%" }}>
        <div className="card-body">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-right">
                    <img src={props.value.img} alt="sans" height="100%" width="100%" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12  pt-2">
                    <span className="card-subtitle" style={{ color: "$888891", opacity: "0.75" }}>
                        {props.value.date} / {props.value.type}
                    </span> <br />
                    <span className="card-title" style={{ fontWeight: "700" }}>{props.value && props.value.title}</span><br />
                    <br />
                    <p className="card-subtitle" style={{ color: "$888891", opacity: "0.75" }}>
                        {props.value.desc}
                    </p>
                </div>

            </div>
        </div>
    </div>
}

