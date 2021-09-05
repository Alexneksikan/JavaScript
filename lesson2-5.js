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

var a = prompt("Введите число а: ", "");
var b = prompt("Введите число b: ", "");
a *= 1;
b *= 1;
document.write("Числа: " + a + " и " + b + "<br />");
document.write("Сумма = " + addition(a, b) + "<br />");
document.write("Разность = " + subtraction(a, b) + "<br />");
document.write("Произведение = " + multiplication(a, b) + "<br />");
document.write("Частное = " + division(a, b) + "<br />");