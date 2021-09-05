function addition(x, y) {
	return x + y;
}

function subtraction(x, y) {
	return x - y;
}

function multiplication(x, y) {
	return x * y;
}

function division(x, y) {
	return x / y;
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "addition":
			return addition(arg1,arg2);
			break;
		case "subtraction":
			return subtraction(arg1,arg2);
			break;
		case "multiplication":
			return multiplication(arg1,arg2);
			break;
		case "division":
			return division(arg1,arg2);
			break;
		default:
			return "Error operation";
	}
}

var a = prompt("Введите число а: ", "");
var b = prompt("Введите число b: ", "");
a *= 1;
b *= 1;
document.write("Числа: " + a + " и " + b + "<br />");
document.write(mathOperation(a, b, "addition") + "<br />");
document.write(mathOperation(a, b, "subtraction") + "<br />");
document.write(mathOperation(a, b, "multiplication") + "<br />");
document.write(mathOperation(a, b, "division") + "<br />");