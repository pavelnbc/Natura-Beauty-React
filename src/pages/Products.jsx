import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

import products from '../data/products.json';

function Products() {
    return (
        <Grid>
            <Row className="show-grid">
                {products.map(((product, index) => {
                    return <Col xs={12} sm={4} md={3} lg={3}>
                                <Product key={index} medication={product}/>
                           </Col>
                }))}
            </Row>
        </Grid>
    )
}

export default Products

//<Product medication={product}  key={index} className="mdc-layout-grid__cell"/>

/* <div class="mdc-layout-grid">
 <div class="mdc-layout-grid__inner">
 {products.map((product, index) => {
 return (
 <div key={index} className="mdc-layout-grid__cell">
 <Product medication={product} />
 </div>
 )
 })}
 </div>
 </div>*/