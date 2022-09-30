const express = require('express');
const router = express.Router();
const data = require('../ForDatas/userLogin.json');

// router.get('/', (req, res) => {
//     res.json(data);
// });

router.post('/', (req, res) => {
    const { username, pwd } = req.body;
    const temp = data.find(item => item.username === username)
    if (temp == undefined) {
        return res.json({ status: 'fail' });
    }
    if (username === temp.username & pwd === temp.pwd) {
        return res.json(temp);
    }
    return res.json({ status: 'fail' });
});

module.exports = router;