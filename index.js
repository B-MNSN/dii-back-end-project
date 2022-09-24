const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log('Listening on port 5000');
});
app.get('/users', (req, res) => {
    res.send('Get all users');
});
app.post('/users', (req, res) => {
    res.send('Create a new user');
});
app.put('/users', (req, res) => {
    res.send('Update a user');
});
app.delete('/users', (req, res) => {
    res.send('Delete a user');
});
