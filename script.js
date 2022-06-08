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
  static container = '';
  static productsListURL = '';

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
      }, 1000);
    })
  }

  static render = () => document.querySelector(this.container).innerHTML =
    this.goods.map(item => item.createMarkDown()).join('\n')

  static
  goodsPriceSum = () => this.goods.reduce((acc, obj) => acc + obj.price, 0);
}


class Basket {
  static cart;

  static render() {
  };

  static getSumOfCart() {
  };
}

class BasketItem {
  constructor(goodId) {
    this.id = goodId;
  }

  addToCart() {
  };

  removeFromCart() {
  };
}


GoodsList.productsListURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
GoodsList.container = '.goods-list';  // задаем название контейнера для добавления в него новой разметки

GoodsList.fetchGoods().then(() => GoodsList.render());
console.log(GoodsList.goodsPriceSum());  // вывод в консоль суммы цен товаров
