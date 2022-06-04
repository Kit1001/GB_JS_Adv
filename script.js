const prefetchedGoods = [
  {id: 1, title: 'Shirt', price: 150, img: 'shirt.jpeg'},
  {id: 2, title: 'Shoes', price: 250, img: 'shoes.jpeg'},
  {id: 3, title: 'Socks', price: 50, img: 'socks.jpeg'},
  {id: 4, title: 'Jacket', price: 350, img: 'jacket.jpg'},
];

class Good {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.price = item.price;
    this.img = item.img;
  }

  createMarkDown = () =>
    `<div class="goods-item">
    <img src="imgs/${this.img}" alt="good's image"/>
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    </div>`

}

class GoodsList {
  static goods = [];
  static container = '';

  static fetchGoods(goods) {
    for (const good of goods) {
      this.goods.push(new Good(good))
    }
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


GoodsList.fetchGoods(prefetchedGoods);  // берем список товаров из prefetched goods
GoodsList.container = '.goods-list';  // задаем название контейнера для добавления в него новой разметки
GoodsList.render();  // добавляем созданную разметку на страницу
console.log(GoodsList.goodsPriceSum());  // вывод в консоль суммы цен товаров
