import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import LeftBarContent from './pages/LeftBarContent';
import ProdCategories from './components/ProdCategories';
import RedirectToProds from './components/RedirectToProds';
import LeftSideBanner from './components/LeftSideBanner';
import RefundReturnPolicy from './components/RefundReturnPolicy';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NewOrder from './pages/NewOrder';
import OrderReplacement from './pages/OrderReplacement';
import FAQ from './pages/FAQ';
import Discounts from './pages/Discounts';
import Policies from './pages/Policies';
import Cart from './pages/Cart';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            isMenuOpened: false,
            isContentVisible: false,
            searchValue: "",
            productCard: [],
            totalPrice: 0
        };

        this.body = document.body;

        this.handleMenu = this.handleMenu.bind(this);
        this.setMenuClosed = this.setMenuClosed.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
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

    clearSearch() {
      this.setState({
        searchValue: ""
      })
    }

    handleCard(orderItem) {             // Отвечает за появление товаров в корзине
      this.setState({
        productCard: this.state.productCard.concat(orderItem),
        totalPrice: this.state.totalPrice + parseFloat(orderItem.price)
      })
    }

    render() {
        return (
          <div className="content">
            <div className="app">
                <Toolbar user={this.state.user}
                         onMenu={this.handleMenu}
                         offMenu={this.setMenuClosed}
                         getSearchValue={this.handleSearch}
                         toEmptySearch={this.clearSearch}
                         totalAmount={this.state.totalPrice}
                         setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                />
                <Route path="/" render={() => <Menu isMenuOpened={this.state.isMenuOpened} 
                                                    offMenu={this.setMenuClosed}/> }
                />

                <Grid>
                    <Row className="show-grid">
                        <RedirectToProds searchValue={this.state.searchValue} />
                        <Col xsHidden sm={3} md={3} lg={3}>
                          <LeftBarContent isMenuOpened={this.state.isMenuOpened}
                                          isContentVisible={this.state.isContentVisible} 
                                          offMenu={this.setMenuClosed}
                          >
                            <Switch>
                              <Route path="/cart" component={RefundReturnPolicy}/>
                              <Route path="/products" component={ProdCategories}/>
                              <Route path="/" render={() => <LeftSideBanner 
                                    setContWithoutDisappear={this.setContentAppearWithoutDisappear}/> }
                              />
                            </Switch>
                          </LeftBarContent>
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9} >
                          <MainContent offMenu={this.setMenuClosed} 
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
                                  <Route path="/contact" component={Contacts}/>
                                  <Route path="/policies" component={Policies}/>
                                  <Route path="/ordering" component={NewOrder} />
                                  <Route path="/reordering" component={OrderReplacement} />
                                  <Route path="/FAQ" component={FAQ} />
                                  <Route path="/discounts" component={Discounts} />
                                  <Route path="/cart" render={() => <Cart productList={this.state.productCard}
                                                                          totalAmount={this.state.totalPrice}/>}
                                  />
                              </Switch>
                          </MainContent>
                        </Col>
                    </Row>
                </Grid>
            </div> 
            <Footer />
          </div>
        )
    }
}

export default App;