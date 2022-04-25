const loginPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    return res
        .status(400)
        .json({ success: false, msg: 'please provide credentionals' });
};


module.exports = loginPerson;