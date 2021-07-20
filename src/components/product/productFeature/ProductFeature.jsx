import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap'
import { featureProductData } from '../../../data'
import './ProductFeature.css'

const ProductFeature = () => {
    return <>
        <Container >
            <Row className="row justify-content-between">
                {featureProductData.map((e, i) => {
                    return <Col xs={12} md={6} sm={12} lg={6} >
                        <Cards value={e} key={i} />
                    </Col>
                })}
            </Row>
        </Container>
    </>
}
export default ProductFeature


//custom card
const Cards = (props) => {
    console.log(props.value)

    return (<div className={props.value.id > 1 ? "row customalignright" : "row customalignleft"}  >

        <div className="card customCardStyle mb-2" style={{ backgroundColor: "#F3F3F3" }} >
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
                        <h2 classNameName="card-title">{props.value && props.value.title}</h2>
                        <h2 classNameName="card-subtitle mb-2 " style={{ color: "#FED90F " }}>{props.value && props.value.subTitle}</h2>
                        <p classNameName="card-text" style={{ color: "#98989C", fontWeight: "500" }}>{props.value.desc && props.value.desc}</p>
                        <button type="button" className="btn btn-warning " style={{ padding: "2% 10%", color: "white", fontWeight: "bold", background: "#FED90F", border: "none" }}>Shop Now</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-4 col-xs-2 col-5 text-right">
                        <div className="imgCustom">
                            <img src={props.value.img} alt="sans"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)


}