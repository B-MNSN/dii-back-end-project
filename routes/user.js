const express = require('express');
const router = express.Router();
const data = require('../ForDatas/userInformations.json');

router.get('/', (req, res) => {
    res.send(data);
});

router.get('/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);
    const user = data.find((user) => user.id === id);
    res.json(user);
});

let currentUserId = 1;
router.post('/', (req, res) => {
    const { prefix, fname, lname, phoneNumber, email, flightID } = req.body;
    const user = {
        id: ++currentUserId,
        prefix,
        fname,
        lname,
        phoneNumber,
        email,
        flightID
    };
    data.push(user);
    res.json(user);
});

router.put('/', (req, res) => {
    const { prefix, fname, lname, phoneNumber, email, flightID } = req.body;
    const userId = Number.parseInt(req.params.id);
    const user = data.find((data) => data.id === userId);

    user.prefix = prefix;
    user.fname = fname;
    user.lname = lname;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.flightID = flightID;

    res.json(user);
});

router.delete('/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id);
    const userIndex = data.findIndex((user) => user.id === userId);
    data.splice(userIndex, 1);
    res.sendStatus(204);
});

module.exports = router;