/*  Crie uma função que calcule a área e o perímetro de um 
quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/

function calcularArea(base, altura) {
	let quadrilátero = {
		perimetro: base * 2 + altura * 2,
		area: base * altura,
	};
	return quadrilátero;
}

console.log(calcularArea(2, 4));

/* Crie uma função que, dado um array de números inteiros, 
retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/
function contaParEImpar(intervalo) {
	let pares = 0;
	let impares = 0;
	let array = [];
	for (let index = 0; index < 6; index += 1) {
		array.push(Math.floor(Math.random() * intervalo));
	}
	for (let index = 0; index < array.length; index += 1) {
		if (array[index] % 2 === 0) {
			pares = pares + 1;
		} else {
			impares += 1;
		}
	}
	console.log("-------------------");
	console.log(`O conjunto gerado foi: ${array}.`);
	console.log(`Pares: ${pares}`);
	console.log(`Ímpares: ${impares}`);
	console.log("-------------------");
}

contaParEImpar(50);

/*  Crie uma função que receba uma string word e 
outra string ending. Verifique se a string ending 
é o final da string word. Considere que a string 
ending sempre será menor que a string word. 

Valor de teste: 'trybe' e 'be'
valor esperado no retorno da função: true
Dica: Use o SPLIT. */
