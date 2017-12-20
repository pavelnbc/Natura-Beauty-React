import axios from 'axios';

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_CART_STATE = "UPDATE_CART_STATE";

export function updateCartState() {
    return axios.get('https://our-natural-beauty-server.herokuapp.com/api/v1/cartData')
        .then(response => response.data)
        .then(data => ({
            type: UPDATE_CART_STATE,
            cartItems: data.productCart,
            totalPrice: data.totalPrice
        }))
}

export function addToCart(orderItem) {
    return axios.post('https://our-natural-beauty-server.herokuapp.com/api/v1/cartData', { orderItem })
        .then(response => response.data)
        .then(good => ({
            type: ADD_ITEM,
            item: good
        }))
        .catch(error => console.log(error))
}

export function deleteFromCart(id) {
    return axios.delete(`https://our-natural-beauty-server.herokuapp.com/api/v1/cartData/${id}`)
        .then(response => response.data)
        .then(() => ({
            type: DELETE_ITEM,
            id: id
        }))
}