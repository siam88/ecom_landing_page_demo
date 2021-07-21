import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignLeft, faCaretDown, faHeart ,faMapMarkerAlt,faSync,faUserAlt} from '@fortawesome/free-solid-svg-icons'
import './HeaderBottom.css'

const HeaderBottom = () => {
    return <div className="container-fluid" style={{ paddingTop: "5px", paddingBottom: "5px", fontSize: "1.1rem", fontWeight: "bold" }}>
        <div className="row justify-content-between ">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 " style={{ background: "#FEDC19", paddingLeft: "20%", paddingBottom: "1%", paddingTop: "1%" }}>
                <FontAwesomeIcon icon={faAlignLeft} /> Browse Category
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12 " style={{ background: "#051D43", paddingTop: "1%" }}>

                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "5%" }}>Home</span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "3%" }}>HOP  {' '} <FontAwesomeIcon icon={faCaretDown} /> </span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "3%" }}>BLOG</span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "3%" }}>PAGES {' '} <FontAwesomeIcon icon={faCaretDown} /> </span>

                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "3%" }}>CONTACT US</span>

                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "26%" }}><FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "2%" }}><FontAwesomeIcon icon={faSync} /> </span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "2%" }}><FontAwesomeIcon icon={faHeart} /> </span>
                <span style={{ color: "white", fontWeight: "600", fontSize: '0.85rem', paddingTop: "40%", marginLeft: "2%" }}><FontAwesomeIcon icon={faUserAlt} /> </span>

            </div>


       
    </div>
    </div >

}
export default HeaderBottom