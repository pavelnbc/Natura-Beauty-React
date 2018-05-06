import React, { Component }from "react";
import {ListGroup, Button, Radio } from 'react-bootstrap'
import EmptyPage from '../components/EmptyPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItem from "../components/CartItem";

import { deleteFromCart } from '../actions';

class CartComponent extends Component {
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

CartComponent.propTypes = {
  productList: PropTypes.array,
    totalAmount: PropTypes.number,
    deleteOrderItem: PropTypes.func
};


function mapStateToProps(state) {
  return {
    productList: state.cartItems,
    totalAmount: state.totalPrice
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteOrderItem: id => dispatch(deleteFromCart(id))
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent);

export default Cart;