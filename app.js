const express = require('express');
const app = express();

const { people } = require('./express-tutorial/data');

// static assets 
app.use(express.static('./express-tutorial/methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(201).json({success: true, person: name})
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(400).json({success: false, msg: "please provide credentionals"});
    
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})