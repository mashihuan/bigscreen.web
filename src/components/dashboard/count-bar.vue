<template>
  <div class="wrapper">
    <div class="title">
      <span :style="{color: theme === 'theme-dark' ? '#fff' : ''}">{{ title }}</span>
      <span class="btn" @click="$router.push(path)">查看详情<i class="el-icon-d-arrow-right"></i></span>
    </div>
    <div class="count">
      <count-to :end-val="count" />
      <span class="unit">条</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CountTo from 'vue-count-to'

export default {
  props: {
    title: {
      type: String,
      default: '数据'
    },
    path: {
      type: String,
      default: '/'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  components: {
    CountTo
  },
  computed: {
    ...mapState('theme', ['theme']),
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 1.145833rem;
  padding-left: .3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    display: flex;
    align-items: center;
    font-size: .09375rem;
    .btn {
      margin-left: 12px;
      padding: .020833rem .041667rem;
      border: 1px solid #00F3BA;
      border-radius: .015625rem;
      color: #00F3BA;
      font-size: .072917rem;
      cursor: pointer;
    }
  }
  .count {
    font-family: electronicFont;
    font-size: .390625rem;
    color: #00F3BA;
    .unit {
      font-size: .072917rem;
    }
  }
}
</style>
