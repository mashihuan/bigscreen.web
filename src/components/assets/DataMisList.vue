<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <h4 class="title">未正常更新数据列表</h4>
      <div class="table-wrap">
        <el-table
          class="assets-table"
          :data="data"
          style="width: 100%">
          <el-table-column
            label="表名"
            prop="tableName">
          </el-table-column>
          <el-table-column
            label="数据表问题"
            prop="problemDesc">
          </el-table-column>
          <el-table-column
            label="问题类型"
            prop="problemType">
          </el-table-column>
          <el-table-column
            label="比率"
            prop="problemRate">
          </el-table-column>
          <el-table-column
            label="状态"
            prop="problemStatus">
            <template slot-scope="scope">
              <span style="color:red">{{ scope.row.problemStatus }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button
                size="mini"
                type="text">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    handleEdit(index, row) {
      this.$router.push('/assets/detail?id=' + row.drTableId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.table-wrap {
  height: 1.71875rem;
  overflow: auto;
}
</style>
