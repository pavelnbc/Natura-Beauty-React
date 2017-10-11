import React from "react";

import OrderItem from "./OrderItem";

function Cart({ productList }) {
    return (
        <div className="cart=bar">

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