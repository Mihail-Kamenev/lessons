"use strict"

/*document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})*/
let someVar = 0
++someVar

if (someVar) {
	console.log(someVar)
}
for (let i = 1; i <= 10; ++i) {
	console.log(`Пункт №${i}`);
}
// ==========================================================================
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
// ================================================================================

function calcDivision(a, b) {
	if (a === undefined) {a = 0;
	} 
	if (b === undefined || b === 0 || typeof b === `string`) {
	  b = 1;
	}
	return a / b
}
function showMessage(someText = "Text") {
	console.log(someText)
}
showMessage()
showMessage(calcDivision(20, 3))
showMessage(calcDivision(20, "k"))
showMessage(calcDivision("0", 5))
showMessage(calcDivision("0", 0))
// ================================================================================

let someArray = [7, 8, 28, "0", 10]
if (Array.isArray(someArray)) {
	for (let i = 0; i < someArray.length; ++i) {
		if (someArray[i] === 10 ) {
			console.log(someArray[i])
		}
	}
}