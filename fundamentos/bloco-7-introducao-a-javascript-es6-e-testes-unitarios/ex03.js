const lesson1 = {
	materia: "Matemática",
	numeroEstudantes: 20,
	professor: "Maria Clara",
	turno: "manhã",
};

const lesson2 = {
	materia: "História",
	numeroEstudantes: 20,
	professor: "Carlos",
};

const lesson3 = {
	materia: "Matemática",
	numeroEstudantes: 10,
	professor: "Maria Clara",
	turno: "noite",
};

function night(obj, chave, valor) {
	return (obj[chave] = valor);
}

night(lesson2, "turno", "noite");

function listKeys(obj) {
	return Object.keys(obj);
}

const objTamanho = (obj) => {
	return Object.keys(obj).length;
};

const objValue = (obj) => {
	return Object.values(obj);
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function studentsNumber(obj) {
	let total = 0;
	const array = Object.keys(obj);
	for (index in array) {
		total += obj[array[index]].numeroEstudantes;
	}
	return total;
}

function getValueByNumber(obj, position) {
	let objeto = Object.values(obj);
	return objeto[position];
}

function verifyPair(obj, key, value) {
	const arr = Object.entries(obj);
	console.log(arr);
	let isEqualTo = false;
	for (let index in arr) {
		if (arr[index][0] === key && arr[index][1] === value) {
			isEqualTo = true;
		}
	}
	return isEqualTo;
}
/*
console.log(verifyPair(lesson3, "turno", "noite"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false*/

/*
const lesson1 = {
    materia: "Matemática",
	numeroEstudantes: 20,
	professor: "Maria Clara",
	turno: "manhã",
}; 
*/
/*
const getNumberOfStudents = (obj) => {
	let total = 0;
	const array = Object.keys(obj);
	console.log(array);
	for (index in array) {
		if (obj[array[index]].materia === "Matemática") {
			total += obj[array[index]].numeroEstudantes;
		}
	}
	return total;
};
console.log(getNumberOfStudents(allLessons));
*/
const getInfo = (obj, name) => {
	const allLessons = [];
	let allStudent = 0;
	const array = Object.values(obj);
	for (index in array) {
		if (array[index].professor === name) {
			allLessons.push(array[index].materia);
			allStudent += array[index].numeroEstudantes;
		}
	}
	return { lessons: allLessons, estudantes: allStudent };
};

const createReport = (allLessons, name) => {
	const report = {};
	report.professor = name;
	Object.assign(report, getInfo(allLessons, name));
	return report;
};
console.log(createReport(allLessons, "Maria Clara"));
