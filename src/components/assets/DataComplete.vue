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
    },
    dataY: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      chart: null,
      title: '数据表质量排名'
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
        xAxis: {
          type: 'value',
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: this.dataY,
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
          }
        },
        tooltip: {},
        series: [
          {
            type: 'bar',
            name: this.title,
            data: this.data,
            barWidth: 14,
            showBackground: true,
            backgroundStyle: {
              color: '#ECEDF3',
              barBorderRadius: [0, 10, 10, 0]
            },
            itemStyle: {
              barBorderRadius: [0, 10, 10, 0],
              color(param) {
                return colors[param.dataIndex]
              }
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
</style>
