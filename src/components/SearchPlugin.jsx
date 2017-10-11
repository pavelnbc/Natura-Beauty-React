import React, {Component} from 'react';

import {FormControl} from 'react-bootstrap'

class SearchPlugin extends Component {
    constructor({ onSearch }) {
        super({ onSearch });

        this.onSearch = onSearch;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.onSearch(this.searchObject.value)
    }

    render() {
        return (
            <form onChange={this.handleSubmit} className="search-form">
                <FormControl
                    type="text"
                    placeholder="Search"
                    inputRef={(input) => this.searchObject = input}
                />
                <i className="fa fa-search" aria-hidden="true" onClick={this.handleSubmit}></i>
            </form>
        )
    }
}

export default SearchPlugin