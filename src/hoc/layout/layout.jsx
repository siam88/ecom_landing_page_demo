import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Layout = (props) => {
    return <>
        <Header />
        {props.children}
        <Footer/>
    </>
}
export default Layout