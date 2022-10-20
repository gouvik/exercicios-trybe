const { Book, Sequelize } = require('../models/');

// const getAll = async () => {
//     const books = await Book.findAll();

//     return books;
// };

const getAll = async () => {
    const books = await Book.findAll({
        order : [['title', 'ASC']],
    });

    return books;
};

const getById = async (id) => {
    const book = await Book.findByPk(id);

    return book;
};

const getByAuthor = async (author) => {
    const request = await await Book.findAll({
        where : { author : { [Sequelize.Op.like]: `%${author}%`} },
        order: [['title', 'ASC']]
    });
    return request;
}

const createBook = async ({ title, author, pageQuantity, publisher }) => {
    const book = await Book.create({ title, author, pageQuantity, publisher });
    return book;
  };

const updateBook = async(id, title, author, pageQuantity, publisher) => {
    const [ updatedBook ] = await Book.update(
        { title, author, pageQuantity, publisher }, { where: { id } }
    );
    return updatedBook;
};

const removeBook = async (id) => {
    const removedBook = await Book.destroy({
        where : { id }
    });
    return removedBook;
}

module.exports = {
    getAll,
    getById,
    getByAuthor,
    createBook,
    updateBook,
    removeBook,
}