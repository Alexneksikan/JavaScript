function numberToObject(num) {
    var numObject = {};
    if (num < 0 || num > 999) {
        document.write(`Число ${num} не соответствует условию задачи<br />`);
    }
    else {
        document.write(`Число: ${num}<br />`);
        var num1 = Math.trunc(num / 100);
        var num2 = Math.trunc((num - num1 * 100) / 10);
        var num3 = num % 10;
        item1 = 'сотни';
        item2 = 'десятки';
        item3 = 'единицы';
        numObject[item3] = num3;
        numObject[item2] = num2;
        numObject[item1] = num1;
        for (let it in numObject) {
            document.write(`${it}: ${numObject[it]} <br />`);
        }
    }
    return numObject;
}

var number = prompt("Введите число от 0 до 999: ", "");
console.log(numberToObject(number));
