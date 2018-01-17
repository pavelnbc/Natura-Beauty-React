import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import ContentShadowContainer from './containers/ContentShadowContainer';
import ToolbarContainer from './containers/ToolbarContainer';
import MenuContainer from './containers/MenuContainer';
import RedirectContainer from './containers/RedirectContainer';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';
import ProdCategoriesContainer from './containers/ProdCategoriesContainer';
import Content from './components/Content';
import MainContent from './pages/MainContent';
import LeftBarContent from './pages/LeftBarContent';
import LeftSideBanner from './components/LeftSideBanner';
import RefundReturnPolicy from './components/RefundReturnPolicy';
import Commercial from './components/Commercial';
import Footer from './components/Footer';
import Anchor from './components/Anchor';
import Home from './pages/Home';
import Medication from './pages/Medication';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NewOrder from './pages/NewOrder';
import OrderReplacement from './pages/OrderReplacement';
import FAQ from './pages/FAQ';
import Discounts from './pages/Discounts';
import Policies from './pages/Policies';
import NotFound from './pages/NotFound';


class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isContentVisible: false,
        };

        this.body = document.body;
        this.store = this.context.store;

        this.setContentAppearance = this.setContentAppearance.bind(this);
    };

    setContentAppearance() {          // Отвечает за плавное появление элементов компонента
        this.timerID = setTimeout(() => {
            this.setState({
              isContentVisible: true
            });

            clearTimeout(this.timerID);
        });

        this.state.isContentVisible = false;
    }
    
    componentWillMount() {
        console.log("mount");
        this.setContentAppearance();      // Запуск плавного появления элементов компонента при загрузке и обновлении компонента
    }

    componentDidUpdate() {
        console.log("update");
        this.setContentAppearance();
    }

    render() {
        return (
          <main className="app">
            <Content>
                <MenuContainer />
                <ContentShadowContainer />
                <Route path="/:products?" component={RedirectContainer}/>
                <Route path="/:pages?" component={ToolbarContainer}/>
                <Grid>
                    <Row className="show-grid">
                        <Col xsHidden sm={4} md={3} lg={3}>
                          <LeftBarContent isContentVisible={this.state.isContentVisible}>
                            <Switch>
                              <Route path="/cart" component={RefundReturnPolicy}/>
                              <Route path="/products" component={ProdCategoriesContainer}/>
                              <Route path="/" component={LeftSideBanner}/>
                            </Switch>
                            <Commercial />
                          </LeftBarContent>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={9} >
                          <MainContent isContentVisible={this.state.isContentVisible}>
                              <Switch>
                                  <Route exact path="/" component={Home}/>}/>
                                  <Route exact path="/products/:category?" component={ProductsContainer}/>
                                  <Route path="/products/:category/:medication" component={Medication}/>
                                  <Route path="/about" component={About}/>
                                  <Route path="/contact" component={Contacts}/>
                                  <Route path="/policies" component={Policies}/>
                                  <Route path="/ordering" component={NewOrder} />
                                  <Route path="/reordering" component={OrderReplacement} />
                                  <Route path="/FAQ" component={FAQ} />
                                  <Route path="/discounts" component={Discounts} />
                                  <Route path="/cart" render={() => <CartContainer />}
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
          </main>
        )
    }
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
