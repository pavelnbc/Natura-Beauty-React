import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Loading from '../components/Loading';

import { Button } from 'react-bootstrap';

class Medication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios.get("https://our-natural-beauty-server.herokuapp.com/api/v1/products")
            .then(response => response.data)
            .then(products => this.setState({ products }))
    }

    render() {
        let { match } = this.props;

        let medication = this.state.products.find((med) => {
            return med.slug === match.params.medication
        });

        return (
             this.state.products.length
             ?   <main className="medication-page">
                    <img src="/img/pills.png" alt="medication"/>
                    <h2>{medication.title}</h2>
                    <hr/>
                    <h4>{medication.ingredient}</h4>
                    <section className="medication-description">
                        <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode
                            state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained.
                            It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects.
                            Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything.
                            Up help home head spot an he room in.
                        </p>

                        <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade
                            guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no.
                            Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle
                            middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.
                        </p>

                        <p>Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening.
                            Thing do taste on we manor. Him had wound use found hoped. Of distrusts immediate enjoyment curiosity do.
                            Marianne numerous saw thoughts the humoured.
                        </p>
                    </section>
                    <section className="nav-btns">
                        <NavLink to={`/products/${medication.category}`}>
                            <Button bsStyle="info" bsSyze="md">
                                Products in this category
                            </Button>
                        </NavLink>
                        <NavLink to="/products">
                            <Button bsStyle="success" bsSyze="md">
                                Back to all products
                            </Button>
                        </NavLink>
                    </section>
                </main>
                : <Loading/>
        )
    }
}

export default Medication