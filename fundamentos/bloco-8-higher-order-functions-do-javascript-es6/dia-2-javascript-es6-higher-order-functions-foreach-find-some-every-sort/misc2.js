// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//     arrayOfPeople.filter((people) => (people.age !== 18))
// );

// console.log(verifyAgeDrive(objPeople));
// // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// const n1 = [1, 2, 4, 6, 8]
// const n2 = n1.filter((n) => n > 5)
// const n3 = n1.sort((a, b) => b - a)

// console.log(n2);
// console.log(n3);

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate', 'Jarbas'];
const prices = [2.99, 3.99, 1.5, 2, 'Gouveia'];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]
console.log('--------------');
const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
    if (numero < 5 && numero % 2 === 0) {
        paresMenoresQueCinco.push(numero);
    }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

let arr = [1, 2, 3, 4];
// for (let i of arr) {
//     console.log(i * 9);
// }

let alunos = ['Jarbas', 'Aline', 'Ingridy']
alunos.forEach((nome) => console.log(`Bem vinda(o), ${nome}.`));

const plank = arr.map((num) => num * 9);
console.log(plank);

// const tabuada = () => {
//     let resultado = [];

//     arr.forEach((numero) => {
//         resultado.push(numero * 10);
//     });
//     return resultado;
// }

// console.log(tabuada())

let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

let usersFullnames = users.map((element) => {
    return `${element.firstName} ${element.lastName}`
})

console.log(usersFullnames);