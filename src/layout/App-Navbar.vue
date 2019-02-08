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
.line-width {
  a:before, a:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: #FFF;
    transition: all 0.3s;
  }
}

.line-width {
  a:before {
    left: 0px;
    top: 0px;
  }
  a:after {
    right: 0px;
    bottom: 0px;
  }
}

.line-width {
  a:hover:before, a:hover:after {
    width: 100%;
    opacity: 1;
  }
}

.navbar
  postition relative
  width 100%
  height 325px
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
    justify-content center
    width 90%
    max-width 1300px
    margin auto
    font-family "Tangerine", cursive
    &__items
      padding 0 15px
      font-size 33px
      font-weight 500
      color $dark
    &__links
      position relative
      margin 0px 30px
      text-decoration none
      transition all 0.4s
      cursor pointer
      &:before,
      &:after
        position absolute
        opacity 0
        width 0%
        height 2px
        content ''
        background $dark-pink
        transition all 0.3s
      &:before
        left 0px
        top 0px
      &:after
        right 0px
        bottom 0px
      &:hover:before,
      &:hover:after
        width 100%
        opacity 1
</style>
