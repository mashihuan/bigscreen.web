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
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      chart: null,
      title: '总体质量概况'
    }
  },
  watch: {
    data: {
      handler() {
        this.setOptions()
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myChart)
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        color: colors,
        grid: {
          left: 0,
          top: 30,
          bottom: 30,
          right: 0,
          containLabel: true
        },
        radar: {
          shape: 'circle',
          axisLine: {
            show: true,
            // symbol: ['arrow', 'arrow']
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#C2D7E7'
            }
          },
          splitArea: {
            show: false
          },
          indicator: [
            {text: '准确性', max: 100},
            {text: '稳定性', max: 100},
            {text: '时效性', max: 100},
            {text: '唯一性', max: 100}
          ],
          name: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        tooltip: {},
        series: [
          {
            type: 'radar',
            data: [
              {name: this.title, value: this.data}
            ],
            areaStyle: {
              color: '#2D82B6'
            },
            lineStyle: {
              color: '#02D0C1'
            },
            itemStyle: {
              color: '#02D0C1'
            },
            label: {
              show: true
            }
          }
        ]
      })

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-wrapper {
  background: rgba(49,90,173);
  .title {
    border-bottom: none !important;
    color: #fff;
  }
}
</style>
