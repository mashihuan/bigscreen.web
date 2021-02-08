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
    chartX: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    seriesOption: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      chart: null,
      options: {}
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
      const series = this.chartData.map((item, index) => {
        return Object.assign({
          name: item.name,
          stack: this.config.stack,
          type: 'bar',
          data: item.data,
          barWidth: 9,
          showBackground: this.config.horizontal,
          backgroundStyle: this.config.horizontal ? {
            color: this.chartLineColor,
            barBorderRadius: [0, 10, 10, 0]
          } : {},
          itemStyle: this.config.horizontal ? {
            color: (params) => {
              return colors[params.dataIndex]
            },
            barBorderRadius: [0, 10, 10, 0]
          }: {}
        }, this.seriesOption[index])
      })
      this.options = {
        color: this.config.colors ? this.config.colors : colors,
        grid: {
          top: this.chartData.length > 1 ? 30 : 10,
          left: 5,
          right: 10,
          bottom: 20,
          containLabel: true,
        },
        legend: {
          show: this.chartData.length > 1,
          icon: 'circle',
          right: 0,
          top: 0,
          textStyle: {
            color: this.chartLabelColor
          }
        },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          backgroundColor: '#fff',
          textStyle: { color: '#222' },
          extraCssText: 'box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);',
          // formatter(params) {
          //   if(Array.isArray(params)) {
          //     console.log(params)
          //     let str = ``
          //     params.forEach(item => {
          //       str += `
          //         <span style="display:inline-block;margin-right:5px;border-radius:10px;width:6px;height:6px;background-color:${item.color};"></span>
          //         ${item.name}：${item.value}
          //         <br/>
          //       `
          //     })
          //     return str
          //   }else {
          //     return ''
          //   }
          // }
        },
        xAxis: {
          type: this.config.horizontal ? 'value' : 'category',
          data: this.config.horizontal ? [] : this.chartX,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: this.chartLabelColor
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: this.chartLineColor
            }
          }
        },
        yAxis: {
          type: this.config.horizontal ? 'category' :'value',
          data: this.config.horizontal ? this.chartX : [],
          scale: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: this.chartLabelColor },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: this.chartLineColor
            }
          }
        },
        series: series
      }
      this.chart.setOption(this.options)

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
</style>
