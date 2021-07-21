import React from 'react';
import { Row, Col, Container, ProgressBar } from 'react-bootstrap'
import { recentlyViewProductDetails } from '../../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { newarrivalproducts, featuredProduct } from '../../../data'
import Product from '../product/Product'
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
                <Col xs={12} md={4} sm={4} lg={4} >
                    <div className="card " style={{ padding: "2%", border: "1px solid #f3f2f2", background: '#F8F8F8' }}>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 text-right" style={{ height: "450px", width: "100%", padding: "0%", }}>
                                    <img src={featuredProduct.img} alt="sans" height="100%" width="100%" />
                                </div>
                                <div className="col-lg-12 col-md-7 col-sm-12 col-xs-12 col-12 text-left pt-2" style={{ textAlign: "center" }}>
                                    <h1 classNameName="card-text" style={{ textAlign: "center", fontWeight: "700" }}>
                                        {featuredProduct.title}
                                    </h1>
                                </div>
                                <div className="col-lg-12 col-md-7 col-sm-12 col-xs-12 col-12 text-left pt-2" style={{ textAlign: "center" }}>
                                    <h4 classNameName="card-text" style={{ textAlign: "center", fontWeight: "700" }}>
                                        <span style={{ color: "#D74E4D", fontSize: "1.2rem" }}> ${featuredProduct.discountPrice} </span> <span style={{ fontSize: "1rem", color: "#656567", opacity: "0.5" }}>  <s> ${featuredProduct.price}</s></span>
                                    </h4>
                                </div>
                                <div className="col-lg-12 col-md-7 col-sm-12 col-xs-12 col-12 text-left mt-4 pt-2" style={{ textAlign: "center" }}>
                                    <div class="row justify-content-between">
                                        <div class="col-5 text-left" style={{ textAlign: "left", opacity: "0.5" }}>
                                            Already Sold: {featuredProduct.alreadySold}
                                        </div>
                                        <div class="col-5 text-right" style={{ textAlign: "right", opacity: "0.5" }}>
                                            Available :{featuredProduct.available}
                                        </div>
                                    </div>
                                    <ProgressBar now={25} variant="warning" />
                                </div>
                                <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12 col-12 text-center mt-4 pt-2 mb-5" style={{ textAlign: "center" }}>
                                    <p classNameName="card-text" style={{ textAlign: "center", fontWeight: "700", opacity: "0.5" }}>
                                        Hurry Up ! Offer ends in
                                    </p>
                                    <div class="container mt-3">
                                        <div class="row justify-content-center">
                                            <div class="col-4 " style={{opacity:"0.5"}}>
                                            <span style={{ padding: "5px 10px", border: "2px solid #FAE781", marginBottom: "30px" }}>12</span> <br /> HR 
                                            </div>
                                            <div class="col-4" style={{opacity:"0.5"}}>
                                            <span style={{ padding: "5px 10px", border: "2px solid #FAE781", marginBottom: "30px" }}>09</span> <br /> Min
                                            </div>
                                            <div class="col-4" style={{opacity:"0.5"}}>
                                            <span style={{ padding: "5px 10px", border: "2px solid #FAE781", marginBottom: "30px" }}>11</span> <br /> Sec
                                            </div>
                                        </div>
                                    </div>

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8} sm={8} lg={8} >
                    <Container>
                        <Row>
                            {newarrivalproducts.map((e, i) => {
                                return <Col xs={12} md={6} sm={12} lg={4} >
                                    <Product product={e} serial={i} key={i} />
                                </Col>
                            })}

                        </Row>
                    </Container>
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