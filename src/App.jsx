import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import Content from './components/Content';
import Home from './pages/Home';
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
            menuIsOpened: false
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.menuCloser = this.menuCloser.bind(this);
    };

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
            menuIsOpened: !this.state.menuIsOpened
        })
    };

    menuCloser() {
        this.setState({menuIsOpened: false})
    }

    render() {
        return (
            <div className="app">

                <Toolbar user={this.state.user} onMenu={this.handleMenu} offMenu={this.menuCloser}/>
                <Route path="/" render={ () => <Menu isOpened={this.state.menuIsOpened}/> }/>

                <Content onClick={this.menuCloser} isMenuOpened={this.state.menuIsOpened}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contacts}/>
                        <Route path="/policies" component={Policies}/>
                        <Route path="/login" render={() => <Login onLogin={this.login} />}/>
                        <Route path="/logout" render={() => <Logout onLogout={this.logout} />}/>
                    </Switch>
                </Content>
            </div>
        )
    }
}


export default App;