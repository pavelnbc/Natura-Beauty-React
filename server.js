'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const products = require('./api/products');
const categories = require('./api/categories');
const mainPageSlides = require('./api/mainPageSlides');
const menuLinks = require('./api/menuLinks');
const prodCart = [];
var totalAmount = 0;

const app = express();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/categories', (req, res) => {
    res.send(categories)
});

app.get('/api/mainPageSlides', (req, res) => {
    res.send(mainPageSlides)
});

app.get('/api/menuLinks', (req, res) => {
    res.send(menuLinks)
});

app.get('/api/productCart', (req, res) => {
    const orderDetails = {
        totalAmount: totalAmount,
        prodCart: prodCart
    };
    res.send(orderDetails)
});

app.post('/api/productCart', (req, res) => {
    let good = req.body.orderItem;

    prodCart.push(good);
    totalAmount += good.price;
});

/*app.post('/api/todos', (req, res) => {
    const todo = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };

    todos.push(todo);

    res.send(todo);
});

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

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});*/

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));