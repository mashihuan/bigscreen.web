<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <h4 class="title">{{ title }}</h4>
      <div ref="myChart" class="myChart" :style="{height: chartHeight}"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/common/mixins/resize'
import { colors } from '@/common/config'

export default {
  mixins: [resize],
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    chartData: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null,
      options: {},
      colors: colors
    }
  },
  watch: {
    chartData() {
      this.setData()
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myChart)
      this.setData()
    },
    setData() {
      this.options = {
        color: colors,
        title: {
          text: this.title,
          left: 'center',
          top: 'middle',
          textStyle: {
            color: this.chartLabelColor,
            fontSize: 15
          }
        },
        // legend: {},
        tooltip: {
          confine: true,
          backgroundColor: '#fff',
          textStyle: { color: '#222' },
          extraCssText: 'box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);',
        },
        series: [
          {
            type: 'pie',
            data: this.chartData,
            selectedOffset: 0,
            radius: ['40%', '60%'],
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            label: {
              show: true,
              formatter(param) {
                return `${param.name} ${param.percent}%`
              }
            }
          }
        ]
      }
      this.chart.setOption(this.options)

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
</style>
