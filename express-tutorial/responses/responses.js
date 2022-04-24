const { application } = require('express');
const express = require('express');

const BASE_URL = '/api/products';

const app = express();

const { products } = require('./express-tutorial/data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get(BASE_URL, (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return {
            id,
            name,
            image,
        };
    });
    res.send(newProduct);
});

app.get(`${BASE_URL}/:productID`, (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        return res.status(400).send('Product does not exist');
    }

    return res.send(singleProduct);
});

app.get(`${BASE_URL}/:productID/reviews/:reviewID`, (req, res) => {
    res.send('Hello world');

    console.log(req.params);
});

// When you want to combine two or more query paramaters.

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;

    // You need to return every filtered items to this variables.
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] });
    }

    return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
