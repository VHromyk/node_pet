const express = require('express');

const morgan = require('morgan');

const { logger } = require('./express-tutorial/middleware/middleware');
const authorize = require('./authorie');

const app = express();

// req => middleware => res

// 1. This is a way to add logger to all path

// 2. Order metters here
// app.use('/api', logger);

// 3. You can pass '/api' as the first parameter and the logger will apply

// app.use([authorize, logger]);

// 4. It's gonna be apply to all my request

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/api/products', (req, res) => {
    res.send('Product page');
});

app.get('/api/items', [authorize, logger], (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
