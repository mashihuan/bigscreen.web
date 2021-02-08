<template>
  <header>{{ title }}</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('theme', ['theme'])
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 5.458333rem;
  height: .239583rem;
  margin: 0 auto;
  text-align: center;
  line-height: .239583rem;
  font-size: .130208rem;
  background: url('~@/assets/img/header-bg.png') no-repeat;
  background-size: 100% 100%;
  color: #B1E5FB;
}
@media screen and(max-width:992px) {
  header {
    width: 100%;
    background-position: 50% 0;
    background-size: 200% 100%;
    margin-bottom: 20PX;
  }
}
</style>
