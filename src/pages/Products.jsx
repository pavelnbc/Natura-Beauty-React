import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import classnames from 'classnames';

import Product from '../components/Product'

import products from '../data/products.json';

function Products({match, searchMed}) {
    const medications = products.filter((medication) => {
        return match.params.category
            ? (medication.category === match.params.category)
            : products;
    });

    const searchMeds = medications.filter((med) => {
         if(~med.slug.indexOf(searchMed.toLocaleLowerCase())) {
             return med
         }
    });

    return (
        <Grid>
            <Row className="show-grid">
                {searchMeds.map(((product, index) => {
                    return (
                        <Col xs={12} sm={6} md={4} lg={4} key={index} className="product-card">
                            <Product key={index}
                                     medication={product}
                            />
                        </Col>
                    )
                }))}
            </Row>
        </Grid>
    )
}

export default Products