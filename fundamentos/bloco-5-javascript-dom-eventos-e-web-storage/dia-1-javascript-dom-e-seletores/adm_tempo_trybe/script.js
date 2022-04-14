let headerColor = document.querySelector("#header-container");
headerColor.style.background = "green";

let emergencyTasksColorChanger =
	document.getElementsByClassName("emergency-tasks");
emergencyTasksColorChanger[0].style.background = "#F55353";

function titleEmergency() {
	let titleEmergency = document.querySelectorAll(".emergency-tasks h3");
	for (let index = 0; index < titleEmergency.length; index++) {
		titleEmergency[index].style.background = "purple";
	}
}
titleEmergency();

let noEmergencyTasksColorChanger =
	document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasksColorChanger[0].style.background = "#143F6B";

function titleNoEmergency() {
	const titleNoEmergency = document.querySelectorAll(".no-emergency-tasks h3");
	for (let index = 0; index < titleNoEmergency.length; index++) {
		titleNoEmergency[index].style.background = "#FEB139";
	}
}
titleNoEmergency();

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
