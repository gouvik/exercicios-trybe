// title: deve ser do tipo DateType.STRING
// author: deve ser do tipo DateType.STRING
// pageQuantity: deve ser do tipo DateType.INTEGER
// createdAt: deve ser do tipo DateType.DATE
// updatedAt: deve ser do tipo DateType.DATE

const bookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
        publisher: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });
    return Book;
};

module.exports = bookModel;