const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';


class Good {
  constructor({id_product, price, product_name}) {
    this.id = id_product;
    this.title = product_name;
    this.price = price;
  }

  createMarkDown = () =>
    `<div class="goods-item">
    <img src="imgs/placeholder-image.png" alt="good's image"/>
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>`
}

class GoodsList {
  static goods = [];
  static container = '.goods-list';
  static productsListURL = `${API}/catalogData.json`;

  static fetchGoods() {
    fetch(this.productsListURL).then(data => data.json()).then(
      data => {
        console.log(data)
        for (const good of data) {
          this.goods.push(new Good(good))
        }
      }).catch(error => {
      console.log(error)
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.goods.length > 0) {
          resolve();
        }
      }, 300);
    })
  }

  static render = () => document.querySelector(this.container).innerHTML =
    this.goods.map(item => item.createMarkDown()).join('\n')

  static
  goodsPriceSum = () => this.goods.reduce((acc, obj) => acc + obj.price, 0);
}


class Basket {
  static cart;
  static basketLink = `${API}/getBasket.json`;
  static container = '.cart';

  static fetchCart() {
    fetch(this.basketLink).then(data => data.json())
      .then(data => {
        this.cart = data;
        const contents = [];
        for (const item of data.contents) {
          contents.push(new BasketItem(item))
        }
        this.cart.contents = contents;
      })
    return new Promise(resolve => setTimeout(() => resolve(), 300))
  };

  static render = () => {
    document.querySelector(this.container).innerHTML = this.cart.contents.map(item => item.markdown()).join('\n')
  };
}

class BasketItem {
  constructor({id_product, product_name, price, quantity}) {
    this.id = id_product;
    this.title = product_name;
    this.price = price;
    this.quantity = quantity;
  }

  markdown = () => `
    <div class="cart-item" data-id="${this.id}">
      <img src="imgs/placeholder-image.png" alt="">
      <div class="text-block">
        <h3>${this.title}</h3>
        <p>Quantity: ${this.quantity}</p>
        <p>Price: ${this.price}</p>
      </div>
      <div class="func-block">
        <h3>${this.price * this.quantity}</h3>
        <button>Delete</button>
      </div>
    </div>
  `
}

GoodsList.fetchGoods()
  .then(() => GoodsList.render())
  .then(() => Basket.fetchCart())
  .then(() => Basket.render());

document.querySelector('.menu-element-cart').addEventListener("click", (() => {
  document.querySelector('.cart').toggleAttribute('hidden');
}));