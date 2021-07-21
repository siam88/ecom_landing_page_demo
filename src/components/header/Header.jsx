import React, { useEffect, useState } from 'react';
import HeaderBottom from './bottom/HeaderBottom';
import HeaderTop from './top/headerTop';
import HeaderMid from './mid/headerMid';
import { Col } from 'react-bootstrap';

const Header = () => {
    return <>
        <HeaderTop />
        <HeaderMid />
        <div class="d-none d-lg-block">
            <HeaderBottom />
        </div>
    </>
}
export default Header