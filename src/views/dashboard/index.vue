<template>
  <div>
    <my-header title="XX市大数据局数据综合治理平台" />
    <el-row :gutter="20">
      <el-col :md="6">
        <!-- 自然人变化 -->
        <bar-chart
          :chartData="person.chartData"
          :chartX="person.chartX"
          :title="person.title"
          :seriesOption="person.seriesOption"
          :config="{stack: true, colors: ['#41A9FF', '#33D0C9']}" />
        <!-- 数据调用 -->
        <pie-chart :chartData="dataInvoke.chartData" :title="dataInvoke.title" />
      </el-col>
      <el-col :md="12">
        <div class="map-bg">
          <el-row :gutter="20">
            <el-col :md="12">
              <count-bar title="一人一档数据" path="/dashboard/person" :count="1377345" />
            </el-col>
            <el-col :md="12">
              <count-bar title="一企一档数据" path="/dashboard/enterprise" :count="924685" />
            </el-col>
          </el-row>
          <!-- 地图 -->
          <map-chart @handleGeoSelect="handleGeoSelect" />
        </div>
      </el-col>
      <el-col :md="6">
        <!-- 企业变化 -->
        <bar-chart
          :chartData="enterprise.chartData"
          :chartX="enterprise.chartX"
          :title="enterprise.title"
          :seriesOption="enterprise.seriesOption"
          :config="{stack: true, colors: ['#00BBF1', '#FF866D']}" />
        <!-- 数据来源 -->
        <bar-chart
          :chartData="dataResource.chartData"
          :chartX="dataResource.chartX"
          :title="dataResource.title"
          :config="{horizontal: true}" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyHeader from '@/components/dashboard/header'
import CountBar from '@/components/dashboard/count-bar'
import BarChart from '@/components/chart/bar'
import PieChart from '@/components/chart/pie'
import MapChart from '@/components/chart/map'
import { generatorData } from '@/common/utils'

export default {
  components: {
    MyHeader,
    CountBar,
    BarChart,
    PieChart,
    MapChart
  },
  data() {
    return {
      currentArea: '',
      person: {
        chartData: [],
        chartX: [],
        title: '',
        seriesOption: []
      },
      enterprise: {
        chartData: [],
        chartX: [],
        title: '',
        seriesOption: []
      },
      dataInvoke: {
        chartData: [],
        title: ''
      },
      dataResource: {
        chartData: [],
        chartX: [],
        title: '',
        seriesOption: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.getPersonChange()
      this.getEnterpriseChange()
      this.getDataInvoke()
      this.getDataResource()
    },
    // 人口变化
    getPersonChange() {
      const data1 = generatorData(1000, 4000, 12)
      const data2 = generatorData(-4000, -1000, 12)
      this.person.chartData = [
        {name: '新增', data: data1},
        {name: '减少', data: data2}
      ]
      this.person.chartX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      this.person.title = '每月新增/减少自然人'
      this.person.seriesOption = [
        {
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          }
        },
        {
          itemStyle: {
            barBorderRadius: [0, 0, 5, 5]
          }
        }
      ]
    },
    // 企业变化
    getEnterpriseChange() {
      const data1 = generatorData(1000, 4000, 12)
      const data2 = generatorData(-4000, -1000, 12)
      this.enterprise.chartData = [
        {name: '新增', data: data1},
        {name: '减少', data: data2}
      ]
      this.enterprise.chartX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      this.enterprise.title = '每月新增/减少企业'
      this.enterprise.seriesOption = [
        {
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          }
        },
        {
          itemStyle: {
            barBorderRadius: [0, 0, 5, 5]
          }
        }
      ]
    },
    // 数据调用
    getDataInvoke() {
      const data = generatorData(10, 40, 8)
      this.dataInvoke.chartData = [
        {name: '互联网', value: data[0]},
        {name: '金融', value: data[1]},
        {name: '社保', value: data[2]},
        {name: '公积金', value: data[3]},
        {name: '学生', value: data[4]},
        {name: '学校', value: data[5]},
        {name: '老龄人口', value: data[6]},
        {name: '托儿所', value: data[7]}
      ]
      this.dataInvoke.title = '数据调用'
    },
    // 数据来源
    getDataResource() {
      const data = generatorData(10, 40, 8)
      this.dataResource.chartData = [ {name: '数据来源', data} ]
      this.dataResource.chartX = ['互联网', '金融', '社保', '公积金', '医院', '学校', '老龄人口', '托儿所', ]
      this.dataResource.title = '数据来源'
    },
    // 地图点击事件
    handleGeoSelect(area) {
      this.currentArea = area
      this.initData()
    }
  }
}
</script>

<style>

</style>
