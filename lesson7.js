function good(product, image, description, price) {
    this.product = product;
    this.image = image;
    this.description = description;
    this.price = price;
}

let catalogList = []

catalogList.push(new good('Hopper', ['./img7/image1s.jpg', './img7/image1s1.jpg', './img7/image1s2.jpg'], 'Односкоростная модификация самого компактного велосипеда из модельного ряда Shulz.', 25000));
catalogList.push(new good('Seaford', ['./img7/image2s.jpg', './img7/image2s1.jpg', './img7/image2s2.jpg'], 'Велосипед выдержит многодневный тур по загородным дорогам.', 37000));
catalogList.push(new good('Krabi', ['./img7/image3s.jpg', './img7/image3s1.jpg', './img7/image3s2.jpg'], 'Самый большой складной велосипед в линейке Shulz.', 30000));
catalogList.push(new good('Lentus', ['./img7/image4s.jpg', './img7/image4s1.jpg', './img7/image4s2.jpg'], 'Lentus специально создан для высоких нагрузок и тяжелых условий эксплуатации.', 46000));
catalogList.push(new good('Roadkiller', ['./img7/image5s.jpg', './img7/image5s1.jpg', './img7/image5s2.jpg'], 'Современный дорожный велосипед с дисковыми тормозами.', 27000));
catalogList.push(new good('Lone Ranger', ['./img7/image6s.jpg', './img7/image6s1.jpg', './img7/image6s2.jpg'], 'Велосипед для тех, кто часто катается по лесам, полям и холмам', 45000));

const $catalog = document.querySelector('#catalog');

function drawGoods() {
    catalogList.forEach(function (good, id) {
        let imagesHtml = good.image.map(function (src) {
            return `<img class="small_img" src="${src}"></img>`;
        }).join('');

        let html = `<div id="item-${id}" class="prod_item">
                 <div class="item">
                     <div class="image">${imagesHtml}</div>
                     <div class="description"><h4>${good.product}</h4>${good.description}
                         <div class="price">Цена: 
                             <span>${good.price}</span> руб.
                         </div>
                     </div>
                 </div>
                 <div class="sale">
                     <div data-id="${id}" class="button">В корзину</div>
                 </div>
             </div>`
        $catalog.insertAdjacentHTML('beforeend', html);
    })
}
drawGoods();

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

let $userAddr;
function drawTotal(shoppingCart) {
    const $cart = document.querySelector('#cart');
    $cart.textContent = '';

    if (shoppingCart == 0) {
        $cart.insertAdjacentHTML('beforeend', `<div class="total">${emptyCart}</div>`);
    } else {
        $cart.insertAdjacentHTML('beforeend',
            `<div class="total">
            <p>В корзине товаров: ${shoppingCart.length} 
            на сумму ${totalSumm(shoppingCart)} рублей.</p>
        </div>
        <div id="buy_hidden">
            <p class="buy" id="buy">Купить</p>
        </div>
        <div id="confirmHtml" class="confirmHtml">
            <p class="buy" id="confirm">Подтвердить</p>
        </div>
        <div id="messageHtml" class="confirmHtml">
            <p class="buy" id="message">Завершить</p>
        </div>
        `);

        const $buy_hidden = document.getElementById('buy_hidden');
        const $confirmHtml = document.getElementById('confirmHtml');
        const $messageHtml = document.getElementById('messageHtml');

        function showChart(id = 0) {
            for (const iterator of shoppingCart) {
                let chartHtml = `<div id="${id}" class="buy_hidden__item">${iterator.product} за ${iterator.price} руб.`;
                $buy_hidden.insertAdjacentHTML('afterbegin', `${chartHtml}
                <span data-id="${id}" class="buy_hidden__delete"> (удалить)</span></div>`);
                id++;
            }
        }
        showChart();

        const $buy = document.getElementById('buy');
        const $confirm = document.getElementById('confirm');
        const $message = document.getElementById('message');

        $buy.addEventListener('click', function () {
            $buy_hidden.style.display = 'none';
            $confirmHtml.style.display = 'flex';
            confirmDraw();
        });
        $confirm.addEventListener('click', function () {
            $confirmHtml.style.display = 'none';
            $messageHtml.style.display = 'flex';
            messageDraw();
            let inputAddr = document.getElementById('addr');
            $userAddr = inputAddr.value;
        });
        $message.addEventListener('click', function () {
            $messageHtml.style.display = 'none';
            shoppingCart = 0;
            drawTotal(shoppingCart);
            createConfirmWindow();
        });

        function confirmDraw() {
            let confirmHtml =
                `<p class="buy_hidden__item">Адрес доставки:</p>
            <div id="yandexmap"></div>
            <input id="addr" type="text" class="buy_hidden__confirm" placeholder="Введите адрес">`;
            $confirmHtml.insertAdjacentHTML('afterbegin', confirmHtml);

            // отрисовка яндексКарт
            var map;
            function initMap() {
                map = new ymaps.Map("yandexmap", {
                    center: [60.000915, 30.324680],
                    zoom: 16
                });
            }
            ymaps.ready(initMap);
        }
        function messageDraw() {
            let messageHtml =
                `<p class="buy_hidden__item">Комментарий к заказу:</p>
                <form class="form" action="#">
                    <form action="#">
                        <input id="text" class="buy_hidden__confirm" type="text" placeholder="Ваше имя"><br>
                        <input id="email" class="buy_hidden__confirm" type="email" placeholder="Ваш email"><br>
                        <textarea id="message" class="buy_hidden__confirm" cols="30" rows="5" placeholder="Ваш комментарий"></textarea><br>
                    </form>
                </form>`;
            $messageHtml.insertAdjacentHTML('afterbegin', messageHtml);
        }
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

const $cart = document.getElementById('cart');
$cart.addEventListener('click', function (e) {
    if (e.target.className === 'buy_hidden__delete') {
        const this_id = Number(e.target.getAttribute('data-id'));
        shoppingCart.splice(this_id, 1)
        drawTotal(shoppingCart);
    }
})

const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function (e) {
    $popup.style.display = 'none';
});

$catalog.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        imgArr = e.target.parentNode;
        let imgCnt = 0;
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${imgArr.children[imgCnt].getAttribute('src')}" class="scale">`);

        document.addEventListener('keydown', logKey);
        function logKey(e) {
            // if (e.keyCode == 'ArrowRight') {
            //     imgCnt++;
            //     console.log(imgCnt);
            // } else if (e.keyCode == 'ArrowLeft') {
            //     imgCnt--;
            //     console.log(imgCnt);
            // }

            switch (e.code) {
                case 'ArrowRight':
                    imgCnt++;
                    console.log(imgCnt);
                    break;
                case 'ArrowLeft':
                    imgCnt--;
                    console.log(imgCnt);
                    break;
            };
        };
    }
});

const $wrapper = document.getElementById('wrapper');

function createConfirmWindow() {
    let $orderDiv = document.createElement('div');
    let date = new Date().toLocaleDateString();

    $orderDiv.className = 'orderDiv';
    $orderDiv.insertAdjacentHTML('beforeend', `
    <h2>Ваш заказ от ${date}<br>на сумму ${totalSumm(shoppingCart)} руб. передан в обработку.</h2>
    <h4>Адрес доставки: ${$userAddr}</h4>
    <button id="close">Закрыть</button>`);
    $wrapper.append($orderDiv);

    $orderDiv.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            $orderDiv.style.display = 'none';
        }
    });
}