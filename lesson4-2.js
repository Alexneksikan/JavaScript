function selectedGood(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.showGood = function () {
        return `${this.name}: ${this.quantity} шт. по ${this.price} руб.`;
    }
}

var cart = []

cart.push(
    new selectedGood('Hopper', 25000, 1)
);
cart.push(
    new selectedGood('Seaford', 37000, 2)
);
cart.push(
    new selectedGood('Krabi', 30000, 2)
);
cart.push(
    new selectedGood('Lentus', 46000, 4)
);
cart.push(
    new selectedGood('Roadkiller', 27000, 2)
);
cart.push(
    new selectedGood('Lone Ranger', 45000, 5)
);

console.log(cart);

function countCartPrice(myCart) {
    return myCart.reduce(
        function (sum, myCart) {
            return sum + (myCart.price * myCart.quantity)
        }, 0)
};


document.write('<h4>Содержимое корзины:</h4>');
cart.forEach(val => {
    document.write(`${val.showGood()}<br />`);
});

document.write(`<br />Стоимость корзины: <b> ${countCartPrice(cart)} </b> руб.`);