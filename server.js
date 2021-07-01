// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));
// Routes to table and waitlist APIs
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));





// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));