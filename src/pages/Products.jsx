import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import classnames from 'classnames';

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

    const productsClassName = classnames({
        "products-are-hidden": true,
        "products-are-visible": isVisible
    });

    handleVision();

    return (
        <Grid className={productsClassName}>
            <Row className="show-grid">
                {searchMeds.map(((product, index) => {
                    return (
                        <Col xs={12} sm={4} md={3} lg={3} key={index}>
                            <Product key={index} medication={product}/>
                        </Col>
                    )
                }))}
            </Row>
        </Grid>
    )
}

export default Products