
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(201).json({ success: true, person: name });
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
};

module.exports = { getPeople, createPerson };