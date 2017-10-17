import React from 'react';

function OrderItem({medication}) {
  return (
    <div className="order-item">
      <img src='' alt="med"/>
      <div className="cart-med-title">
        medication.title
      </div>
      <div className="cart-med-price">
        medication.price
      </div>
    </div>
  )
}

export default OrderItem