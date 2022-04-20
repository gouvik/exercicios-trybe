function createDaysOfTheWeek() {
	const weekDays = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	const weekDaysList = document.querySelector(".week-days");

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement("li");
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function dezDaysList() {
	const dezDaysList = [
		29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	const numberCount = document.querySelector("#days"); // para onde vai meu appendChild

	for (let index = 0; index < dezDaysList.length; index += 1) {
		const numberOfDay = dezDaysList[index];
		const numberOfDayListItem = document.createElement("li");

		if (numberOfDay === 24 || numberOfDay === 31) {
			numberOfDayListItem.className = "day holiday";
		} else if (
			numberOfDay === 4 ||
			numberOfDay === 11 ||
			numberOfDay === 18
		) {
			numberOfDayListItem.className = "day friday";
		} else if (numberOfDay === 25) {
			numberOfDayListItem.className = "day friday holiday";
		} else {
			numberOfDayListItem.className = "day";
		}

		//numberOfDayListItem.className = "day";
		numberOfDayListItem.innerHTML = numberOfDay;

		numberCount.appendChild(numberOfDayListItem);
	}
}
dezDaysList();

function criarBotaoFeriados(Feriados) {
	const buttonHollidayLocation = document.querySelector(".buttons-container");

	const buttonCreator = document.createElement("button");
	buttonCreator.id = "btn-holiday";
	buttonCreator.innerText = Feriados;

	buttonHollidayLocation.appendChild(buttonCreator);
}

criarBotaoFeriados("Feriados");

function holidayHighlight() {
	let getHolydayButton = document.querySelector("#btn-holiday");
	let getHolydays = document.querySelectorAll(".holiday");
	let backgroundColor = "rgb(238,238,238)";
	let setNewColor = "white";

	getHolydayButton.addEventListener("click", function () {
		for (let index = 0; index < getHolydays.length; index += 1) {
			if (getHolydays[index].style.backgroundColor === setNewColor) {
				getHolydays[index].style.backgroundColor = backgroundColor;
			} else {
				getHolydays[index].style.backgroundColor = setNewColor;
			}
		}
	});
}

holidayHighlight();

function buttonFriday(buttomName) {
	let buttonContainer = document.querySelector(".buttons-container");
	let newFridayButton = document.createElement("button");
	newFridayButton.id = "btn-friday";
	newFridayButton.innerText = buttomName;
	buttonContainer.appendChild(newFridayButton);
}
buttonFriday("Sextou!");

function sextooou() {
	let getFridayButton = document.querySelector("#btn-friday");
	let getFridays = document.querySelector(".friday");
    let setNewColor = "white";
    	let backgroundColor = "rgb(238,238,238)";


    getFridayButton.addEventListener("click", function() {
for(let index = 0; index < getFridays.length ; index += 1){
    if(getFridays[index].style.backgroundColor === setNewColor){
        getFridays[index].style.backgroundColor = backgroundColor;
    } else {
        getFridays[index.style.backgroundColor = setNewColor]
    }


}

    sextooou();