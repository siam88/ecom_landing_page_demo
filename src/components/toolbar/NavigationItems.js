import React from 'react';
import  './NavigationItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, } from '@fortawesome/free-solid-svg-icons'
const navigationItems = () => (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12 customList">

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
);

export default navigationItems;