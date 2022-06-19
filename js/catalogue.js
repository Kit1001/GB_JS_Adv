Vue.component('catalogue', {
  props: ['items'],
  template: `
    <div class="products">
      <div class="product-item" v-for="item of items">
        <catalogue-item :item="item"></catalogue-item>
      </div>
    </div>
    
  `
})

Vue.component('catalogue-item', {
  props: ['item'],
  methods: {
    addToCart(item) {
      return this.$root.addProductToCart(item)
    }
  },
  template: `
    <div>
      <img :src="this.$root.imgCatalog" alt="Some img">
      <div class="desc">
        <h3>{{item.product_name}}</h3>
        <p>{{item.price}} $</p>
        <button class="buy-btn" @click="addToCart(item)">Купить</button>
      </div>
    </div>
  `
})