const express = require('express');
const router = express.Router();
const data = require('../ForDatas/airports.json');
router.get('/', (req, res) => {
    const filters = req.query;
    const filteredFlights = data.filter(flight => {
        let isValid = true;
        for (key in filters) {
            // console.log(key, flight[key], filters[key]);
            isValid = isValid && flight[key] == filters[key];
        }
        return isValid;
    });
    res.json(filteredFlights);
});

// router.get('/:UID', (req, res) => {
//     const UId = req.params.UID;
//     const book = data.find((book) => book.UID === UId);
//     res.json(book);
// });
module.exports = router;