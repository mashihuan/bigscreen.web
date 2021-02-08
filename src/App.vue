<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.body.classList.add('theme-dark')
    this.$store.commit('theme/CHANGE_THEME', 'theme-dark')
  }
}
</script>

<style lang="scss">

</style>
