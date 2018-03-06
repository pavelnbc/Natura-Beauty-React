import axios from 'axios';

export const IMPORT_PRODUCTS = "IMPORT_PRODUCTS";

export function importProducts() {
    return axios.get('https://our-natural-beauty-server.herokuapp.com/api/v1/products')
        .then(response => response.data)
        .then(products => ({
            type: IMPORT_PRODUCTS,
            products
        }))

}