import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar, faCompressAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
    return <>


        <div className="row mt-3" style={{ border: "1px solid #f3f2f2", padding: "5%"}}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-right " style={{padding:"0%"}}>
                <img src={props.product.img} alt="sans" height="100%" width="100%" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12  mt-2">
                <span className="card-subtitle" style={{ color: "$888891", opacity: "0.75", }}>
                    CCTV Camera
                </span> <br />
                <span style={{ fontSize: "0.75rem", color: "#D13839" }}>
                    <span> <FontAwesomeIcon icon={faStar} /></span>
                    <span> <FontAwesomeIcon icon={faStar} /></span>
                    <span> <FontAwesomeIcon icon={faStar} /></span>
                    <span> <FontAwesomeIcon icon={faStar} /></span>
                    <span> <FontAwesomeIcon icon={faStar} /></span>
                </span><br />
                <span className="card-title " style={{ fontWeight: "700" }}>
                    {props.product && props.product.discountPrice ?
                        <>
                            <span style={{ color: "#D74E4D", fontSize: "1.2rem" }}> ${props.product.discountPrice} </span> <span style={{ fontSize: "1rem", color: "#656567", opacity: "0.5" }}>  <s> ${props.product.price}</s></span>
                        </> :
                        <span style={{  fontSize: "1.2rem" }}>
                           ${props.product.price}
                        </span>}
                </span>

            </div>
           
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12  mt-3 mb-3 " style={{ padding: "1px "  }}>
                    <button type="button" class="btn btn-secondary" style={{paddingTop:"10px",paddingBottom:"10px", fontSize: "0.78rem", background: "#F4F4F4", border: "none", color: "#606164", fontWeight: "600" }}>ADD TO CART</button>
                </div>

               {props.serial==4|| props.serial==0?<> <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6   mt-3 mb-3" style={{ padding: "1px" }}>
                    <button type="button" class="btn " style={{ paddingTop:"10px",paddingBottom:"10px",fontSize: "0.73rem", width: "100%", border: "1px solid #e4e4e4", textAlign: "center", color: "#5f4c4c" }}><FontAwesomeIcon icon={faCompressAlt} /></button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6  mt-3 mb-3" style={{ padding: "1px" }}>
                    <button type="button" class="btn " style={{ paddingTop:"10px",paddingBottom:"10px",fontSize: "0.73rem", width: "100%", border: "1px solid #e4e4e4", textAlign: "center", color: "#5f4c4c" }}><FontAwesomeIcon icon={faHeart} /></button>
                </div></>:null}
           
        </div>


    </>
}
export default Product



