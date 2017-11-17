import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import Product from '../components/Product';
import EmptyPage from '../components/EmptyPage';

class Products extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    componentWillMount() {
        const server = "our-natural-beauty-server.herokuapp.com";
        console.log("yes")
        axios.get('http://our-natural-beauty-server.herokuapp.com/api/v1/products')
            .then(response => response.data)
            .then(products => this.setState({products}))
    }

    render() {
        const { match, searchedMed, getOrderItem } = this.props;

        let medications = match.params.category
            ? this.state.products.filter((medication) => {
                return medication.category === match.params.category
            })
            : this.state.products;

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
                                        />
                                    </Col>
                                )
                            }))}
                        </Row>
                    </Grid>
                :  <EmptyPage content="Nothing was found" />
        )
    }
}

export default Products