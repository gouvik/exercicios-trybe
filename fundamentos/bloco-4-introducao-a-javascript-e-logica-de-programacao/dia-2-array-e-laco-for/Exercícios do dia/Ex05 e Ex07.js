/* Utilizando for, 
descubra qual o maior valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

/* o valor da variável maiorValor poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. 
Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. 
Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1 */

for (let index = 0; index < numbers.length; index += 1) {
	// console.log(`Índice: ${index}`);

	if (numbers[index] > higherNumber) {
		higherNumber = numbers[index];
	}
}
let lesserNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] < lesserNumber) {
		lesserNumber = numbers[i];
	}
}
console.log(
	`O maior número é: ${higherNumber} e o menor número é ${lesserNumber}.`
);
