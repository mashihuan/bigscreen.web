<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <h4 class="title">表数据信息</h4>
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
        title: {
          text: '信息分布',
          left: 'center',
          top: '48%',
          textStyle: {
            color: this.$store.state.theme.theme === 'theme-dark' ? '#fff' : '#000'
          }
        },
        grid: {
          left: 0,
          top: 30,
          bottom: 30,
          right: 0,
          containLabel: true
        },
        tooltip: {
          // formatter(param) {
          //   console.log(param)
          // }
        },
        series: [
          {
            type: 'pie',
            data: this.data,
            radius: ['60%', '80%'],
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 5
            },
            label: {
              show: true,
              formatter(param) {
                return `${param.data.name}：${param.data.value}%`
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
