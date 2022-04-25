const express = require('express');

const router = express.Router();

const loginPerson = require('../controllers/auth')



router.post('/', loginPerson);


module.exports = router;