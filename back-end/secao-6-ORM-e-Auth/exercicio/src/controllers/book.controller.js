const bookService = require('../services/book.service');

const ERROR_500 = "Houton? There's something wrong";
const BOOK_NOT_FOUND = "Houston? We (still) can't find a book with this ID";

// const getAll = async (_req, res) => {
//     try {
//         const books = await bookService.getAll();
//         return res.status(200).json(books);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: ERROR_500 });
//     }
// };

const getAll = async (req, res) => {
    const { author } = req.query;

    let books;

    try {
        if(author) {
            books = await bookService.getByAuthor(author);
        } else {
            books = await bookService.getAll();
        };
        return res.status(200).json(books);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: ERROR_500 });
    }
};

const getById = async (req, res) => {
   try {
    const { id } = req.params;
    const book = await bookService.getById(id);

    if(!book) return res.status(404).json({ message: BOOK_NOT_FOUND });

    return res.status(200).json(book);
   } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: ERROR_500 });
   }
};

const getByAuthor = async (req, res) => {
    try {
        const { author } = req.body;
        const authorGot = await bookService.getByAuthor(author);
        if(!authorGot) return res.status(404).json({ message: "No author found" });
        return res.status(200).json(authorGot);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: ERROR_500 });
    }
};

const createBook = async (req, res) => {
    const { title, author, pageQuantity, publisher } = req.body;
    const book = await bookService.createBook({ title, author, pageQuantity, publisher });
  
    res.status(201).json(book);
  };

const updateBook = async (req, res) => {
try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;

    const updatedBook = await bookService.updateBook(id, title, author, pageQuantity, publisher);

    if(!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated' });

} catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: ERROR_500 });
}

};

const removeBook = async (req, res) => {
    try {
        const { id } = req.params;
        const removedBook = await bookService.removeBook(id);
        if(!removedBook) return res.status(404).json({ message: 'Book not found' });
        return res.status(204).end();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: ERROR_500 });
    }
}

module.exports = {
    getAll,
    getById,
    getByAuthor,
    createBook,
    updateBook,
    removeBook,
};