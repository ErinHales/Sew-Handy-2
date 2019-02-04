<template>
  <div class="product">
    <v-img :src="product.imgSrc" :alt="product.name" aspect-ratio="1.25" class="product__img"></v-img>
    <div class="product__overlay" :style="backgroundColor">
      <h2>{{ product.name }}</h2>
      <h2>{{ product.price }}</h2>
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
  width 200px
  overflow hidden
  margin 5px
  cursor pointer
  &__img
    width 200px
  &__overlay
    position absolute
    top 0
    width 100%
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    transition opacity .4s
    opacity 0
    &:hover
      opacity 0.9
</style>
