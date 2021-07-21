import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, } from '@fortawesome/free-solid-svg-icons'
import './Category.css'
import mobile from '../../assets/mobile.PNG'

const Category = () => {
    return <div className="container mb-5" style={{ margin: "0px", padding: "0px", background: "#FAFAFA", fontSize: "0.85rem", fontWeight: "bold", color: "#3f3f3f" ,paddingTop: "5px", paddingBottom: "5px", }}>
        <div className="row justify-content-between ">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 customList">
                <div class="d-none d-lg-block" >
                    <ul>
                        <li>Break Point <span><FontAwesomeIcon icon={faAngleRight} /></span></li>
                        <li>Wheel & Tires <span><FontAwesomeIcon icon={faAngleRight} /></span></li>
                        <li>Furnite & Decor <span><FontAwesomeIcon icon={faAngleRight} /></span></li>
                        <li>Turbo System <span><FontAwesomeIcon icon={faAngleRight} /></span></li>
                        <li>Lighting </li>
                        <li>Accessories <span><FontAwesomeIcon icon={faAngleRight} /></span></li>
                        <li>Body Parts </li>
                        <li>PErformance Filters </li>
                        <li>Engine Parts </li>

                    </ul>
                </div>
            </div>

            <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12 col-12 customList">
                <div className="row justify-content-between ">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">
                        <div class="card" style={{ height: "100%", textAlign: "left", paddingLeft: "10%", background: "#fafafa", border: "none" }}>
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 mt-5 " style={{ color: "#e67766" }}>CLOTHING</h6>
                                <h2 class="card-title">UP TO  20% OFF<br /> SPEAKERS</h2>
                                <p class="card-subtitle mt-3 mb-2 text-muted" >The Best Gadget Collection 2021</p>
                                <p class="card-text"><span style={{ fontSize: "1.2rem", color: "#656567", opacity: "0.5" }}>  <s> $430.00</s></span> <span style={{ color: "#D74E4D", fontSize: "1.4rem" }}> $350.00</span> </p>
                                <button type="button" class="btn btn-warning" style={{ padding: "3% 12%", color: "white", fontWeight: "bold" }}>Buy Now</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">
                        <Image src={mobile} fluid />
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Category