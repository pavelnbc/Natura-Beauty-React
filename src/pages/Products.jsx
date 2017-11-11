import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Product from '../components/Product'

function Products({ match, searchedMed, getOrderItem, products, setContWithoutDisappear }) {
    let medications = match.params.category
                      ? products.filter((medication) => {
                            return medication.category === match.params.category
                        })
                      : products;

    let searchMeds = medications.filter((med) => {
         if(~med.slug.indexOf(searchedMed.toLocaleLowerCase())) {
             return med
         }
    });

    return (
        searchMeds.length
        ? <Grid>
            <Row className="show-grid">
                  {searchMeds.map(((product, index) => {
                    return (
                        <Col xs={12} sm={6} md={4} lg={4} key={index}>
                            <Product key={index}
                                     medication={product}
                                     getItem={getOrderItem}
                                     handleAppearance={setContWithoutDisappear}
                            />
                        </Col>
                    )
                }))}
            </Row>
          </Grid>
        : <div className="empty-list">
            <p>Nothing was found</p>
          </div>
    )
}

export default Products