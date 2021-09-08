function countCartPrice(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i][1] * cart[i][2];
    }
    return sum;
}

var myCart = [
    ['Hopper', 25000, 1],
    ['Seaford', 37000, 2],
    ['Krabi', 30000, 2],
    ['Lentus', 46000, 4],
    ['Roadkiller', 27000, 2],
    ['Lone Ranger', 45000, 5]
]

document.write('Содержимое корзины:<br /><br />');
for (let i = 0; i < myCart.length; i++) {
    document.write(`${myCart[i][0]}: ${myCart[i][2]} шт. по ${myCart[i][1]} руб. <br />`);
}

document.write(`<br />Стоимость корзины: <b> ${countCartPrice(myCart)} </b>руб.`);