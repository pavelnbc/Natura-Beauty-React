import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import {FormControl} from 'react-bootstrap'

class SearchPlugin extends Component {
    constructor(props) {
        super(props);
        this.onSearch = props.getSearchValue;
        this.state = {
            searchIcon: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.defineIcon = this.defineIcon.bind(this);
        this.deleteText = this.deleteText.bind(this);
    }

    deleteText() {
        this.searchObject.value = "";
        this.searchObject.focus();
        this.setState({
            searchIcon: true
        });
    }

    defineIcon() {
        this.setState({
            searchIcon: this.searchObject.value ? false : true
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let modifiedSearchValue = this.searchObject.value.trim();
        console.log(this.onSearch);
        this.onSearch(modifiedSearchValue);
        this.deleteText();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    inputRef={(input) => this.searchObject = input}
                    onChange={this.defineIcon}
                />
                {this.state.searchIcon
                    ? <FontAwesome name="search" />
                    : <FontAwesome name="times-circle" size="sm" onClick={this.deleteText}/>
                }

            </form>
        )
    }
}

export default SearchPlugin