function contar() {
	let inicio = 1;
	let fim = 0;
	let passo = 2;

	if ((inicio === 0) | (fim === 0) | (passo === 0)) {
		console.log("Os valores inseridos precisam ser maior que 0");
	} else {
		if (inicio < fim) {
			for (let c = inicio; c <= fim; c += passo) {
				console.log(`${c}`, "kaka");
			}
		}
	}
}
contar();
