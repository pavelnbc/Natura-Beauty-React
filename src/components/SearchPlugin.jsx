import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SearchPlugin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInputEmpty: true
        };
    }

    render() {
        let onSend = (event) => {
            event.preventDefault();

            let modifiedSerValue = this.searchValue.value.trim();
            this.props.getSearchValue(modifiedSerValue);
            onDeleteText();
        };

        let onDeleteText = () => {
            this.searchValue.value = "";
            this.searchValue.focus();
            this.setState({
                isInputEmpty: true
            })
        };

        let onInputChange = () => {
            this.setState({
                isInputEmpty: this.searchValue.value ? false : true
            })
        };

        return(
            <form onSubmit={onSend} className="search-form">
                <input type="text"
                       className="search-plugin__input"
                       placeholder="Search"
                       ref={(input) => this.searchValue = input}
                       onChange={onInputChange}
                />
                {this.state.isInputEmpty
                    ? <FontAwesome name="search" onClick={onSend}/>
                    : <FontAwesome name="times-circle" size="sm" onClick={onDeleteText}/>
                }
            </form>
        )
    }
}

export default SearchPlugin
























/*
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SearchPlugin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEmptyField: false
        };

        this.onSend = this.onSend.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.deleteText = this.deleteText.bind(this);
    }

    onSend(event) {
        event.preventDefault();

        let searchValue = this.searchField.value.trim();
        this.props.getSearchValue(searchValue);
        this.deleteText();
    }

    onInputChange(event) {
        console.log(event.target);
        this.setState({
            isEmptyField: !!event.target.value
        })
    }

    deleteText() {
        this.searchField.value = ""
        this.searchField.focus();
        this.setState({
            isEmptyField: false
        })
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.onSend}>
                <input type="text"
                       className="search-plugin__input"
                       placeholder="Search"
                       ref={(input) => this.searchField = input}
                       onChange={this.onInputChange}
                />
                <div>
                    {this.state.isEmptyField
                        ? <FontAwesome name="times-circle" size="sm" onClick={this.deleteText}/>
                        : <FontAwesome name="search" onClick={this.onSend}/>}
                </div>
            </form>
        )
    }
}

export default SearchPlugin
*/






















