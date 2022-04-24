const express = require('express');

const path = require('path');

const app = express();

// setup static and middleware

app.use(express.static('./public'));

// adding to static assets

// app.get('/', (req, res) => {
//     res.sendFile(
//         path.resolve(__dirname, './express-tutorial/navbar-app/index.html')
//     );
// });

app.all('*', (req, res) => {
    res.status(400).send('resource not found');
});

app.listen(5000, () => {
    console.log('Server is listening on post 5000...');
});
