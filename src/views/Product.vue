<template>
  <div class="product">
    <v-img :src="product.imgSrc" :alt="product.name" class="product__img"></v-img>
    <div class="product__overlay" :style="backgroundColor">
      <h2>{{ product.name }}</h2>
      <h3 class="fadeFromBottom">{{ product.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data: () => ({
    colors: [
      '#FED3C0',
      '#F9B756',
      '#F5BB93',
      '#DF9870',
      '#698682',
      '#B57825',
      '#DC7945'
    ]
  }),
  computed: {
    backgroundColor () {
      let randomNum = Math.floor(Math.random() * 7)
      let randomColor = this.colors[randomNum]
      return `backgroundColor: ${randomColor}`
    }
  }
}
</script>

<style scoped lang="stylus">
.product
  position relative
  // display inline-block
  width 250px
  overflow hidden
  margin 5px
  cursor pointer
  &__img
    width 250px
  &__overlay
    position absolute
    top 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100%
    height 100%
    font-family "Poiret One", sans-serif
    transition opacity .4s
    opacity 0
    &:hover
      opacity 0.9
// @keyframes fade-from-bottom
//   from
//     transform translateY(-20px)
//   to
//     transform translateY(0)
// .fadeFromBottom:hover
//   animation fade-from-bottom 0.8s

@media (max-width 580px)
  .product
    width 100vw
    margin 5px 0
    &__img
      width 100vw
</style>
