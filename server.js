/*
Chungon Tse
Summer 2023
*/
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const MoviesDB = require("./modules/moviesDB.js");
const db = new MoviesDB();

// Initializing the app
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//home
app.get('/', (req, res) => {
    res.json({ message: 'API Listening' });
});

app.use((req, res) => {
    res.status(404).json({ message: "Resource not found" });
  });