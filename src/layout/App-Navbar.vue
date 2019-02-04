<template>
  <div class="navbar">
    <section class="navbar__img-container">
      <img src="@/assets/Logo.svg" alt="Sew Handy Logo" class="navbar__img-container__logo">
    </section>
    <section class="navbar__menu">
      <router-link to="/cart" class="navbar__menu__links"><h2 class="navbar__menu__items">Cart</h2></router-link>
      <router-link to="/" class="navbar__menu__links"><h2 class="navbar__menu__items">Products</h2></router-link>
      <router-link to="/contact" class="navbar__menu__links"><h2 class="navbar__menu__items">Contact</h2></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App-Navbar'
}
</script>

<style scoped lang="stylus">
@import '../assets/stylus/_colors'
@import url('https://fonts.googleapis.com/css?family=Tangerine')

.navbar
  postition relative
  width 100%
  height 300px
  background-color $light-pink
  &__img-container
    display flex
    justify-content center
    width 100%
    height 250px
    &__logo
      width 200px
  &__menu
    display flex
    justify-content flex-end
    width 90%
    max-width 1300px
    height 50px
    margin auto
    font-family "Tangerine", cursive
    &__items
      padding 0 15px
      font-size 33px
      font-weight 500
      color $dark
    &__links
      text-decoration none
      transition all 0.4s
      &:hover
        cursor pointer
        background-color $dark-pink
        color white
</style>
