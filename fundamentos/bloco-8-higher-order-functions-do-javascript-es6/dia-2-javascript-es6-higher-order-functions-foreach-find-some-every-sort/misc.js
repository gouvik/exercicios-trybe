// Método forEach

/*const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((email) => {
    return showEmailList(email)
});
*/

// Método Find

/*const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
*/

/* const numbers = [19, 21, 30, 3, 45, 22, 15];


const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5())*/

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//     // Adicione seu código aqui:
//     return names.find((name) => {
//         return name.length > 5;
//     })
// }

// console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic (id) {
//     // Adicione seu código aqui
//     return musicas.find((msc) => {
//         return msc.id === id;
//     });
// }
// console.log(findMusic('31031685'))

/* Array.some e Array.every */

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// console.log('-------------');

// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//     Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((str) => {
        return str === name
    })
    //Adicione seu código aqui
}

// console.log(hasName(names, 'Bbul'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
    return arr.every((pessoas) => {
        return pessoas.age >= minimumAge;
    })
    //Adicione seu código aqui
}

// console.log(verifyAges(people, 18));

/* Array.sort */

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
// console.log(food);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]//  

// se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir: 

const points = [40, 100, 1, 5, 25];

points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

function compare (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}
console.log(people.sort(compare));

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

function compareReverse (a, b) {
    if (a.age > b.age) {
        return -1;
    }
    if (a.age < b.age) {
        return 1;
    }
    return 0;
}

console.log(people2.sort(compareReverse));