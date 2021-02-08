<template>
  <ul class="menu">
    <li class="menu-item"
        v-for="(item) of menu"
        :key="item.name"
        :class="{active: (item.path === $route.path) || (item.path === $route.meta.activeMenu)}"
        @click="jumpTo(item)">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    jumpTo(item) {
      if(item.type === 'out-link') {
        window.open(item.path)
        return
      }
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  .menu-item {
    flex-shrink: 0;
    padding: 8PX 15PX;
    margin-right: 20PX;
    border-radius: 3PX;
    color: #CDCED5;
    cursor: pointer;
    &.active {
      background: #53576E;
      color: #fff;
    }
  }
}
</style>
