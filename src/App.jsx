import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import Content from './components/Content';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Policies from './pages/Policies';
import Login from './pages/Login';
import Logout from './pages/Logout';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            menuIsOpened: false,
            areProductsVisible: false,
            searchValue: ""
        };

        this.body = document.body;

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.menuCloserAndSearchCleaner = this.menuCloserAndSearchCleaner.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setProductsAppearance__menu = this.setProductsAppearance__menu.bind(this);
        this.setProductsAppearance__ourProductsLink = this.setProductsAppearance__ourProductsLink.bind(this);
    };

    setProductsAppearance__menu() {
        this.state.areProductsVisible = this.state.menuIsOpened ? false : true;

        this.timerID = setTimeout(() => {
            this.setState({
                areProductsVisible: true
            })
            clearTimeout(this.timerID);
        }, 50)
    }

    setProductsAppearance__ourProductsLink() {
        this.state.areProductsVisible = false;

        this.timerID1 = setTimeout(() => {
            this.setState({
                areProductsVisible: true
            })
            clearTimeout(this.timerID1);
        }, 50)
    }

    login(user) {
        console.log(user);
        this.setState({
            user: user
        })
    };

    logout() {
        this.setState({
            user: false
        })
    };

    handleMenu() {
        this.setState({
            menuIsOpened: !this.state.menuIsOpened
        });
        this.body.classList.toggle("lock-scroll");
    };

    menuCloserAndSearchCleaner() {
        if (this.state.menuIsOpened) {
            this.setState({
                menuIsOpened: false,
                searchValue: ""
            });
            this.body.classList.toggle("lock-scroll");
        }
    }

    handleSearch(searchValue) {
        this.setState({
            searchValue: searchValue
        });
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user} onMenu={this.handleMenu}
                                                offMenu={this.menuCloserAndSearchCleaner}
                                                handleVision={this.setProductsAppearance__ourProductsLink}
                                                searchValueToToolbar={this.state.searchValue}
                                                onSearchToToolbar={this.handleSearch}/>
                <Route path="/" render={ () => <Menu isOpened={this.state.menuIsOpened} offMenu={this.menuCloserAndSearchCleaner}/> }/>

                <Content offMenu={this.menuCloserAndSearchCleaner} isMenuOpened={this.state.menuIsOpened}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/products/:category?" render={(props) => <Products isVisible={this.state.areProductsVisible}
                                                                                        handleVision={this.setProductsAppearance__menu}
                                                                                        searchMed={this.state.searchValue}
                                                                                        {...props}/>}
                        />
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contacts}/>
                        <Route path="/policies" component={Policies}/>
                        <Route path="/login" render={() => <Login user={this.state.user} onLogin={this.login} />}/>
                        <Route path="/logout" render={() => <Logout onLogout={this.logout} />}/>
                    </Switch>
                </Content>
            </div>
        )
    }
}

export default App;