<template>
  <div class="wrapper">
    <el-button
      size="mini"
      round
      type="primary"
      icon="el-icon-refresh-right"
      @click="handleGeoSelect('镇江市')">镇江市</el-button>
    <div ref="chart" class="map" />
  </div>
</template>

<script>
/*eslint-disable*/
import echarts from 'echarts'
import 'echarts-gl'
import geoJson from '@/common/nantong'
import resize from '@/common/mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      chart: null,
      options: {},
      geoCoordMap: [
        { name: '崇川区', value: [120.932203, 31.911357, '南通市崇川区'] },
        { name: '通州区', value: [121.05163, 32.113882, '南通市通州区'] },
        { name: '如东县', value: [121.090527, 32.386724, '如东县'] },
        { name: '启东市', value: [121.703672, 31.854981, '启东市'] },
        { name: '如皋市', value: [120.573482, 32.268391, '如皋市'] },
        { name: '海门市', value: [121.310107, 31.954154, '海门市'] },
        { name: '海安市', value: [120.478737, 32.550035, '海安市'] }
      ]
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart)
      echarts.registerMap('nantong', geoJson)
      this.setData()
      this.chart.on('click', this.handleGeoSelect)
    },
    handleGeoSelect(params) {
      const area = params.name ? params.name : params
      this.options.geo3D.regions[0].name = area
      this.chart.setOption(this.options)
      this.$emit('handleGeoSelect', area)
    },
    setData() {
      const viewControl = {
        zoomSensitivity: 0,
        center: [14, -10, -10]
      }
      this.options = {
        geo3D: {
          map: 'nantong',
          top: 0,
          left: 0,
          viewControl: viewControl,
          itemStyle: {
            borderColor: '#0233FA',
            borderWidth: 1,
            color: '#0F1F59',
            opacity: 0.5
          },
          emphasis: {
            itemStyle: {
              color: '#1F65EB',
              opacity: 1
            },
            label: {
              show: false
            }
          },
          regions: [{
            name: '',
            itemStyle: {
              color: '#1F65EB',
              opacity: 1
            }
          }]
        },
        series: [
          {
            type: 'map3D',
            map: 'nantong',
            zlevel: 2,
            coordinateSystem: 'geo3D',
            data: this.geoCoordMap,
            viewControl: viewControl,
            itemStyle: {
              borderColor: '#0233FA',
              borderWidth: 1,
              color: '#0F1F59',
              opacity: 0
            }
          },
          {
            type: 'scatter3D',
            map: 'nantong',
            coordinateSystem: 'geo3D',
            data: this.geoCoordMap,
            symbol: 'circle',
            symbolSize: 15,
            zlevel: 10,
            itemStyle: {
              borderColor: '#0B496A',
              borderWidth: 5,
              color: '#00F3BA'
            },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              textStyle: {
                color: '#fff',
                backgroundColor: 'transparent'
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
.wrapper {
  position: relative;
  .el-button {
    position: absolute;
    right: 35%;
    top: 20%;
    padding-left: .052083rem;
    padding-right: .052083rem;
    border: none;
    background: #1656FC;
    z-index: 2;
  }
  .map {
    width: 100%;
    height: 2.864583rem;
  }
}
</style>
