import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, } from '@fortawesome/free-solid-svg-icons'
import './headerTop.css'

const HeaderTop = () => {
    return <div class="d-none d-lg-block">
        <div className="container-fluid" style={{background:"#F4F4F4",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"20%",paddingRight:"20%" ,opacity:"0.5"}}>
            <div className="row justify-content-between ">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">
                    <span class="lang"> English <FontAwesomeIcon icon={faAngleDown} /></span> <span style={{ paddingLeft: "5%" }} > Currency : USD <FontAwesomeIcon icon={faAngleDown} /></span>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">
                    <span style={{ marginLeft: "50%", borderLeft: "1px solid #D2D3D5", paddingLeft: "5%" }}> Call us toll free:  <span style={{ color: "black", fontWeight: "bold" }}>+1888 234  5679</span></span>
                </div>
            </div>

        </div>
    </div>
}
export default HeaderTop