import React from "react";
import {ListGroup, Button} from 'react-bootstrap'

import OrderItem from "../components/OrderItem";

function Cart({ productList, totalAmount }) {

    totalAmount = totalAmount.toFixed(2);

    return (
        productList.length
        ? <div className="cart-bar">
            <ListGroup className="purchase-bar">
                {productList.map((prod, index) => {
                    return <OrderItem key={index} medication={prod} />
                })}
            </ListGroup>
            <aside className="amount-bar">
                <div className="amountContainer">
                    <div>Total amount: </div>
                    <div>{totalAmount}</div>
                </div>

                <Button className="checkout-btn" bsStyle="success" bsSize="md">To checkout!</Button>
            </aside>
          </div>

        : <div className="empty-card">
                <p>Your cart is empty</p>
          </div>
    )
}

export default Cart;