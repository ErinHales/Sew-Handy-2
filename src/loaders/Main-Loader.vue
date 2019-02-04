<template>
  <div class="main-loader">
    <img src="../assets/Main-Loader.svg" alt="Sew Handy" class="main-loader__img">
  </div>
</template>

<script>
export default {
  name: 'Main-Loader',
  // TODO: mount loader
  // mounted () {
  //   setTimeout(() => {
  //     this.$router.push('/products')
  //   }, 3000)
  // }
}
</script>

<style scoped lang="stylus">
.main-loader
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
  &__img
    width 90%
    max-width 600px
</style>
