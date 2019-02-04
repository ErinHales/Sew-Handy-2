<template>
  <div class="cart">
    <cart-product v-for="product in cartProducts" :key="product.id" :product="product"></cart-product>
    <div class="cart__total">
      <div class="cart__total__checkout">
        <button class="cart__total__checkout__button">Check Out</button>
      </div>
      <div class="cart__total__section">
        <v-layout justify-space-between>
          <h3>Sub-total:</h3>
          <h3>{{ subTotal }}</h3>
        </v-layout>
        <v-layout justify-space-between>
          <h3>Shipping:</h3>
          <h3>{{ shipping }}.00</h3>
        </v-layout>
        <v-layout justify-space-between>
          <h3>Tax:</h3>
          <h3>{{ tax }}</h3>
        </v-layout>
        <v-layout justify-space-between>
          <h3>Final Total:</h3>
          <h3>{{ total }}</h3>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  components: {
    CartProduct: () => import('./CartProduct')
  },
  data: () => ({
    cartProducts: [{
      id: 1,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }, {
      id: 2,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }, {
      id: 3,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }, {
      id: 4,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }, {
      id: 5,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }, {
      id: 6,
      imgSrc: '../assets/wallet.jpg',
      name: 'Name',
      price: 8.50,
      description: 'asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf asdfasf asdfaf asdfasf asdfasf asdfasf asdfas sfds dfdf ssfsdf afasd fsfsf sdf sfdfs fsfasf sdf'
    }]
  }),
  computed: {
    subTotal () {
      return this.cartProducts[0].price
    },
    shipping () {
      return 6
    },
    tax () {
      let tax = (this.subTotal + this.shipping) * 0.05
      return tax
    },
    total () {
      return this.subTotal + this.shipping + this.tax
    }
  }
}
</script>

<style scoped lang="stylus">
.cart
  &__total
    display flex
    justify-content space-between
    width 90%
    max-width 800px
    margin auto
    padding 40px 0
    border-top 1px solid black
    &__checkout
      &__button
        background-color #698682
        margin 20px
        padding 15px 60px
        font-size 150%
        color white
    &__section
      width 90%
      max-width 300px
      float right
</style>
