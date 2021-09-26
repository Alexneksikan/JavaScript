function good(product, image, description, price) {
    this.product = product;
    this.image = `img6/${image}.jpg`;
    this.description = description;
    this.price = price;
}

let catalogList = []
catalogList.push(new good('Hopper', 'image1s', 'Односкоростная модификация самого компактного велосипеда из модельного ряда Shulz.', 25000));
catalogList.push(new good('Seaford', 'image2s', 'Велосипед выдержит многодневный тур по загородным дорогам.', 37000));
catalogList.push(new good('Krabi', 'image3s', 'Самый большой складной велосипед в линейке Shulz.', 30000));
catalogList.push(new good('Lentus', 'image4s', 'Lentus специально создан для высоких нагрузок и тяжелых условий эксплуатации.', 46000));
catalogList.push(new good('Roadkiller', 'image5s', 'Современный дорожный велосипед с дисковыми тормозами.', 27000));
catalogList.push(new good('Lone Ranger', 'image6s', 'Велосипед для тех, кто часто катается по лесам, полям и холмам', 45000));

function drawGoods() {
    catalogList.forEach(function (good, i) {
        drawGood(good, i);
    })
}

const $catalog = document.querySelector('#catalog');

function drawGood(good, id) {
    $catalog.insertAdjacentHTML('beforeend',
        `<div id="good-${id}" class="prod_good">
        <div class="good">
            <div class="image"><img src="${good.image}"></div>
            <div class="description"><h4>${good.product}</h4>${good.description}
                <div class="price">Цена: 
                    <span>${good.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
drawGoods(catalogList);

let shoppingCart = [];
let emptyCart = 'Ваша корзина пуста.';

function cartGood(product, price) {
    this.product = product;
    this.price = price;
}

function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.price;
    }, 0);
}

function drawTotal(shoppingCart) {
    const $cart = document.querySelector('#cart');
    $cart.textContent = '';

    if (shoppingCart == 0) {
        $cart.insertAdjacentHTML('beforeend', `<div class="total">${emptyCart}</div>`);
    } else {
        $cart.insertAdjacentHTML('beforeend',
            `<div class="total">
            <p>В корзине товаров: ${shoppingCart.length} <br />
            на сумму: ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drawTotal(shoppingCart);

$catalog.addEventListener('click', function (e) {
    if (e.target.className === 'button') {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalogList[id];
        shoppingCart.push(new cartGood(choice.product, choice.price));

        drawTotal(shoppingCart);
    }
});

const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function (e) {
    $popup.style.display = 'none';
});

$catalog.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" class="scale">`);
    }
});