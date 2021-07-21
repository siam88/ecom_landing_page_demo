import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import './headerMid.css'

const headerMid = () => {
    return <div className="container-fluid" style={{ paddingTop: "5px", paddingBottom: "5px", paddingLeft: "20%", paddingRight: "20%", fontSize: "1.1rem", fontWeight: "bold" }}>
        <div className="row justify-content-between ">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 ">
                <div class="d-none d-lg-block">
                    <span style={{ color: "#FEDC19", fontWeight: "bold", fontSize: "2rem" }}><span style={{ color: "#483C23" }}>JUS</span>AKO</span>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">

                <div id="custom-search-input">
                    <div class="input-group col-md-12">
                        <div class="d-none d-lg-block">
                            <span class="input-group-btn" >
                                <button class="btn btn-info btn-lg" type="button" style={{ fontWeight: "bold", borderLeft: "none", textAlign: "center", paddingRight: "25px", borderRight: "1px solid  #ccc", fontSize: "0.85rem" }}>
                                    All Categories <FontAwesomeIcon icon={faAngleDown} />
                                </button>
                            </span>
                        </div>
                        <input type="text" class="form-control input-lg" placeholder="Search.." />
                        <span class="input-group-btn">
                            <button class="btn btn-info btn-lg" type="button" style={{ borderLeft: "1px solid  #ccc", borderRight: "none" }}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </span>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 " style={{ textAlign: "right" }}>
                <div class="d-none d-lg-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> <span>$909.00</span>
                </div>
            </div>
        </div>

    </div>

}
export default headerMid