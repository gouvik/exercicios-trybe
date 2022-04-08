const numbers = [10, 8, 7, 6, 5, 76, 13, 1, 43, 201];
console.table(numbers);
console.log(numbers[9]);
console.log(numbers.length);

for (let index = 0; index < numbers.length; index += 1) {
	console.log(
		"Eu sou o index",
		index,
		"e meu valor no array é",
		numbers[index]
	);
}
