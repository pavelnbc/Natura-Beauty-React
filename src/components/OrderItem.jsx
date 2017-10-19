import React from 'react';
import { ListGroupItem } from 'react-bootstrap'

function OrderItem({ medication }) {
  return (
    <ListGroupItem className="order-item">
      <img src={`${medication.img}`} alt="med"/>
      <div className="cart-med-title">
          {medication.title}
      </div>
      <div className="cart-med-dosage-and-quantity">
          {medication.dosage}mg × {medication.quantity}pills
      </div>
      <div className="cart-med-price">
          {medication.price}
      </div>
    </ListGroupItem>
  )
}

export default OrderItem