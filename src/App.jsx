import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import Content from './components/Content';
import LeftSideBar from './components/LeftSideBar';
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
            isMenuOpened: false,
            areProductsVisible: false,
            searchValue: "",
        };

        this.body = document.body;

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.menuCloserAndSearchCleaner = this.menuCloserAndSearchCleaner.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setProductsAppearance = this.setProductsAppearance.bind(this);
        this.handleProdsVisibility = this.handleProdsVisibility.bind(this);
    };

    setProductsAppearance() {
        this.state.areProductsVisible = false;

        this.timerID1 = setTimeout(() => {
            this.setState({
                areProductsVisible: true
            });
            clearTimeout(this.timerID1);
        }, 50)
    }

    login(user) {
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
            isMenuOpened: !this.state.isMenuOpened,
            areProductsVisible: true
        });
        this.body.classList.toggle("lock-scroll");
    };

    menuCloserAndSearchCleaner() {
        this.setState({
            isMenuOpened: false,
            searchValue: ""
        });
        if(this.state.isMenuOpened) {
            this.body.classList.toggle("lock-scroll");
        }
    }

    handleProdsVisibility(value) {
        this.setState({
            areProductsVisible: value
        })
    }

    handleSearch(searchValue) {
        this.setState({
            searchValue: searchValue
        });
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user}
                         onMenu={this.handleMenu}
                         offMenu={this.menuCloserAndSearchCleaner}
                         searchValueToToolbar={this.state.searchValue}
                         onSearchToToolbar={this.handleSearch}
                />
                <Route path="/" render={ () => <Menu isOpened={this.state.isMenuOpened} offMenu={this.menuCloserAndSearchCleaner}/> }/>

                <Grid>
                    <Row className="show-grid">
                        <Col xsHidden sm={3} md={3} lg={3}>
                            <LeftSideBar />
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9} >
                            <Content offMenu={this.menuCloserAndSearchCleaner} isMenuOpened={this.state.isMenuOpened}>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/products/:category?" render={
                                        (props) => <Products areVisible={this.state.areProductsVisible}
                                                             searchMed={this.state.searchValue}
                                                             handleVision={this.setProductsAppearance}
                                                             onVisible={this.handleProdsVisibility}
                                                             {...props}/>
                                    }
                                    />
                                    <Route path="/about" component={About}/>
                                    <Route path="/contact" component={Contacts}/>
                                    <Route path="/policies" component={Policies}/>
                                    <Route path="/login" render={() => <Login user={this.state.user} onLogin={this.login} />}/>
                                    <Route path="/logout" render={() => <Logout onLogout={this.logout} />}/>
                                </Switch>
                            </Content>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default App;