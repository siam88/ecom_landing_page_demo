import React, { useEffect, useState } from 'react';
import ProductFeature from '../../components/product/productFeature/ProductFeature';
import ProductsRecentlyView from '../../components/product/productsRecentlyView/ProductsRecentlyView';


const LandingPage = () => {
    return <>

        <ProductFeature />
        <ProductsRecentlyView />
    </>
}
export default LandingPage