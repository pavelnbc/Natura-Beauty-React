import React, {Component} from 'react';

import {FormControl} from 'react-bootstrap'

class SearchPlugin extends Component {
  constructor({ getSearchedMed }) {
    super({ getSearchedMed });

        this.onSearch = getSearchedMed;

        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      let modifiedSearchValue = this.searchObject.value.toString().trim();
      this.onSearch(modifiedSearchValue);
      this.searchObject.value = "";
  }

  render() {
      return (
          <form className="search-form" onSubmit={this.handleSubmit}>
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
