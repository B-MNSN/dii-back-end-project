const express = require('express');
const app = express();
const flightsRoutes = require('./routes/flights');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/flights', flightsRoutes);
//app.use('/books', flightsRoutes);


app.listen(8000, () => {
    console.log('Listening on port 8000');
})


// GET /flights     => [{ id: 1, destinationAirline: 'Thai', departureDate: '2022-09-24T08:00:00Z', destination: 'BKK' }]
// /flights?destination=BKK

// POST /flights
// PUT /flights/:id
// DELETE /flights/:id

// Express passPort