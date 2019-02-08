import Vue from 'vue'
import Router from 'vue-router'
// import MainLoader from '@/loaders/Main-Loader'
import Cart from '@/views/Cart'
import Products from '@/views/Products'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Main-Loader',
    //   component: MainLoader
    // },
    {
      // path: '/products',
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
