import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

import products from '../data/products.json';

function Products({ match, searchMed, getOrderItem }) {
    let medications = products.filter((medication) => {
        return match.params.category
            ? (medication.category === match.params.category)
            : products;
    });

    let searchMeds = medications.filter((med) => {
         if(~med.slug.indexOf(searchMed.toLocaleLowerCase())) {
             return med
         }
    });

    return (
        <Grid>
            <Row className="show-grid">
                  {searchMeds.map(((product, index) => {
                    return (
                        <Col xs={12} sm={6} md={4} lg={4} key={index}>
                            <Product key={index}
                                     medication={product}
                                     getItem={getOrderItem}
                            />
                        </Col>
                    )
                }))}
            </Row>
        </Grid>
    )
}

export default Products