import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import Content from './components/Content';
import ContentShadow from './components/ContentShadow';
import Toolbar from './components/Toolbar';
import Menu from './components/Menu';
import MainContent from './pages/MainContent';
import LeftBarContent from './pages/LeftBarContent';
import ProdCategories from './components/ProdCategories';
import RedirectToProds from './components/RedirectToProds';
import LeftSideBanner from './components/LeftSideBanner';
import RefundReturnPolicy from './components/RefundReturnPolicy';
import Commercial from './components/Commercial';
import Footer from './components/Footer';
import Anchor from './components/Anchor';
import Home from './pages/Home';
import Products from './pages/Products';
import Medication from './pages/Medication';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NewOrder from './pages/NewOrder';
import OrderReplacement from './pages/OrderReplacement';
import FAQ from './pages/FAQ';
import Discounts from './pages/Discounts';
import Policies from './pages/Policies';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

// import products from "./data/products"
// import categories from "./data/categories.json";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpened: false,
            isContentVisible: false,
            searchValue: "",
            productCart: [],
            totalPrice: 0,
            products: [],
            categories: [],
            mainPageSlides: [],

        };

        this.body = document.body;

        this.handleMenu = this.handleMenu.bind(this);
        this.setMenuClosed = this.setMenuClosed.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleCart = this.handleCart.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
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
        axios.get('api/externalData')
            .then(response => response.data)
            .then(externalData => {
                this.setState({
                    products: externalData.products,
                    categories: externalData.categories,
                    mainPageSlides: externalData.mainPageSlides,
                    menuLinks: externalData.menuLinks,
                    totalPrice: externalData.totalPrice,
                    productCart: externalData.productCart
                })
            })
            .catch(this.handleError);

        this.setContentAppearance();      // Запуск плавного появления элементов компонента при загрузке и обновлении еомпонента
    }

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

    handleCart(orderItem) {             // Отвечает за появление товаров в корзине
      axios.post('/api/productCart', { orderItem });

      this.setState({
          productCart: this.state.productCart.concat(orderItem),
          totalPrice: this.state.totalPrice + orderItem.price
      })
    }

    deleteCartItem(id) {
        axios.delete(`/api/productCart/${id}`);

        let productCart = this.state.productCart.filter((item) => {
            return item.id !== id
        });

        console.log(this.state.productCart)

        this.setState({
           productCart: productCart
        })
    }

    handleError(error) {
        console.error(error)
    }

    render() {
        return (
          <div className="app">
            <Content>
                <Menu isMenuOpened={this.state.isMenuOpened} offMenu={this.setMenuClosed} />
                <ContentShadow isMenuOpened={this.state.isMenuOpened} offMenu={this.setMenuClosed} />
                <Route path="/:pages?" render={(props) => {
                  return (<Toolbar  onMenu={this.handleMenu}
                                    getSearchValue={this.handleSearch}
                                    toEmptySearch={this.clearSearch}
                                    totalAmount={this.state.totalPrice}
                                    setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                                    productAmount={this.state.productCart.length}
                                    categories={this.state.categories}
                                    {...props}
                          />
                  )
                }} />

                <Grid>
                    <Row className="show-grid">
                        <RedirectToProds searchValue={this.state.searchValue} />
                        <Col xsHidden sm={4} md={3} lg={3}>
                          <LeftBarContent isMenuOpened={this.state.isMenuOpened}
                                          isContentVisible={this.state.isContentVisible} 
                         >
                            <Switch>
                              <Route path="/cart" component={RefundReturnPolicy}/>
                              <Route path="/products" render={() => {
                                return <ProdCategories categories={this.state.categories} toEmptySearch={this.clearSearch}/>
                              }}/>
                              <Route path="/" render={() => <LeftSideBanner
                                    setContWithoutDisappear={this.setContentAppearWithoutDisappear}/> }
                              />
                            </Switch>
                            <Commercial />
                          </LeftBarContent>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={9} >
                          <MainContent isContentVisible={this.state.isContentVisible}>
                              <Switch>
                                  <Route exact path="/" render={() => <Home mainPageSlides={this.state.mainPageSlides}/>}/>
                                  <Route exact path="/products/:category?" render={
                                      (props) => <Products searchedMed={this.state.searchValue}
                                                           getOrderItem={this.handleCart}
                                                           products={this.state.products}
                                                           setContWithoutDisappear={this.setContentAppearWithoutDisappear}
                                                           {...props}/>
                                        }
                                  />
                                  <Route path="/products/:category/:medication" component={Medication}/>
                                  <Route path="/about" component={About}/>
                                  <Route path="/contact" component={Contacts}/>
                                  <Route path="/policies" component={Policies}/>
                                  <Route path="/ordering" component={NewOrder} />
                                  <Route path="/reordering" component={OrderReplacement} />
                                  <Route path="/FAQ" component={FAQ} />
                                  <Route path="/discounts" component={Discounts} />
                                  <Route path="/cart" render={() => <Cart productList={this.state.productCart}
                                                                          totalAmount={this.state.totalPrice}
                                                                          deleteOrderItem={this.deleteCartItem}
                                                                          setContWithoutDisappear={this.setContentAppearWithoutDisappear}/>}

                                  />
                                  <Route component={NotFound}/>
                              </Switch>
                          </MainContent>
                        </Col>
                        <Col xsHidden>
                          <Anchor />
                        </Col>
                    </Row>
                </Grid>
            </Content>
            <Footer />
          </div>
        )
    }
}

export default App;