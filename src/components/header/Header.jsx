import React, { useEffect, useState } from 'react';
import HeaderBottom from './bottom/headerBottom';
import HeaderTop from './top/headerTop';
import HeaderMid from './mid/headerMid';
import { Col } from 'react-bootstrap';

const Header = () => {
    return <>
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
    </>
}
export default Header