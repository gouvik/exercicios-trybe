/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três constantes com os valores
que serão comparados.*/

const a = 50;
const b = 60;
const c = 70;

if (a > b && a > c) {
	console.log(`O elemento A é o maior entre os números.`);
} else if (a < b && b > c) {
	console.log(`O elemento B é o maior entre os números.`);
} else {
	console.log("O elemento C é o maior entre os números.");
}
