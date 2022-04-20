/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem 
acima, incluindo seu nome. Valor esperado no console: */

let info = {
	personagem: "Margarida",
	origem: "Pato Donald",
	nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Seja bem-vinda, ${info.personagem}!`);
console.log(`-------------`);
/*2 - Insira no objeto uma nova propriedade com o nome de chave 
recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
Valor esperado no console:*/

info["recorrente"] = "Sim";
console.log(info.recorrente);
console.log(`-------------`);
for (let key in info) {
	console.log(key);
}
console.log(`-------------`);

for (let key in info) {
	console.log(info[key]);
}

console.log(`-------------`);

let info2 = {
	personagem: "Tio Patinhas",
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: "O último MacPatinhas",
	recorrente: "Sim",
};
console.log(`-------------`);

for (let propriedades in info) {
	if (
		propriedades === "recorrente" &&
		info[propriedades] === "Sim" &&
		info2[propriedades] === "Sim"
	) {
		console.log("Ambos são recorrentes");
	} else {
		console.log(info[propriedades] + " e " + info2[propriedades]);
	}
}

let leitor = {
	nome: "Julia",
	sobrenome: "Pessoa",
	idade: 21,
	livrosFavoritos: [
		{
			titulo: "O Pior Dia de Todos",
			autor: "Daniela Kopsch",
			editora: "Tordesilhas",
		},
	],
};

console.log(
	`O livro favorito da ${leitor.nome + " " + leitor.sobrenome} se chama ${
		leitor.livrosFavoritos[0].titulo
	}`
);

console.log("---------------------");

/*7 - Adicione um novo livro favorito na chave livrosFavoritos , 
que é um array . Atribua a esta chave um objeto contendo as seguintes 
informações:
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
*/

leitor.livrosFavoritos.push({
	titulo: "Harry Potter e o Prisioneiro de Azkaban",
	autor: "JK Rowling",
	editora: "Rocco",
});

leitor.livrosFavoritos[2] = {
	titulo: "A Culpa é das Estrelas",
	autor: "Jhon Green",
	editora: "Intrinseca",
};

console.table(leitor.livrosFavoritos);
console.log("------------------");

console.log(
	`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`
);

// function ble(a, b) {
// 	let resultado = a + b;
// 	return resultado;
// }

// console.log(ble(5, 5));

// console.log(resultado);
