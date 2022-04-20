let food = ["hamburguer", "bife", "acarajé"];
for (let value of food) {
	console.log(value);
}


function techList(lista,name) {
	if (lista.length === 0) {
		return "Vazio!";
	}
    let array = []
	for (let index of lista) {
		array.push(index)
	}
console.log(array)
}
techList(["hamburguer", "bife", "acarajé"]);

//console.log(techList());