import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import EmptyPage from "../components/EmptyPage";
import Loading from '../components/Loading';

function Products({ products, match, searchedMed, getProduct }) {
    let medications = match.params.category
        ? products.filter(medication => {
            return medication.category === match.params.category;
        })
        : products;

    let searchMeds = medications.filter(med => {
        if (~med.slug.indexOf(searchedMed.toLocaleLowerCase())) {
            return med;
        }
    });

    return !medications.length ? (
        <Loading />
    ) : !searchMeds.length ? (
        <EmptyPage content="Nothing was found" />
    ) : (
        <Grid>
            <Row className="show-grid">
                {searchMeds.map((product, index) => {
                    return (
                        <Col xs={12} sm={6} md={3} lg={3} key={index}>
                            <Product key={index} medication={product} getItem={getProduct} />
                        </Col>
                    );
                })}
            </Row>
        </Grid>
    );
}

export default Products;
