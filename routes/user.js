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
  
router.put('/', (req, res) => {
    const {fname, lname, phoneNumber, email } = req.body;
    const userId = Number.parseInt(req.params.id);
    const user = data.find((data) => data.id === userId);
  
    user.fname = fname;
    user.lname = lname;
    user.phoneNumber = phoneNumber;
    user.email = email;
  
    res.json(user);
});
  
// router.delete('/:id', (req, res) => {
//     const userId = Number.parseInt(req.params.id);
//     const userIndex = data.findIndex((user) => user.id === userId);
//     data.splice(userIndex, 1);
//     res.sendStatus(204);
// });
  
module.exports = router;