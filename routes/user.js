const express = require('express');
const router = express.Router();
const data = require('../ForDatas/userInformations.json');

router.get('/', (req, res) => {
    res.send(data);
});
  
router.get('/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id);
    const user = data.find((user) => user.id === userId);
    res.json(user);
});
  
let currentUserId = 1;
router.post('/', (req, res) => {
    const { fname, lname, phoneNumber, email } = req.body;
    const user = {
      id: ++currentUserId,
      fname, 
      lname, 
      phoneNumber, 
      email
    };
    data.push(user);
    res.json(user);
});
  
router.put('/:id', (req, res) => {
    const {fname, lname, phoneNumber, email } = req.body;
    const userId = Number.parseInt(req.params.id);
    const user = data.find((user) => user.id === userId);
  
    user.fname = fname;
    user.lname = lname;
    user.phoneNumber = phoneNumber;
    user.email = email;
  
    res.json(user);
});
  
router.delete('/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id);
    const userIndex = data.findIndex((user) => user.id === userId);
    data.splice(productIndex, 1);
    res.sendStatus(204);
});
  
module.exports = router;