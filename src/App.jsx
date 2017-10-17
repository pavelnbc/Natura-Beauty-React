import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import Content from './components/Content';
import LeftSideBar from './components/LeftSideBar';
import RedirectToProds from './components/RedirectToProds';
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
            productCard: []
        };

        this.body = document.body;

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.setMenuClosed = this.setMenuClosed.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCard = this.handleCard.bind(this);
        this.setContentAppearance = this.setContentAppearance.bind(this);
        this.setContentAppearWithoutDisappear = this.setContentAppearWithoutDisappear.bind(this);
    };

    setContentAppearance() {          // Отвечает за плавное появление элементов компонента
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
                                      // Запуск плавного появления элементов компонента при загрузке и обновлении еомпонента
    componentDidUpdate() {
      this.setContentAppearance();
    }

    login(user) {                     // Вход пользователя
        this.setState({
            user: user
        })
    };

    logout() {                        // Выход пользователя
        this.setState({
            user: false
        })
    };

    handleMenu() {                    // Обработчик отображения панели меню
        this.setState({
            isMenuOpened: !this.state.isMenuOpened,
            isContentVisible: true
        });
        this.body.classList.toggle("lock-scroll");
    };

    setMenuClosed() {                    // Отвечает за закрытие панели меню
        this.setState({
            isMenuOpened: false,
            searchValue: "",
        });
        if(this.state.isMenuOpened) {
            this.body.classList.toggle("lock-scroll");
        }
    }

    setContentAppearWithoutDisappear() {  // Предотвращвет плавное появление элементов компонента
        this.setState({
          isContentVisible: true
        })
    }

    handleSearch(searchValue) {       // Обработчик строки поиска
        this.setState({
            searchValue
        });
    }

    handleCard(img, title, price) {
      let orderItem = {
        img: img,
        title: title,
        price: price
      };

      console.log(this.state.productCard)
      this.setState({
        productCard: this.state.productCard.concat(orderItem)
      })
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user}
                         onMenu={this.handleMenu}
                         offMenu={this.setMenuClosed}
                         getSearcValue={this.handleSearch}
                         setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                />
                <Route path="/" render={() => <Menu isMenuOpened={this.state.isMenuOpened} 
                                                    offMenu={this.setMenuClosed}/> }
                                              />

                <Grid>
                    <Row className="show-grid">
                        <RedirectToProds searchValue={this.state.searchValue} />
                        <Col xsHidden sm={3} md={3} lg={3}>
                          <LeftSideBar isMenuOpened={this.state.isMenuOpened}
                                       offMenu={this.setMenuClosed} 
                                       setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                          />
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9} >
                          <Content offMenu={this.setMenuClosed} 
                                   isMenuOpened={this.state.isMenuOpened}
                                   isContentVisible={this.state.isContentVisible}
                                   setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                          >
                              <Switch>
                                  <Route exact path="/" component={Home}/>
                                  <Route exact path="/products/:category?" render={
                                      (props) => <Products searchMed={this.state.searchValue} 
                                                           getOrderItem={this.handleCard}
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