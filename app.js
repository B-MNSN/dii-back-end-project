const express = require('express');
const app = express();
const flightsRoutes = require('./routes/flights');
const booksRoutes = require('./routes/books');
const airportsRouts = require('./routes/airports')
const userRoutes = require('./routes/user');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use('/flights', flightsRoutes);
app.use('/books', booksRoutes);
app.use('/airports', airportsRouts);
app.use('/user', userRoutes);

app.listen(8000, () => {
    console.log('Listening on port 8000');
})


// GET /flights     => [{ id: 1, destinationAirline: 'Thai', departureDate: '2022-09-24T08:00:00Z', destination: 'BKK' }]
// /flights?destination=BKK

// POST /flights
// PUT /flights/:id
// DELETE /flights/:id

// Express passPort