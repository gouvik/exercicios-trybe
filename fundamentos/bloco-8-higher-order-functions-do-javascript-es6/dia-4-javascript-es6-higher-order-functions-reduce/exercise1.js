// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten () {
    return arrays.reduce((acc, curr) => {
        return acc.concat(curr);
    })
    // escreva seu código aqui
} console.log(flatten());