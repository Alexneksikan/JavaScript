function power(val, pow) {
	return (pow != 1) ? val * power(val, pow-1) : val;
}

var n = prompt("Введите число: ", "");
var p = prompt("Введите степень: ", "");
n *= 1;
p *= 1;
document.write(n + " в степени " + p + " равно " + power(n, p) + "<br />");