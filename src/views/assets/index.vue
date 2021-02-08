<template>
  <div>
    <el-row :gutter="20">
      <!-- 质量状况 -->
      <el-col :md="8">
        <DataStatus :config="{height: 470}" :data="dataStatus" />
      </el-col>
      <!-- 表数据信息 -->
      <el-col :md="8">
        <el-row :gutter="20">
          <el-col :md="12">
            <DataCount
              :icon="require('@/assets/img/num-data.png')"
              title="表数据量"
              :num="dataCount.tableCount"
              :unit="dataCount.tableCountUnit"
              @click.native="jumpToList"/>
          </el-col>
          <el-col :md="12">
            <DataCount
              :icon="require('@/assets/img/num-field.png')"
              title="来源字段"
              :num="dataCount.fieldCount"
              :unit="dataCount.fieldCountUnit"
              @click.native="jumpToList"/>
          </el-col>
        </el-row>
        <DataInfo :config="{height: 330}" :data="dataInfo"/>
      </el-col>
      <!-- 问题数据量趋势 -->
      <el-col :md="8">
        <el-row :gutter="20">
          <el-col :md="12">
            <DataCount
              :icon="require('@/assets/img/num-origin.png')"
              title="来源数据量"
              :size="dataCount.totalSpaceCount"
              :sizeUnit="dataCount.totalSpaceCountUnit"
              :num="dataCount.totalRowCount"
              :unit="dataCount.totalRowCountUnit"
              @click.native="jumpToList"/>
          </el-col>
          <el-col :md="12">
            <DataCount
              :icon="require('@/assets/img/num-increase.png')"
              title="昨日增量"
              :num="dataCount.rowIncrement"
              :unit="dataCount.rowIncrementUnit"
              @click.native="jumpToList"/>
          </el-col>
        </el-row>
        <DataMistake
          :config="{height: 330}"
          :dataX="dataMistake.dataX"
          :data="dataMistake.data"
          :unit="dataMistake.unit"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- 数据完整性 -->
      <el-col :md="8">
        <DataComplete :data="dataComplete.data" :dataY="dataComplete.dataY" />
      </el-col>
      <!-- 数据接入趋势 -->
      <el-col :md="8">
        <DataAccess :data="dataAccess.data" :dataX="dataAccess.dataX"/>
      </el-col>
      <!-- 问题数据列表 -->
      <el-col :md="8">
        <DataMisList :config="{height: 370}" :data="mistakeList"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataStatus from '@/components/assets/DataStatus'
import DataCount from '@/components/assets/DataCount'
import DataInfo from '@/components/assets/DataInfo'
import DataMistake from '@/components/assets/DataMistake'
import DataComplete from '@/components/assets/DataComplete'
import DataAccess from '@/components/assets/DataAccess'
import DataMisList from '@/components/assets/DataMisList'

export default {
  components: {
    DataStatus,
    DataCount,
    DataInfo,
    DataMistake,
    DataComplete,
    DataAccess,
    DataMisList
  },
  data() {
    return {
      dataStatus: [], // 质量状况
      dataCount: { // 数据量
        fieldCount: 0,
        fieldCountUnit: '条',
        rowIncrement: 0,
        rowIncrementUnit: '万条',
        tableCount: 0,
        tableCountUnit: '条',
        totalRowCount: 0,
        totalRowCountUnit: '亿条',
        totalSpaceCount: 0,
        totalSpaceCountUnit: 'T'
      },
      dataInfo: [], // 表数据信息
      dataMistake: { // 问题数据趋势
        data: [],
        dataX: [],
        trendType: '月'
      },
      dataComplete: { // 数据完整性
        data:[],
        dataY: []
      },
      dataAccess: {
        data: [],
        dataX: []
      },
      mistakeList: []
    }
  },
  mounted() {
    this.getDataStatus()
    this.getDataCount()
    this.getDataInfo()
    this.getDataMistake()
    this.getDataComplete()
    this.getDataAccess()
    this.getDataMistakeList()
  },
  methods: {
    // 获取总体质量概况
    async getDataStatus() {
      // 准确性, 稳定性, 时效性, 唯一性
      const arr = [ 35.5, 45.5, 55.5, 65.5 ]
      this.dataStatus = arr
    },
    // 获取数据数量
    async getDataCount() {
      this.dataCount = {
        fieldCount: 1895,
        fieldCountUnit: '条',
        rowIncrement: 300,
        rowIncrementUnit: '万条',
        tableCount: 1264,
        tableCountUnit: '条',
        totalRowCount: 98,
        totalRowCountUnit: '亿条',
        totalSpaceCount: 15,
        totalSpaceCountUnit: 'T'
      }
    },
    // 获取数据表信息
    async getDataInfo() {
      this.dataInfo = [
        {name: '全省常驻人口', value: 15},
        {name: '渔船船员信息', value: 16},
        {name: '全民参保人员信息', value: 30},
        {name: '驾驶证主表', value: 12},
        {name: '大学生毕业信息', value: 17},
        {name: '机动车登记信息', value: 19}
      ]
    },
    // 获取问题数据量
    async getDataMistake() {
      this.dataMistake.dataX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      this.dataMistake.data = [800, 1200, 1400, 900, 600, 900, 600, 400, 1900, 2100, 3000, 3500]
    },
    // 获取数据完整性排名
    async getDataComplete() {
      this.dataComplete.data = [90, 80, 70, 60, 50, 40]
      this.dataComplete.dataY = ['全省常住人口', '全名参保人员信息', '社会保险个人参保信息', '出生医学证明信息', '中小学生信息', '大学毕业生信息']
    },
    // 获取数据接入趋势
    async getDataAccess() {
      this.dataAccess.dataX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      this.dataAccess.data = [8000, 1200, 1400, 900, 600, 900, 600, 400, 1900, 2100, 3000, 1500]
    },
    // 获取问题数据列表
    async getDataMistakeList() {
      this.mistakeList = [
        {tableName: "全省常住人口", problemDesc: "空值率大于50%", problemType: "完整性", problemRate: "60%", drTableId: 1, problemStatus: "未处理"},
        {tableName: "全民参保人员信息", problemDesc: "重复数据大于100条", problemType: "唯一性", problemRate: "20%", drTableId: 1, problemStatus: "未处理"},
        {tableName: "社会保险个人参保信息", problemDesc: "空值率大于50%", problemType: "完整性", problemRate: "60%", drTableId: 1, problemStatus: "未处理"},
        {tableName: "出生医学证明信息", problemDesc: "空值率大于50%", problemType: "完整性", problemRate: "60%", drTableId: 1, problemStatus: "未处理"},
        {tableName: "中小学生信息", problemDesc: "重复数据大于100条", problemType: "唯一性", problemRate: "20%", drTableId: 1, problemStatus: "未处理"},
        {tableName: "数据集成", problemDesc: "重复数据大于100条", problemType: "唯一性", problemRate: "20%", drTableId: 1, problemStatus: "未处理"}
      ]
    },
    jumpToList() {

    }
  }
}
</script>

<style>

</style>
