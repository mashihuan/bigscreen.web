<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <vo-basic class="orgchart-single" ref="orgchart" :data="chartData" direction="t2b"></vo-basic>
    </div>
  </div>
</template>

<script>
import { VoBasic } from 'vue-orgchart'
import 'vue-orgchart/dist/style.min.css'
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  components: {
    VoBasic
  },
  data() {
    return {
      chartData: {
        name: '杭州XX科技有限公司',
          children: [
            { name: '法定代表人' },
            {
              name: '法定代表人',
              children: [
                { name: '马云' },
                { name: '马化腾' },
              ]
            },
            { name: '法定代表人' },
            { name: '法定代表人' },
            {
              name: '法定代表人',
              children: [
                { name: '马云' },
                { name: '马化腾' },
              ]
            },
            { name: '法定代表人' }
          ]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.orgchart.$el
      const nodes = chartDom.querySelectorAll('.title')
      nodes.forEach(node => {
        node.addEventListener('click', e => {
          nodes.forEach(item => {
            item.style.background = ''
          })
          e.target.style.background = '#2BBB91'
          this.$message(`你点击了${e.target.innerText}`)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
::v-deep #chart-container {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .orgchart {
    .node {
      border-radius: 3px;
      background: none;
      .title {
        height: auto;
        padding: 10px 0;
        border-radius: 3px;
        background: #1F65EB;
        &:hover {
          cursor: pointer;
        }
      }
    }
    > table {
      > tr:first-child {
        .node {
          .title {
            position: relative;
            left: -30px;
            width: 180px;
            background: #042FCA;
          }
        }
      }
    }
    .leftLine, .topLine, .downLine, .rightLine {
      border-color: #323E7D;
    }
    .downLine {
      background:  #323E7D;
    }
  }
}
</style>
