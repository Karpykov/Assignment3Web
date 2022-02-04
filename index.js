//Task 1
var myName = "My name is Ali";
alert(myName);
var writed_name = prompt("What is your name?");
var corrected_name1 = writed_name.slice(0, 1);
var corrected_name2 = writed_name.slice(1, writed_name.length);
alert("Nice to meet you " + corrected_name1.toUpperCase() + corrected_name2.toLowerCase());

//Task 4
function lifeInWeeks(age) {
	var currentAge = prompt("Please Enter Your Current Age: ");
	var daysPassed = currentAge * 365;
	var weeksPassed = currentAge * 52;
	var monthsPassed = currentAge * 12;
	var daysLimit = 90 * 365;
	var weeksLimit = 90 * 52;
	var monthsLimit = 90 * 12;
	var remainingDays = daysLimit - daysPassed;
	var remainingWeeks = weeksLimit - weeksPassed;
	var remainingMonths = monthsLimit - monthsPassed;
	alert("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
}
lifeInWeeks();

//Task 5
window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
	let height = parseInt(document.querySelector("#height").value);
	let weight = parseInt(document.querySelector("#weight").value);
	let result = document.querySelector("#result");
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	else {
		let bmi = (weight / ((height * height) / 10000)).toFixed(2);
		if (bmi < 18.5) result.innerHTML = `Your BMI is: <span>${bmi}</span> so you are underweight.`;
		else if (bmi >= 18.5 && bmi < 24.9)
			result.innerHTML = `Your BMI is: <span>${bmi}</span> so you have a normal weight.`;
		else result.innerHTML = `Your BMI is: <span>${bmi}</span> so you are overweight.`;
	}
}

//Task 6
function check_leapyear() {
	var year;
	year = document.getElementById("year").value;
	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
		alert(year + " leap year");
	}
	else {
		alert(year + " not leap year");
	}
}

//Task 7
var myShows = ["Aidana is going to buy luch today!", "Bekbolat is going to buy luch today!", "Mariya is going to buy luch today!", "Aleksandr is going to buy luch today!", "Diana is going to buy luch today!"];

function getRandomIndex(items) {
	return Math.floor(Math.random() * items.length);
}

for (var i = 1; i < 2; i++) {
	var removedItem = myShows.splice(getRandomIndex(myShows), 1);
	document.writeln(removedItem);
}

//Task 8
var n1 = 0, n2 = 1, next_num, i;
var num = parseInt(prompt("Enter the limit for Fibonacci Series: "));
document.write("<br>Fibonacci Series: ");

for (i = 1; i <= num; i++) {
	document.write(" <br> " + n1);
	next_num = n1 + n2;
	n1 = n2;
	n2 = next_num;
}


