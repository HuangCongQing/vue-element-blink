<template>
  <div>
    <div id="treemap_cxt" class="cxt" />
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      demoData: []
    }
  },
  mounted() {
    this.demoData = [
      {
        'name': '型号A磁瓦',
        'value': 1000,
        children: [{
          name: '外缺陷', // First leaf of first tree
          value: 300,
          children: [{
            name: '崩缺', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 100
          }, {
            name: '凸点', // Second leaf of first tree
            value: 50
          }, {
            name: '欠磨', // Second leaf of first tree
            value: 50
          }, {
            name: '裂纹', // Second leaf of first tree
            value: 0
          }, {
            name: '结晶', // Second leaf of first tree
            value: 0
          }]
        }, {
          name: '内缺陷', // Second leaf of first tree
          value: 700,
          children: [{
            name: '裂纹', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 200
          }, {
            name: '夹渣', // Second leaf of first tree
            value: 400
          }]
        }]
      },
      {
        'name': '型号B磁瓦',
        'value': 2000,
        children: [{
          name: '外缺陷', // First leaf of first tree
          value: 1000,
          children: [{
            name: '崩缺', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 100
          }, {
            name: '凸点', // Second leaf of first tree
            value: 200
          }, {
            name: '欠磨', // Second leaf of first tree
            value: 300
          }, {
            name: '裂纹', // Second leaf of first tree
            value: 100
          }, {
            name: '结晶', // Second leaf of first tree
            value: 200
          }]
        }, {
          name: '内缺陷', // Second leaf of first tree
          value: 1000,
          children: [{
            name: '裂纹', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 200
          }, {
            name: '夹渣', // Second leaf of first tree
            value: 700
          }]
        }]
      },
      {
        'name': '型号C磁瓦',
        'value': 1500,
        children: [{
          name: '外缺陷', // First leaf of first tree
          value: 1000,
          children: [{
            name: '崩缺', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 100
          }, {
            name: '凸点', // Second leaf of first tree
            value: 200
          }, {
            name: '欠磨', // Second leaf of first tree
            value: 300
          }, {
            name: '裂纹', // Second leaf of first tree
            value: 100
          }, {
            name: '结晶', // Second leaf of first tree
            value: 200
          }]
        }, {
          name: '内缺陷', // Second leaf of first tree
          value: 500,
          children: [{
            name: '裂纹', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 200
          }, {
            name: '夹渣', // Second leaf of first tree
            value: 200
          }]
        }]
      },
      {
        'name': '型号D磁瓦',
        'value': 2000,
        children: [{
          name: '外缺陷', // First leaf of first tree
          value: 600,
          children: [{
            name: '崩缺', // First leaf of first tree
            value: 300
          }, {
            name: '气孔', // Second leaf of first tree
            value: 100
          }, {
            name: '凸点', // Second leaf of first tree
            value: 200
          }, {
            name: '欠磨', // Second leaf of first tree
            value: 0
          }, {
            name: '裂纹', // Second leaf of first tree
            value: 0
          }, {
            name: '结晶', // Second leaf of first tree
            value: 0
          }]
        }, {
          name: '内缺陷', // Second leaf of first tree
          value: 1000,
          children: [{
            name: '裂纹', // First leaf of first tree
            value: 100
          }, {
            name: '气孔', // Second leaf of first tree
            value: 200
          }, {
            name: '夹渣', // Second leaf of first tree
            value: 700
          }]
        }]
      }
    ]
    this.initChart()
  },
  methods: {
    initChart() {
      const myChart = echarts.init(document.getElementById(`treemap_cxt`))
      // style
      function getLevelOption() {
        return [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1
            },
            upperLabel: {
              show: false
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        ]
      }
      myChart.setOption({
        title: {
          text: '磁瓦类型',
          left: 'center'
        },

        tooltip: {
          formatter: function(info) {
            var formatUtil = echarts.format
            var value = info.value
            var treePathInfo = info.treePathInfo
            var treePath = []

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name)
            }

            return [
              '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join(
                '/')) + '</div>',
              '数量: ' + formatUtil.addCommas(value)
            ].join('')
          }
        },
        series: [{
          type: 'treemap',
          name: '缺陷磁瓦分布',
          roam: false,
          nodeClick: 'zoomToNode',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            show: true,
            height: 30
          },
          data: this.demoData, // 数据
          itemStyle: {
            normal: {
              borderColor: '#ccc' // 全体背景
            }
          },
          levels: getLevelOption() // 父类子类样式
        }]
      })
    }
  }

}
</script>
<style>
    .cxt{
        width:100%;
        height: 620px;
    }
</style>
