module.exports = (req, res, next) => {
    const { price } = req.body;

    if(!price) {
        res.status(400).json({
            message: "O campo name é obrigatório"
        });
    };

    if(isNaN(price) || price < 0) {
        res.status(400).json({
            message: "O campo price deve ser um número maior ou igual a zero"
        });
    };

    next();
};