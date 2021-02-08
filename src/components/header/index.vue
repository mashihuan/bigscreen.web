<template>
  <div style="height: 100%;">
    <el-row>
      <!-- logo -->
      <el-col class="logo" :xs="2" :span="1">
        <logo />
      </el-col>
      <!-- 导航 -->
      <el-col :span="18" style="overflow:auto">
        <navigation :menu="dashboardMenu" />
      </el-col>
      <!-- 用户 -->
      <el-col :xs="6" :span="5">
        <user />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from './logo'
import User from './user'
import Navigation from './navigation'

export default {
  name: 'Header',
  components: {
    Logo,
    User,
    Navigation
  },
  data() {
    return {
      dashboardMenu: [
        {
          label: '数据大盘',
          name: '数据大盘',
          path: '/'
        },
        {
          label: '资产管理',
          name: '资产管理',
          path: '/assets'
        },
        {
          label: '移动端',
          name: '移动端',
          type: 'out-link', // 外链
          path: 'http://bigscreen.m.mashihuan.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  display: flex;
  align-items: center;
  min-width: 960PX;
  height: 100%;
  padding: 0.104167rem 0.260417rem;
}
</style>
