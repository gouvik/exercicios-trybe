/*Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [23, 54, 6, 20, 70, 8, 100, 2, 36, 28];
let contadorImpar = [];
let counter = 0;

for (let index = 0; index < numbers.length; index += 1) {
	if (numbers[index] % 2 !== 0) {
		contadorImpar.push(numbers[index]);
		counter += 1;
	}
}
if (contadorImpar == 0) {
	console.log("Nenhum valor ímpar encontrado.");
} else {
	if (counter === 1) {
		console.log(`${counter} número impar encontrado.`);
	} else {
		console.log(`${counter} números ímpares encontrados.`);
	}
}
