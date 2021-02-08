<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <h4 class="title">问题数据量趋势</h4>
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
    },
    dataX: {
      type: Array,
      default() {
        return []
      }
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null
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
          right: 15,
          containLabel: true
        },
        xAxis: {
          data: this.dataX,
          name: this.unit,
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: this.chartLabelColor,
            // interval: 0
          }
        },
        yAxis: {
          type: 'value',
          scale: true,
          minInterval: 1,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: this.chartLabelColor
          },
          splitLine: {
            lineStyle: {
              color: this.chartLineColor
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        series: [
          {
            type: 'line',
            data: this.data,
            lineStyle: {
              color: '#02D0C1'
            },
            itemStyle: {
              color: '#02D0C1'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#F3FBFC' // 0% 处的颜色
                }, {
                    offset: 1, color: '#BCEBEF' // 100% 处的颜色
                }]
              }
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
</style>
