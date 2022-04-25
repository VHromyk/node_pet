const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const getPersonById = (req, res) => {
    const { id } = req.params;

    const findPerson = people.find((person) => person.id === Number(id))

    if (!findPerson) {
        return res
            .status(404)
            .json({ success: false, msg: `There is no person with id ${id}` });
    }
    res.status(200).json({success: true, person: findPerson})
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(201).json({ success: true, person: name });
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
};

const changePersonById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${id}`,
        });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
}

const removePerson = (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${id}`,
        });
    }
    const newPeople = people.filter((pers) => pers.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
};

const createPostmanPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(201).json({ success: true, data: [...people, name] });
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
};

module.exports = { getPeople, getPersonById, changePersonById, createPostmanPerson, createPerson, removePerson
};
