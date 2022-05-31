// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// escreva sum abaixo

const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => {
        return acc + curr
    })
}

console.log(sum(1, 2, 3, 4));