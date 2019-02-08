<template>
  <div class="products">
    <div class="products__container">
      <v-layout column>
        <product v-for="product in columns[0]" :key="product.id" :product="product" class="product1"></product>
      </v-layout>
      <v-layout column>
        <product v-for="product in columns[1]" :key="product.id" :product="product" class="product2"></product>
      </v-layout>
      <v-layout column>
        <product v-for="product in columns[2]" :key="product.id" :product="product" class="product3"></product>
      </v-layout>
      <v-layout column>
        <product v-for="product in columns[3]" :key="product.id" :product="product" class="product4"></product>
      </v-layout>
      <v-layout column>
        <product v-for="product in columns[4]" :key="product.id" :product="product" class="product5"></product>
      </v-layout>
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
    columns: [[], [], [], [], []],
    products: [{
      id: 1,
      imgSrc: 'http://i68.tinypic.com/5u4e1f.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 2,
      imgSrc: 'http://i63.tinypic.com/v5wx94.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 3,
      imgSrc: 'http://i63.tinypic.com/2yjvn8h.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 4,
      imgSrc: 'http://i67.tinypic.com/1534knd.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 5,
      imgSrc: 'http://i63.tinypic.com/sn2flw.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 6,
      imgSrc: 'http://i68.tinypic.com/2dkmt0x.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 7,
      imgSrc: 'http://i68.tinypic.com/2psmut2.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 8,
      imgSrc: 'http://i66.tinypic.com/5fkgw5.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 9,
      imgSrc: 'http://i67.tinypic.com/300smr9.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 10,
      imgSrc: 'http://i66.tinypic.com/noa9o1.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 11,
      imgSrc: 'http://i67.tinypic.com/s4w1ab.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 12,
      imgSrc: 'http://i65.tinypic.com/2la6c77.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 13,
      imgSrc: 'http://i64.tinypic.com/5xv8nt.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 14,
      imgSrc: 'http://i63.tinypic.com/296c68.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 15,
      imgSrc: 'http://i68.tinypic.com/152nolu.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 16,
      imgSrc: 'http://i65.tinypic.com/25grn8k.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 17,
      imgSrc: 'http://i65.tinypic.com/waog79.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 18,
      imgSrc: 'http://i65.tinypic.com/jre6u8.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 19,
      imgSrc: 'http://i66.tinypic.com/rsssj8.jpg',
      name: 'Name',
      price: '8.50'
    }, {
      id: 20,
      imgSrc: 'http://i63.tinypic.com/9qwd35.jpg',
      name: 'Name',
      price: '8.50'
    }]
  }),
  created () {
    this.resizeColumns()
    window.addEventListener('resize', this.resizeColumns)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeColumns)
  },
  methods: {
    resizeColumns (e) {
      console.log(window.innerWidth)
      this.columns = [[], [], [], [], []]
      let columnNums
      if (window.innerWidth > 1340) {
        columnNums = 5
      } else if (window.innerWidth > 1080) {
        columnNums = 4
      } else if (window.innerWidth > 820) {
        columnNums = 3
      } else {
        columnNums = 2
      }
      var columnCount = 0
      for (var i = 0; i < this.products.length; i += 1) {
        this.columns[columnCount].push(this.products[i])
        columnCount++
        if (columnCount >= columnNums) {
          columnCount = 0
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.products
  display flex
  align-item center
  width 1300px
  margin auto
  &__container
    display flex
    // flex-direction column
    flex-direction row
    flex-wrap wrap
    // align-items center
    // height 1130px
    width auto
@media (max-width 1340px)
  .products
    width 1040px
@media (max-width 1080px)
  .products
    width 780px
@media (max-width 820px)
  .products
    width 520px
@media (max-width 580px)
  .products
    width 100%
</style>
