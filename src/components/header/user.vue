<template>
  <div class="user">
    <el-dropdown>
      <span class="el-dropdown-link">
        <img class="avatar" src="@/assets/img/avatar.png" />
        超级管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item of themeColors"
          :key="item.name"
          @click.native="switchThemeColor(item)">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeColors: [
        {name: '浅色主题', class: ''},
        {name: '深色主题', class: 'theme-dark'},
      ]
    }
  },
  methods: {
    // 切换主题颜色
    switchThemeColor(item) {
      document.body.className = item.class
      this.$store.commit('theme/CHANGE_THEME', item.class)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .el-dropdown {
    .el-dropdown-link {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      .avatar {
        width: 26px;
        margin-right: 5px;
      }
    }
  }
}
.el-dropdown-menu {
  padding: 0;
  border: none;
  background: $header-bg;
  .el-dropdown-menu__item {
    color: #fff;
    &.active {
      background: #1B2559;
    }
    &:hover {
      background: transparent;
    }
  }
  ::v-deep.popper__arrow {
    border-width: 0 !important;
    display: none !important;
  }
  .el-dropdown-menu__item--divided:before {
    height: 0px;
  }
}
</style>
