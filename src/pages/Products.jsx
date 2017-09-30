import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

import products from '../data/products.json';

function Products() {
    return (
        <Grid>
            <Row className="show-grid">
                {products.map(((product, index) => {
                    return (
                        <ReactCSSTransitionGroup component="main"
                                                 transitionName="products"
                                                 transitionAppear={true}
                                                 transitionAppearTimeout={700}>
                            <Col xs={12} sm={4} md={3} lg={3}>
                                <Product key={index} medication={product}/>
                            </Col>
                        </ReactCSSTransitionGroup>
                    )
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