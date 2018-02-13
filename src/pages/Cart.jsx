import React, { Component }from "react";
import {ListGroup, Button, Radio } from 'react-bootstrap'
import EmptyPage from '../components/EmptyPage';

import CartItem from "../components/CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delivery: 15,
      isRadioChecked: false,
    };

    this.handleDelivery = this.handleDelivery.bind(this);
  }

  handleDelivery(event) {
    this.setState({
      delivery: parseFloat(event.target.value),
    })
  }

  render() {
    const { productList, totalAmount, deleteOrderItem } = this.props;

    console.log(productList);

    let totalPrice = (totalAmount + parseFloat(this.state.delivery)).toFixed(2);

    return (
      productList.length
        ? <section className="cart-bar">
            <ListGroup className="purchase-bar">
              {productList.map((prod, index) => {
                return <CartItem key={index}
                  medication={prod}
                  deleteItem={deleteOrderItem}
                />
              })}
            </ListGroup>
            <aside className="delivery-amount-bar">
              <div className="delivery-container" onChange={this.handleDelivery}>
                <Radio name="delivery"
                  value="15"
                  defaultChecked={true}
                >
                  Regular delivery method <b>($15)</b>
                </Radio>
                <Radio name="delivery"
                  value="30"
                >
                  Trackable courier delivery <b>($35)</b>
                </Radio>
                <Radio name="delivery"
                  value="45"
                >
                  Air delivery mail <b>($45)</b>
                </Radio>
              </div>
              <div className="amount-container">
                <div>Total amount: </div>
                <div>{totalPrice}</div>
              </div>
              <Button className="checkout-btn" bsStyle="success" bsSize="md">To checkout!</Button>
            </aside>
          </section>
        : <EmptyPage content="Your cart is empty" />
    )
  }
}

export default Cart;