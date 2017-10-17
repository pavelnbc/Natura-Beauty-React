import React from "react";

import OrderItem from "../components/OrderItem";

function Cart({ productList }) {
    const cardProducts = productList;

    return (
        <div className="cart=bar">
          {cardProducts.map((prod, index) => {
             return <OrderItem key={index} medication={prod} /> 
          })}
        </div>
    )
}

export default Cart;



// {
//   productList
//     ? productList.map((product, index) => {
//       return (
//         <OrderItem key={index} medication={product} />
//       )
//     })
//     : null
// }