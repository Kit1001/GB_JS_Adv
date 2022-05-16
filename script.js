const goods = [
  {title: 'Shirt', price: 150, img: 'shirt.jpeg'},
  {title: 'Socks', price: 50, img: 'socks.jpeg'},
  {title: 'Jacket', price: 350, img: 'jacket.jpg'},
  {title: 'Shoes', price: 250, img: 'shoes.jpeg'},
];

const renderGoodsItem = props =>
  `<div class="goods-item">
    <img src="imgs/${props.img}" alt="good's image"/>
    <h3>${props.title}</h3>
    <p>${props.price}</p>
  </div>`;

const renderGoodsList = list => document.querySelector('.goods-list').innerHTML =
  list.map(item => renderGoodsItem(item)).join('\n');

renderGoodsList(goods);