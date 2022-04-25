const express = require('express');
const router = express.Router();

const { people } = require('../data');

const { getPeople, getPersonById, createPerson, changePersonById, removePerson, createPostmanPerson } = require('../controllers/people')

router.get('/', getPeople);
router.post('/', createPerson);
// router.route('/').get(getPeople).post(createPerson);

// router.get('/:id', getPersonById);
// router.put('/:id', changePersonById);
// router.delete('/:id', removePerson);

router.route('/:id').get(getPersonById).put(changePersonById).delete(removePerson)

router.post('/postman', createPostmanPerson);

module.exports = router