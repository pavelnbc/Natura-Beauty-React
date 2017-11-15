import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

// import categories from "../../api/categories.json";

class ProdCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };

        this.setEmptySearch = this.props.setEmptySearch;
    }

    componentWillMount() {
        axios.get("/api/v1/categories")
            .then(response => response.data)
            .then(categories => this.setState({categories}))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="prod-categories">
                <ListGroup>
                    {this.state.categories.map((category, index) => {
                        return (
                            <NavLink key={index}
                                     to={`/products/${category.id}`}
                                     className="menuItem"
                                     onClick={this.setEmptySearch}
                            >
                                <ListGroupItem>
                                    <FontAwesome name="heartbeat" />
                                    {category.title}
                                </ListGroupItem>
                            </NavLink>
                        );
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default ProdCategories
