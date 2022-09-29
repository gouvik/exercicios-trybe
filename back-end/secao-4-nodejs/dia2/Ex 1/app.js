const express = require('express'); //importar a biblioteca;
const activities = require('./fsUtils/activities.json');

const app = express(); //Estanciar o Express numa constante;

app.use(express.json()); //prepara o sistema pra trabalhar com JSON;

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;

    const result = activities.find((act) => act.id === Number(id));

    if(!result) return res.status(404).end();

    res.status(200).json({ result })
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.body;

    let filteredAct = activities;

    if(status) {
        filteredAct = activities.filter((task) => task.status === status);
    };

    res.status(200).json({ activities: filteredAct });

});

app.get('/search/myActivities', (req, res) => {
    const { q } = req.query;

    let filteredAct = [];

    if(q) {
        filteredAct = activities.filter(({ description }) => description.includes(q));
    };

    res.status(200).json({ activities: filteredAct });

});



module.exports = app;