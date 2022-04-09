// /* O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24*/

// // console.log(10!)

// let numero = 4;
// let arrayFatorial = [];

// for (let i = numero; i >= 1; i--) {
// 	arrayFatorial.push(i);
// }

// for (let index = 0; index < arrayFatorial.length; index += 1) {
// 	//console.log(arrayFatorial[index])
//     console.log(arrayFatorial *[index-1]);
// }

// console.log(arrayFatorial)
let fatorial = 1;
function factorial(n) {
	for (let index = n; index > 0; index -= 1) {
		fatorial = fatorial * index;
	}
	return fatorial;
}

factorial(4);
// console.log(fatorial);
