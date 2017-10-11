import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

import products from '../data/products.json';

function Products({match, isVisible, handleVision, searchMed}) {
    const medications = products.filter((medication) => {
        return match.params.category ? (medication.category === match.params.category) : products;
    });

    const searchMeds = medications.filter((med) => {
         if(~med.slug.indexOf(searchMed.toString().toLocaleLowerCase())) {
             return med
         }
    });

    handleVision();

    return (
        isVisible
          ?
        <Grid>
            <Row className="show-grid">
                {searchMeds.map(((product, index) => {
                    return (
                        <Col xs={12} xsPush={2} sm={4} smPush={2} mdPush={0} md={3} lg={3} key={index}>
                            <ReactCSSTransitionGroup component="div"
                                                     transitionName="products"
                                                     transitionAppear={true}
                                                     transitionAppearTimeout={500}>
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