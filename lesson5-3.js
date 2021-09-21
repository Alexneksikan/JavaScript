const catalog = document.querySelector('#catalog');

function good(product, image, price) {
    this.product = product;
    this.image = `img5/${image}.jpg`;
    this.price = price;
}

let catalogList = []

catalogList.push(
    new good('Hopper', 'image1', 25000)
);
catalogList.push(
    new good('Seaford', 'image2', 37000)
);
catalogList.push(
    new good('Krabi', 'image3', 30000)
);
catalogList.push(
    new good('Lentus', 'image4', 46000)
);
catalogList.push(
    new good('Roadkiller', 'image5', 27000)
);
catalogList.push(
    new good('Lone Ranger', 'image6', 45000)
);

function drawItem(catList) {
    for (const iterator of catList) {
        catalog.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
            <div class="item">
                <div class="image"><img src="${iterator.image}"></div>
                <div class="description"><h4>${iterator.product}</h4>
                    <div class="price">Цена: 
                        <span>${iterator.price}</span>
                    </div>
                    <div class="sale">
                    <a href="#">В корзину</a>
                </div>
                </div>
            </div>
        </div>`);
    };
}
drawItem(catalogList);