let n = 8;
let inputLine = "";
let symbol = "*";
//Primeiro for é responsável por adicionar os asteriscos
for (let index = 0; index < n; index += 1) {
	inputLine = inputLine + symbol;
}

for (let index = 0; index < n; index += 1) {
	console.log(inputLine);
}
