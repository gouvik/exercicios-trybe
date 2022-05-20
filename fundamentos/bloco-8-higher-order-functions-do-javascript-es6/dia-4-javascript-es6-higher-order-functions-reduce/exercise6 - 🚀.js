const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage () {
    // escreva seu código aqui
    const nameAndAverage = students.map((student, index) => {
        return {
            name: student,
            average: (grades[index].reduce((acc, curr) => {
                return acc + curr
            }, 0) / grades[index].length)
        }
    })


    return nameAndAverage;
}






// console.log(studentAverage());

const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];


const alunos = ['Jarbas', 'Brian', 'Isis'];
const notas = [[10, 10, 10, 10, 9], [8, 10, 9, 10, 10], [10, 10, 10, 10, 10]]

function mediaENome () {
    const dados = alunos.map((aluno, index) => ({
        name: aluno,
        média: notas[index].reduce((acc, curr) => acc + curr
            , 0) / notas[index].length
    })).sort((a, b) => {
        if (a.média > b.média) {
            return 1;
        }
        if (a.média < b.média) {
            return -1;
        }
        return 0
    })

    return dados;
}

console.log(mediaENome());