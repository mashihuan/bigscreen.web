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
      options: {},
      name: 'XX市大数据局',
      nodes: [{
        name: '法定代表人',
        category: 0
      }, {
        name: 'XX市大数据局',
        category: 0
      }, {
        name: '法定代表人2',
        category: 0
      }, {
        name: '法定代表人3',
        category: 0
      },{
        name: '法定代表人4',
        category: 0
      },{
        name: '法定代表人5',
        category: 0
      },{
        name: '法定代表人6',
        category: 0
      },{
        name: '法定代表人7',
        category: 0
      },{
        name: '法定代表人8',
        category: 0
      }, {
        name: '马云',
        category: 1
      }, {
        name: '马云2',
        category: 1
      }, {
        name: '马云3',
        category: 1
      }, {
        name: '马云4',
        category: 1
      }, {
        name: '马云5',
        category: 1
      }, {
        name: '马云6',
        category: 1
      }, {
        name: '马云7',
        category: 1
      }, {
        name: '马云8',
        category: 1
      }, {
        name: '马化腾',
        category: 1
      }, {
        name: '马化腾2',
        category: 1
      }, {
        name: '马化腾3',
        category: 1
      }, {
        name: '马化腾4',
        category: 1
      }, {
        name: '马化腾5',
        category: 1
      }, {
        name: '马化腾6',
        category: 1
      }, {
        name: '马化腾7',
        category: 1
      }, {
        name: '马化腾8',
        category: 1
      }],
      links: [{
        source: 'XX市大数据局',
        target: '法定代表人',
        name: '法人'
      }, {
        source: 'XX市大数据局',
        target: '法定代表人2',
        name: '法人'
      }, {
        source: 'XX市大数据局',
        target: '法定代表人3',
        name: '法人'
      },{
        source: 'XX市大数据局',
        target: '法定代表人4',
        name: '法人'
      },{
        source: 'XX市大数据局',
        target: '法定代表人5',
        name: '法人'
      },{
        source: 'XX市大数据局',
        target: '法定代表人6',
        name: '法人'
      },{
        source: 'XX市大数据局',
        target: '法定代表人7',
        name: '法人'
      },{
        source: 'XX市大数据局',
        target: '法定代表人8',
        name: '法人'
      }, {
        source: '马云',
        target: '法定代表人',
        name: '股东'
      }, {
        source: '马化腾',
        target: '法定代表人',
        name: '股东'
      },{
        source: '马云2',
        target: '法定代表人2',
        name: '股东'
      }, {
        source: '马化腾2',
        target: '法定代表人2',
        name: '股东'
      },{
        source: '马云3',
        target: '法定代表人3',
        name: '股东'
      }, {
        source: '马化腾3',
        target: '法定代表人3',
        name: '股东'
      },{
        source: '马云4',
        target: '法定代表人4',
        name: '股东'
      }, {
        source: '马化腾4',
        target: '法定代表人4',
        name: '股东'
      },{
        source: '马云5',
        target: '法定代表人5',
        name: '股东'
      }, {
        source: '马化腾5',
        target: '法定代表人5',
        name: '股东'
      },{
        source: '马云6',
        target: '法定代表人6',
        name: '股东'
      }, {
        source: '马化腾6',
        target: '法定代表人6',
        name: '股东'
      },{
        source: '马云7',
        target: '法定代表人7',
        name: '股东'
      }, {
        source: '马化腾7',
        target: '法定代表人7',
        name: '股东'
      },{
        source: '马云8',
        target: '法定代表人8',
        name: '股东'
      }, {
        source: '马化腾8',
        target: '法定代表人8',
        name: '股东'
      }],
      categories: [
      {
        name: "股东",
        itemStyle: {
          color: '#4D73F4'
        }
      },
      {
        name: "法人",
        itemStyle: {
          color: '#EA715B'
        }
      }]
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
      this.nodes.forEach(node => {
        if (node.name === this.name) {
          node.symbolSize = 100
          node.itemStyle = {
            color: '#2BBB91'
          }
        }
      })
      this.links.forEach(link => {
        link.label = {
          align: "center",
          fontSize: 12,
        };

        if (link.name === "法人") {
          link.lineStyle = {
            color: '#02A1D7'
          };
        } else if (link.name === "股东" || link.name === '董事成员') {
          link.lineStyle = {
            color: '#EA715B'
          };
        } else  {
          link.lineStyle = {
            color: '#4D73F4'
          };
        }
      })

      this.options = {
        tooltip: {
          trigger: "item",
          formatter: (params)=>{
            return `${params.marker}${params.name}`
          }
        },
        series: [
          {
            type: "graph",
            // layout: "circular",
            layout: "force",
            symbolSize: 58,
            roam: true,
            focusNodeAdjacency: false,
            categories: this.categories,
            edgeSymbol: ["none", "arrow"],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20
                },
                formatter(x) {
                  return x.data.name
                }
              }
            },
            label: {
              show: true,
              color: '#fff'
            },
            force: {
              repulsion: 2000,
              edgeLength: 80
            },
            data: this.nodes,
            links: this.links
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
.chart-wrapper {
  height: calc(100vh - 100px) !important;
}
.chart-inner, .myChart {
  height: 100% !important;
  overflow: hidden;
}
</style>
