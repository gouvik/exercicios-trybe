const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];

const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
};

const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name
}));

// console.log(reportBetter(estudantes));

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
    return ((bigger > number) ? bigger : number);
}

const bigger = numbers.reduce(getBigger, 0);

// console.log(bigger);

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = array => array.filter((element) => element % 2 === 0);
const somador = (acc, curr) => acc + curr;
const sumNumbers = () => pares(numbers2).reduce(somador);


// console.log(sumNumbers(numbers2));

/* Solução apenas com reduce */

const somatory = array => array.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc);

// console.log(somatory(numbers2));

const bestClass = (array) => {
    return array.reduce((acc, curr) => {
        if (acc.nota > curr.nota) {
            return acc;
        }
        else {
            return curr;
        }
    })
}

const reportBestClass = () => {
    return estudantes.map((student) => ({
        name: student.nome,
        materia: student.materias.reduce(getBestClass).name
    }))
}


// console.log(reportBestClass(estudantes));

const bolsa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let add = value => value + 1;
let onlyEven = value => value.filter((n) => n % 2 == 0);
let copy = bolsa.map(add).filter((n) => n % 2 == 0);
// let copyEven = onlyEven(bolsa)

console.log(copyEven);