const main = document.querySelector('#main');

let cart = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function selectedGood(product, image, price, quantity) {
    this.product = product;
    this.image = `img5/${image}.jpg`;
    this.price = price;
    this.quantity = quantity
}

cart.push(
    new selectedGood('Hopper', 'image1', 25000, 1)
);
cart.push(
    new selectedGood('Seaford', 'image2', 37000, 2)
);
cart.push(
    new selectedGood('Krabi', 'image3', 30000, 2)
);
cart.push(
    new selectedGood('Lentus', 'image4', 46000, 4)
);
cart.push(
    new selectedGood('Roadkiller', 'image5', 27000, 2)
);
cart.push(
    new selectedGood('Lone Ranger', 'image6', 45000, 5)
);


// выводим перечень товаров в корзине, если корзина не пуста
if (cart == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
    for (const iterator of cart) {
        main.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
        <table>
            <tr>
            <td rowspan="3"><img align="center" src="${iterator.image}"></td>
            <td width=200px";>Товар - ${iterator.product}</td>
            </tr> 
            <tr><td width=200px">Цена - ${iterator.price} руб</td></tr>
            <tr><td width=200px">Количество - ${iterator.quantity}</td></tr>
        </table>
        </div>`);
    }
}

// возвращает итоговую сумму
function finalChart(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + shoppingCart.quantity
    }, 0)
};

// возвращает итоговое количество
function finalCost(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};

// выводим итоговое количество и сумму
if (cart != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend',
        `<hr><div class="prod_item total">В корзине: ${finalChart(cart)} товаров на сумму 
    ${finalCost(cart)} рублей</div>`);
}