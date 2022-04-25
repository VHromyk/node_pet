const express = require('express');
const router = express.Router();

const { people } = require('../data');

const {getPeople, createPerson} = require('../controllers/people')


// router.get('/', getPeople);
// router.post('/', createPerson);

router.route('/').get(getPeople).post(createPerson);



router.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(201).json({ success: true, data: [...people, name] });
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
});


router.put('/:personID', (req, res) => {
    const { personID } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(personID));

    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${personID}`,
        });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(personID)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
});

router.delete('/:personID', (req, res) => {
    const { personID } = req.params;

    const person = people.find((person) => person.id === Number(personID));

    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${personID}`,
        });
    }
    const newPeople = people.filter((pers) => pers.id !== personID);
    return res.status(200).json({ success: true, data: newPeople });
});


module.exports = router