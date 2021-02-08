<template>
  <div class="chart-wrapper">
    <div class="chart-inner" ref="chartInner">
      <vo-basic class="left" ref="orgchart" :data="chartData" :toggleCollapse="false" direction="r2l"></vo-basic>
      <vo-basic class="right" ref="orgchart2" :data="chartData" :toggleCollapse="false" direction="l2r"></vo-basic>
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
        name: '北京XX科技有限公司',
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
      const chartInner = this.$refs.chartInner
      const orgchart = chartDom.querySelector('.r2l')
      console.log(chartDom)
      console.log(orgchart)
      chartDom.style.height = orgchart.offsetHeight + 'px'
      chartInner.style.height = orgchart.offsetHeight + 'px'
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
  overflow: hidden;
  .orgchart {
    .node {
      border-radius: 3px;
      background: none;
      .title {
        position: relative;
        top: -10px;
        left: 10px;
        height: 30px;
        padding: 0;
        line-height: 30px;
        border-radius: 3px;
        box-sizing: border-box;
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
            left: -20px;
            top: -40px;
            width: 180px;
            background: #042FCA;
          }
        }
      }
    }
    &.r2l > table {
      > tr:first-child {
        .node {
          .title {
            display: none;
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
  .left, .right {
    overflow: hidden;
  }
  .r2l {
    position: absolute;
    top: 0;
    right: 198px;
    width: 50%;
  }
  .l2r {
    position: absolute;
    left: 198px;
    top: 0;
    width: 50%;
  }
}

</style>
