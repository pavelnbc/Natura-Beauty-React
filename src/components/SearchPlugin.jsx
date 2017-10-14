import React, {Component} from 'react';

import {FormControl} from 'react-bootstrap'

class SearchPlugin extends Component {
    constructor({ searchValueToPlg, onSearchToPlg }) {
        super({ searchValueToPlg, onSearchToPlg });

        this.onSearch = onSearchToPlg;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.onSearch(this.searchObject.value)
    }

    render() {
        const {searchValueToPlg} = this.props;

        return (
            <form className="search-form">
                <FormControl
                    type="text"
                    placeholder="Search"
                    value={searchValueToPlg}
                    onChange={this.handleChange}
                    inputRef={(input) => this.searchObject = input}
                />
                <i className="fa fa-search" aria-hidden="true" onClick={this.handleSubmit}></i>
            </form>
        )
    }
}

export default SearchPlugin