import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { recentlyViewProductDetails } from '../../../data'
import './ProductsRecentlyView.css'
const ProductsRecentlyView = () => {
    return <>
        <Container style={{ border: "1px solid red" }} className="mt-5">
            <Row>
                {recentlyViewProductDetails.map((e, i) => {
                    return <Col xs={6} md={4} sm={6} lg={4}>
                        <CustomCard value={e} />
                    </Col>
                })}

            </Row>
        </Container>
    </>
}
export default ProductsRecentlyView


const CustomCard = (props) => {
    return <div className="card  customCardStyle mb-2"  >
        <div className="card-body">
            <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12 col-12 text-right">
                    <img src={props.value.img} alt="sans" height="100%" width="90%" />
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 ">
                    <h5 classNameName="card-title">{props.value && props.value.title}</h5>
                    {props.value.catList.map((e, i) => <span className=" customCat" style={{ color: "#98989C", fontWeight: "500" }} key={i} onMouseEnter={changeBackground} onMouseLeave={changeBackgroundonLeave}>
                        {e}<br/>
                    </span>)}
                    <span classNameName="card-text" style={{ color: "#98989C", fontWeight: "500" }}>
                        more....
                    </span>
                </div>

            </div>
        </div>
    </div>

}

const  changeBackground=(e)=> {
    e.target.style.color = '#FFED94';
    e.target.style.cursor = 'pointer';

  }
  const  changeBackgroundonLeave=(e)=> {
    e.target.style.color = '#9898AC';
  }