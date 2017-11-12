'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const products = require('./api/products');
const categories = require('./api/categories');
const mainPageSlides = require('./api/mainPageSlides');
const menuLinks = require('./api/menuLinks');
let productCart = [];
let totalPrice = 0;

const app = express();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/externalData', (req, res) => {
    var data = {
        products: products,
        categories: categories,
        mainPageSlides: mainPageSlides,
        menuLinks: menuLinks,
        totalPrice: totalPrice,
        productCart: productCart
    };

    res.send(data);
});

app.post('/api/productCart', (req, res) => {
    let good = req.body.orderItem;

    // console.log(req.params);

    productCart.push(good);
    totalPrice += good.price;
});

app.delete('/api/productCart/:id', (res, req) => {
    console.log(req.req.params.id);
    const index = productCart.findIndex((product) => {
        return product.id === req.req.params.id
    });

    console.log(index);

    productCart.splice(index, 1);

    // let newProductCart = productCart.filter((product) => { product.id !== parseFloat(req.req.params.id) });
    //
    // console.log(productCart);
    //
    // productCart = newProductCart
});

/*
app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.title = req.body.title || todo.title;

    res.json(todo);
});

app.patch('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.completed = !todo.completed;

    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id == req.params.id);

    if (index === -1) return res.sendStatus(404);

    todos.splice(index, 1);

    res.sendStatus(204);
});

});*/

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));