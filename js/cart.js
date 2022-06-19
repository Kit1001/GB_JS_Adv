Vue.component('cart', {
  props: ['cartItems', 'show', 'imgUrl', 'delFunc'],
  template: `
    <div>
      <div class="cart-block" v-show="show">
          <div class="cart-item" v-for="item of cartItems">
            <div class="product-bio">
              <img :src="imgUrl" alt="Some img">
              <div class="product-desc">
                <p class="product-title">{{item.product_name}}</p>
                <p class="product-quantity">Quantity: {{item.quantity}}</p>
                <p class="product-single-price">\${{item.price}} each</p>
              </div>
          </div>
          <div class="right-block">
            <p class="product-price">\${{item.quantity*item.price}}</p>
            <button class="del-btn" @click="delFunc(item)">&times;</button>
          </div>
          </div>
      </div>
    </div>
  `
})
