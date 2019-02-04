<template>
  <div class="products">
    <div class="products__container">
      <product v-for="product in products" :key="product.id" :product="product"></product>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  components: {
    Product: () => import('./Product')
  },
  data: () => ({
    products: [{
      id: 1,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 2,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 3,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 4,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 5,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 6,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 7,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 8,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 9,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 10,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 11,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 12,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 13,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 14,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 15,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 16,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 17,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 18,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 19,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 20,
      imgSrc: 'http://i64.tinypic.com/2ia8oxx.jpg',
      name: 'Name',
      price: '8.50'
    }]
  })
}
</script>

<style scoped lang="stylus">
.products
  display flex
  justify-content center
  width 100%
  &__container
    display flex
    flex-wrap wrap
    justify-content flex-start
</style>
