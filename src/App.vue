<template>
  <v-app>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Cart from './views/Cart'
import AppNavbar from './layout/App-Navbar'

export default {
  name: 'App',
  components: {
    AppNavbar,
    Cart
  }
}
</script>

<style scoped lang="stylus">

</style>
