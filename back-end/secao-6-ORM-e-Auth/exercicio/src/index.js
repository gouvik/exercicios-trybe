const express = require('express');
const bookController = require('./controllers/book.controller');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (_req, res) => {
    res.status(200).json({ message: "It's working!" })
});

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.post('/books', bookController.createBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.removeBook);

app.get('/author', bookController.getByAuthor);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));