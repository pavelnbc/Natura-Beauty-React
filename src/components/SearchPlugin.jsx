import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import {FormControl} from 'react-bootstrap'

class SearchPlugin extends Component {
  constructor({ getSearchedMed }) {
    super({ getSearchedMed });
    this.onSearch = getSearchedMed;

    this.state = {
        searchIcon: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.defineIcon = this.defineIcon.bind(this);
    this.deleteText = this.deleteText.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      let modifiedSearchValue = this.searchObject.value.trim();
      this.onSearch(modifiedSearchValue);
      this.searchObject.value = "";
      this.setState({
          searchIcon: true
      });
  }

  defineIcon(event) {
      event.preventDefault();
      this.setState({
          searchIcon: event.target.value ? false : true
      })
  }

  deleteText(event) {
      event.preventDefault();

      this.searchObject.value = "";
      this.setState({
          searchIcon: true
      });
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
              ? <FontAwesome name="search" size="sm" />
              : <FontAwesome name="times-circle" size="sm" onClick={this.deleteText} />
              }

          </form>
      )
  }
}

export default SearchPlugin