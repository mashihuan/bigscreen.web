<template>
  <el-container>
    <el-header height="50px">
      <my-header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from '@/components/header'

export default {
  name: 'Layout',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
