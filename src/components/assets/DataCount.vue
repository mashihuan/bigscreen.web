<template>
  <div class="count-wrapper">
    <img :src="icon" class="icon" alt="icon">
    <div class="right">
      <p class="desc">{{ title }}</p>
      <p class="count">
        <template v-if="size">
          <span class="num">{{ size }}</span>{{ sizeUnit }}
          <span class="divide">/</span>
        </template>
        <span class="num">{{ num }}</span>{{ unit }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    num:{
      type: [Number, String],
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sizeUnit: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.count-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.145833rem 0.04rem 0.145833rem 0.145833rem;
  margin-bottom: 0.104167rem;
  border-radius: 0.026042rem;
  background: #fff;
  cursor: pointer;
  &:hover {
    .icon {
      transform: scale(1.1);
    }
  }
  .icon {
    width: 0.3125rem;
    margin-right: 0.168333rem;
    transition: all 0.3s;
  }
  .count {
    font-size: 12px;
    .num {
      display: inline-block;
      margin-top: 0.078125rem;
      margin-right: 0.026042rem;
      font-size: 0.12833rem;
      font-weight: bold;
    }
    .divide {
      display: inline-block;
      margin: 0 3px;
      font-size: 0.145833rem;
      font-weight: lighter;
      color: #ccc;
    }
  }
}
</style>
