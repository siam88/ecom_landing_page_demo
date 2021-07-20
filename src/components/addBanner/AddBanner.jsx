import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { offeraddBanner } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

import './AddBanner.css'
const AddBanner = () => {
    return <>
        <Container className="mt-5 d-none d-lg-block">
            <Row>
                <Col xs={12} md={12} sm={12} lg={12} className="mb-1 mt-5" >
                   
                </Col>
                {offeraddBanner.map((e, i) => {
                    return <Col xs={12} md={12} sm={12} lg={12} >
                        <CustomCard value={e} />
                    </Col>
                })}

            </Row>
        </Container>
    </>
}
export default AddBanner



const CustomCard = (props) => {
    return <div className="card " style={{height:"31vh",background:"#F6F6F6",border:"1px solid #E5EBEE"}}>
        
            <div className="row d-flex align-items-center">

                <div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 text-left p-5 mt-3 ml-5 ">
                    <p className="card-subtitle mb-2" style={{ color: "$888891", opacity: "0.75" }}>
                        Sale Offer <span style={{color:"#F7B5AA",fontWeight:"700"}}>- { props.value.discount}%</span> Off This Week
                    </p>
                    <h5 classNameName="card-title" style={{ fontWeight: "700" ,fontSize:"1.5rem"}}>
                    Accessories <br/>Naturally Colorful 2021
                    </h5><br />

                    <span classNameName="card-text" style={{color: "#0000006e" ,fontSize:"1.1rem", fontWeight: "bold" }}>
                       Starting at <span style={{color: "#ead24f"}}>${props.value.price}</span>
                    </span>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
                    <img src={props.value.img} alt="sans" height="100%" width="100%" />
                </div>
            </div>
       
    </div>
}

