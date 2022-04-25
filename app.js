const express = require('express');
const app = express();

const people = require('./express-tutorial/routers/people')

const auth = require('./express-tutorial/routers/auth');

// static assets 
app.use(express.static('./express-tutorial/methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', auth);


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})