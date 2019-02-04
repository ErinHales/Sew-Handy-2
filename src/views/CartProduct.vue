<template>
  <v-layout justify-center class="cart-product">
    <img src="../assets/wallet.jpg" :alt="product.name" class="cart-product__img">
    <v-layout column class="cart-product__description">
      <h3>{{ product.name }}</h3>
      <!-- <h3>Name</h3> -->
      <p>{{ product.description }}</p>
    </v-layout>
    <h3>{{ product.price }}</h3>
  </v-layout>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    product: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang="stylus">
.cart-product
  margin 50px
  &__img
    width 200px
    height 200px
    margin-right 50px
  &__description
    max-width 400px
    margin-right 100px
</style>
