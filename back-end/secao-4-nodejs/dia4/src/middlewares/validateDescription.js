module.exports = (req, res, next) => {
    // const requiredProperties = ["createdAt", "rating", "difficulty"];

    // if(!requiredProperties.every((property) => property in req.body)) {
    //     return res.status(400).json({
    //         message: `O campo ${property}`
    //     });
    // }

    const { description } = req.body;

    if (!description){
        return res.status(400).json({ 
            message: "O campo de descriçao é obrigatório!" 
        });
    }

    if(!description.createdAt) {
        return res.status(400).json({
            message: "O campo createdAt é obrigatório!"
        });
    }

    if(!description.rating) {
        return res.status(400).json({
            message: "O campo rating é obrigatório!"
        });
    }

    if(!description.difficulty) {
        return res.status(400).json({
            message: "O campo difficulty é obrigatório!"
        });
    }

    next();
};

// De olho na dica👀: O código acima pode ser um problema pela quantidade de linhas dentro do código da função se você estiver com o ESLint configurado. Para resolver esse problema e ter um código limpo e reaproveitável, você pode construir uma função dedicada para as validações de todos os campos. Veja o exemplo abaixo:

// Arquivo middlewares/validateDescription.js

// // middlewares/validateDescription.js

// const validateDescription = (descriptionValue, res, value) => {
//   if (!descriptionValue) {
//     return res.status(400).json(
//       { message: `O campo ${value} é obrigatório` },
//     );
//   }
// };

// module.exports = (req, res, next) => {
//   const { description } = req.body;

//   return validateDescription(description, res, 'description')
//     || validateDescription(description.createdAt, res, 'createdAt')
//     || validateDescription(description.rating, res, 'rating')
//     || validateDescription(description.difficulty, res, 'difficulty')
//     || next();
// };