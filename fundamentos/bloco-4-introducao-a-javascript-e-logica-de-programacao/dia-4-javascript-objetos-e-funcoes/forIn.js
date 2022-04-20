let pizzas = {
	sabor: "frango com catupiry",
	preco: 39.99,
	borda: true,
};

for (let key in pizzas) {
	console.log(pizzas[key]);
}

let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
	console.log(key);
}
