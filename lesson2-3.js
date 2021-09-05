var a = prompt("Введите число а: ", "");
var b = prompt("Введите число b: ", "");
if (a >=0 && b >= 0) {
  document.write(a + " - " + b + " = " + (a - b));
} else if (a < 0 && b < 0) {
  document.write(a + " * " + b + " = " + (a * b));
} else {
  a = a * 1;
  b = b * 1;
  document.write(a + " + " + b + " = " + (a + b));
}