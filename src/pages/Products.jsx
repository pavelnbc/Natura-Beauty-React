import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

import products from '../data/products.json';

function Products({match, isVisible, handleVision}) {
    var medications = products.filter((medication) => {
        return match.params.category ? (medication.category == match.params.category) : products;
    });

    handleVision();

    return (
        isVisible
          ?
        <Grid>
            <Row className="show-grid">
                {medications.map(((product, index) => {
                    return (
                        <Col xs={12} sm={4} md={3} lg={3}>
                            <ReactCSSTransitionGroup component="div"
                                                     transitionName="products"
                                                     transitionAppear={true}
                                                     transitionAppearTimeout={700}>
                                <Product key={index} medication={product}/>
                            </ReactCSSTransitionGroup>
                        </Col>
                    )
                }))}
            </Row>
        </Grid>
          :
         null
    )
}

export default Products