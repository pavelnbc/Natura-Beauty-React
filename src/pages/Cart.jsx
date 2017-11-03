import React, { Component }from "react";
import {ListGroup, Button, Radio } from 'react-bootstrap'

import OrderItem from "../components/OrderItem";

class Cart extends Component {
  constructor(props) {
    super(props)

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

//   componentDidMount() {
//       this.state.defaultChecked = this.state.isRadioChecked
// }

  render() {
    let { productList, totalAmount } = this.props;

    totalAmount = (totalAmount + parseFloat(this.state.delivery)).toFixed(2);

    return (
      productList.length
        ? <div className="cart-bar">
          <ListGroup className="purchase-bar">
            {productList.map((prod, index) => {
              return <OrderItem key={index} medication={prod} />
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
              <div>{ totalAmount }</div>
            </div>
            <Button className="checkout-btn" bsStyle="success" bsSize="md">To checkout!</Button>
          </aside>
        </div>

        : <div className="empty-card">
          <p>Your cart is empty</p>
        </div>
    )
  }
}




// function Cart({ productList, totalAmount }) {

//     totalAmount = totalAmount.toFixed(2);

//     return (
//         productList.length
//         ? <div className="cart-bar">
//             <ListGroup className="purchase-bar">
//                 {productList.map((prod, index) => {
//                     return <OrderItem key={index} medication={prod} />
//                 })}
//             </ListGroup>
//             <aside className="delivery-amount-bar">
//                 <div className="delivery-container">
//                     <Radio name="delivery" 
//                            value="Regular" 
//                            inputRef={(input) => {delivery = input}}
//                     >
//                       Regular delivery method 
//                     </Radio>
//                     <Radio name="delivery" 
//                            value="Trackable"
//                            inputRef={(input) => {delivery = input }}
//                     >
//                       Trackable air delivery
//                     </Radio>
//                 </div>
//                 <div className="amount-container">
//                     <div>Total amount: </div>
//                     <div>{totalAmount}</div>
//                 </div>

                

//                 <Button className="checkout-btn" bsStyle="success" bsSize="md">To checkout!</Button>
//             </aside>
//           </div>
 
//         : <div className="empty-card">
//                 <p>Your cart is empty</p>
//           </div>
//     )
// }

export default Cart;