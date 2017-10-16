import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import Content from './components/Content';
import LeftSideBar from './components/LeftSideBar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NewOrder from './pages/NewOrder';
import OrderReplacement from './pages/OrderReplacement';
import FAQ from './pages/FAQ';
import Discounts from './pages/Discounts';
import Blog from './pages/Blog';
import Policies from './pages/Policies';
import Login from './pages/Login';
import Logout from './pages/Logout';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            isMenuOpened: false,
            isContentVisible: false,
            searchValue: "",
        };

        this.body = document.body;

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.menuCloser = this.menuCloser.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setContentAppearance = this.setContentAppearance.bind(this);
        this.handleContentVisibility = this.handleContentVisibility.bind(this);
    };

    setContentAppearance() {
        this.state.isContentVisible = false;

        this.timerID1 = setTimeout(() => {
            this.setState({
              isContentVisible: true
            });
            clearTimeout(this.timerID1);
        }, 50)
    }

    componentDidMount() {
      this.setContentAppearance();
    }

    componentDidUpdate() {
      this.setContentAppearance();
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
            isContentVisible: true
        });
        this.body.classList.toggle("lock-scroll");
    };

    menuCloser() {
        this.setState({
            isMenuOpened: false,
            searchValue: ""
        });
        if(this.state.isMenuOpened) {
            this.body.classList.toggle("lock-scroll");
        }
    }

    handleContentVisibility(value) {
        this.setState({
          isContentVisible: value
        })
    }

    handleSearch(searchValue) {
        this.setState({
            searchValue
        });
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user}
                         onMenu={this.handleMenu}
                         offMenu={this.menuCloser}
                         searchValueToToolbar={this.state.searchValue}
                         onSearchToToolbar={this.handleSearch}
                         onVisible={this.handleContentVisibility}
                />
                <Route path="/" render={() => <Menu isOpened={this.state.isMenuOpened} offMenu={this.menuCloser}/> }/>

                <Grid>
                    <Row className="show-grid">
                        {this.state.searchValue ? <Redirect to="/products" /> : null}
                        <Col xsHidden sm={3} md={3} lg={3}>
                          <LeftSideBar isMenuOpened={this.state.isMenuOpened} offMenu={this.menuCloser} />
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9} >
                          <Content offMenu={this.menuCloser} 
                                   isMenuOpened={this.state.isMenuOpened}
                                   isVisible={this.state.isContentVisible}
                                   onVisible={this.handleContentVisibility}
                          >
                              <Switch>
                                  <Route exact path="/" component={Home}/>
                                  <Route exact path="/products/:category?" render={
                                      (props) => <Products 
                                                            searchMed={this.state.searchValue}
                                                            {...props}/>
                                  }
                                  />
                                  <Route path="/about" component={About}/>
                                  <Route path="/blog" component={Blog} />
                                  <Route path="/contact" component={Contacts}/>
                                  <Route path="/policies" component={Policies}/>
                                  <Route path="/ordering" component={NewOrder} />
                                  <Route path="/reordering" component={OrderReplacement} />
                                  <Route path="/FAQ" component={FAQ} />
                                  <Route path="/Discounts" component={Discounts} />
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