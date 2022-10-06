const express = require('express');

const app = express();
const morgan = require('morgan');
const validateName = require('./middlewares/nameCredential');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require("./middlewares/validateDescription");
const validateCreatAt = require("./middlewares/validateCreatedAt");
const credencial = require('./middlewares/credencial');
require("express-async-errors");

app.use(express.json());
app.use(morgan('dev'));

app.get('/', credencial, (_req, res) => {
    res.status(200).send("<h1>Oi, mundo</h1>")
});

app.post("/activities",validateCreatAt, validateDescription, validatePrice, validateName, (_req, res) => {
    res.status(201).json({ message: "Tarefa inserida com sucesso!" })
});

app.use((_req, res) => res.sendStatus(404));

module.exports = app;