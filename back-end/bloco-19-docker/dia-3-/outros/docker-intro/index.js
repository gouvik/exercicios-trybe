const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hi, this is my Docker test with Compose hehe!")
});

app.listen(3000);