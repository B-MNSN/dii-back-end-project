const express = require('express');
const router = express.Router();
const data = require('../ForDatas/Flights.json');

// router.get('/', (req, res) => {
//     res.json(data);
// });

router.get('/', (req, res) => {
    const filters = req.query;
    const filteredFlights = data.filter(flight => {
        let isValid = true;
        for (key in filters) {
            console.log(key);
            if (key != "traveler") {
                isValid = isValid && flight[key] == filters[key];
            }

        }
        return isValid;
    });

    res.json(filteredFlights);
});

module.exports = router;