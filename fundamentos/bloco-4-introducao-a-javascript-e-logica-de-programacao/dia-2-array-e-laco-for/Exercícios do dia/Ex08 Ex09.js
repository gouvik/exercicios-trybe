/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

let arr = [];
for (let i = 1; i <= 25; i += 1) {
	arr.push(i);
}

console.log(`O array é igual a ${arr}`);

console.log("--------------------------");

for (let index = 0; index < arr.length; index += 1) {
	console.log(`A divisão de ${arr[index]} por 2 resulta: ${arr[index] / 2}`);
}
console.table(arr);
