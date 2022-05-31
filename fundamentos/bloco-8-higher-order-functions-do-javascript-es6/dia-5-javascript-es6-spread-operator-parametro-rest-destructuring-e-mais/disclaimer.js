/* Spread Operator */


const array = ['Jarbas', 'Maria Isis', 'Brian', 'Rael']

function dados (d1, d2, d3, d4) {
    return `Meu nome é ${d1} e sou pai da ${d2}, do ${d3} e do ${d4}.`
}
// console.log(dados(...array));

// console.log(...array);

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'laranja', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['calda de morango', 'chochoball', 'M & M'];

const fruitSalad = (fruit, additional) => {
    const mix = [...fruit, ...additional];
    // const mix2 = fruit.concat(additional);
    // Esreva sua função aqui
    return mix;
};

// console.log(fruitSalad(specialFruit, additionalItens));

/* Fim Spread Operator */

// Parâmetro Rest

function quantosParams (...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}

// console.log(quantosParams(0, 1, 2));
// console.log(quantosParams('string', null, [1, 2, 3], {}));


const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);


// console.log(sum(4, 7, 8, 9, 60)); // 88

const sum2 = (...arg) => arg.reduce((acc, curr) => acc + curr, 0)


// console.log(sum2(2, 4, 2, 2, 10));

// Object Destructuring

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek // sintaxe de desestruturação

// console.log(workDays);
// console.log(weekend);

const weekdays = [...workDays, ...weekend];
// console.log(weekdays);

//Para fixar:


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

// const { name: username, age, nationality } = user; //Alteração no nome da chave 'name' para 'username';
const { profession, squad, squadInitials } = jobInfos

const userInfo = { ...user, ...jobInfos }; // Por se tratar de objetos, deve-se invocá-los com os bigodes.

// console.log(userInfo);

// console.log(`Hi, my name is ${username}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

//Array destructuring

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1]('banana'); // Olá

// console.log(saudacoes.length);

const [zero, um] = saudacoes;

/*  Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. */
// um(zero);

/* Lógica utilizada */

const teste = [true, false, 5, 'string', texto => console.log(texto)];

// teste[4]('caraca muleke')

const [p0, p1, p2, p3, p4] = teste;

// p4('caraka doidjo')


// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]

// console.log(comida, animal, bebida);

let numerosPares = [1, 2, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, , , , ...numerosPares] = numerosPares // Na resolução, cada ',' pula uma posição no array.
// console.log(numerosPares);

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};

let { nationality2 = 'Brazilian' } = person;
person.nationality2 = 'U.S Person'

// console.log(person);

/* Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian. */

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person2 = {
    firstName: 'João',
    lastName: 'Jr II',
    //  nationality: 'Russian',

};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person2
// console.log(person2.nationality);

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person2));

/* Property Shorthand */

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

/* Default Parameters */

/* Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
 */

const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value;
};

console.log(multiply(8));