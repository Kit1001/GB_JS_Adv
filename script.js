const prefetchedGoods = [
  {title: 'Shirt', price: 150, img: 'shirt.jpeg'},
  {title: 'Socks', price: 50, img: 'socks.jpeg'},
  {title: 'Jacket', price: 350, img: 'jacket.jpg'},
  {title: 'Shoes', price: 250, img: 'shoes.jpeg'},
];

class GoodsList {
  static goods = [];
  static container = '';

  static fetchGoods(goods) {
    this.goods = goods;
  }

  static renderItem = props =>
    `<div class="goods-item">
    <img src="imgs/${props.img}" alt="good's image"/>
    <h3>${props.title}</h3>
    <p>${props.price}</p>
  </div>`

  static renderList = () => document.querySelector(this.container).innerHTML =
    this.goods.map(item => this.renderItem(item)).join('\n');

  static goodsPriceSum = () => this.goods.reduce((acc, obj) => acc + obj.price, 0);
}


class Basket{
  static cart;

  static render(){};
  static getSumOfCart(){};
}

class BasketItem{
  constructor(goodId) {
    this.Id = goodId;
  }

  addToCart(){};
  removeFromCart(){};
}

GoodsList.fetchGoods(prefetchedGoods);  // берем список товаров из prefetched goods
GoodsList.container = '.goods-list';  // задаем название контейнера для добавления в него новой разметки
GoodsList.renderList();  // добавляем созданную разметку на страницу
console.log(GoodsList.goodsPriceSum());  // вывод в консоль суммы цен товаров