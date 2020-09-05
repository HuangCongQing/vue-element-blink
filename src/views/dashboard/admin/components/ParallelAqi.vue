<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 3000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '550px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.dataBJ = [
        [1, 55, 9, 56, 0.46, 18, 6, '80%'],
        [2, 25, 11, 21, 0.65, 34, 9, '75%'],
        [3, 56, 7, 63, 0.3, 14, 5, '80%'],
        [4, 33, 7, 29, 0.33, 16, 6, '75%'],
        [5, 42, 24, 44, 0.76, 40, 16, '75%'],
        [6, 82, 58, 90, 1.77, 68, 33, '80%'],
        [7, 74, 49, 77, 1.46, 48, 27, '80%'],
        [8, 78, 55, 80, 1.29, 59, 29, '80%'],
        [9, 267, 216, 280, 4.8, 108, 64, '95%'],
        [10, 185, 127, 216, 2.52, 61, 27, '90%'],
        [11, 39, 19, 38, 0.57, 31, 15, '75%'],
        [12, 41, 11, 40, 0.43, 21, 7, '75%'],
        [13, 64, 38, 74, 1.04, 46, 22, '80%'],
        [14, 108, 79, 120, 1.7, 75, 41, '85%'],
        [15, 108, 63, 116, 1.48, 44, 26, '85%'],
        [16, 33, 6, 29, 0.34, 13, 5, '75%'],
        [17, 94, 66, 110, 1.54, 62, 31, '80%'],
        [18, 186, 142, 192, 3.88, 93, 79, '90%'],
        [19, 57, 31, 54, 0.96, 32, 14, '80%'],
        [20, 22, 8, 17, 0.48, 23, 10, '75%'],
        [21, 39, 15, 36, 0.61, 29, 13, '75%'],
        [22, 94, 69, 114, 2.08, 73, 39, '80%'],
        [23, 99, 73, 110, 2.43, 76, 48, '80%'],
        [24, 31, 12, 30, 0.5, 32, 16, '75%'],
        [25, 42, 27, 43, 1, 53, 22, '75%'],
        [26, 154, 117, 157, 3.05, 92, 58, '90%'],
        [27, 234, 185, 230, 4.09, 123, 69, '95%'],
        [28, 160, 120, 186, 2.77, 91, 50, '90%'],
        [29, 134, 96, 165, 2.76, 83, 41, '85%'],
        [30, 52, 24, 60, 1.03, 50, 21, '80%'],
        [31, 46, 5, 49, 0.28, 10, 6, '75%']
      ]
      this.dataGZ = [
        [1, 26, 37, 27, 1.163, 27, 13, '75%'],
        [2, 85, 62, 71, 1.195, 60, 8, '80%'],
        [3, 78, 38, 74, 1.363, 37, 7, '80%'],
        [4, 21, 21, 36, 0.634, 40, 9, '75%'],
        [5, 41, 42, 46, 0.915, 81, 13, '75%'],
        [6, 56, 52, 69, 1.067, 92, 16, '80%'],
        [7, 64, 30, 28, 0.924, 51, 2, '80%'],
        [8, 55, 48, 74, 1.236, 75, 26, '80%'],
        [9, 76, 85, 113, 1.237, 114, 27, '80%'],
        [10, 91, 81, 104, 1.041, 56, 40, '80%'],
        [11, 84, 39, 60, 0.964, 25, 11, '80%'],
        [12, 64, 51, 101, 0.862, 58, 23, '80%'],
        [13, 70, 69, 120, 1.198, 65, 36, '80%'],
        [14, 77, 105, 178, 2.549, 64, 16, '80%'],
        [15, 109, 68, 87, 0.996, 74, 29, '85%'],
        [16, 73, 68, 97, 0.905, 51, 34, '80%'],
        [17, 54, 27, 47, 0.592, 53, 12, '80%'],
        [18, 51, 61, 97, 0.811, 65, 19, '80%'],
        [19, 91, 71, 121, 1.374, 43, 18, '80%'],
        [20, 73, 102, 182, 2.787, 44, 19, '80%'],
        [21, 73, 50, 76, 0.717, 31, 20, '80%'],
        [22, 84, 94, 140, 2.238, 68, 18, '80%'],
        [23, 93, 77, 104, 1.165, 53, 7, '80%'],
        [24, 99, 130, 227, 3.97, 55, 15, '80%'],
        [25, 146, 84, 139, 1.094, 40, 17, '85%'],
        [26, 113, 108, 137, 1.481, 48, 15, '85%'],
        [27, 81, 48, 62, 1.619, 26, 3, '80%'],
        [28, 56, 48, 68, 1.336, 37, 9, '80%'],
        [29, 82, 92, 174, 3.29, 0, 13, '80%'],
        [30, 106, 116, 188, 3.628, 101, 16, '85%'],
        [31, 118, 50, 0, 1.383, 76, 11, '85%']
      ]
      this.dataSH = [
        [1, 91, 45, 125, 0.82, 34, 23, '80%'],
        [2, 65, 27, 78, 0.86, 45, 29, '80%'],
        [3, 83, 60, 84, 1.09, 73, 27, '80%'],
        [4, 109, 81, 121, 1.28, 68, 51, '85%'],
        [5, 106, 77, 114, 1.07, 55, 51, '85%'],
        [6, 109, 81, 121, 1.28, 68, 51, '85%'],
        [7, 106, 77, 114, 1.07, 55, 51, '85%'],
        [8, 89, 65, 78, 0.86, 51, 26, '80%'],
        [9, 53, 33, 47, 0.64, 50, 17, '80%'],
        [10, 80, 55, 80, 1.01, 75, 24, '80%'],
        [11, 117, 81, 124, 1.03, 45, 24, '85%'],
        [12, 99, 71, 142, 1.1, 62, 42, '80%'],
        [13, 95, 69, 130, 1.28, 74, 50, '80%'],
        [14, 116, 87, 131, 1.47, 84, 40, '85%'],
        [15, 108, 80, 121, 1.3, 85, 37, '85%'],
        [16, 134, 83, 167, 1.16, 57, 43, '85%'],
        [17, 79, 43, 107, 1.05, 59, 37, '80%'],
        [18, 71, 46, 89, 0.86, 64, 25, '80%'],
        [19, 97, 71, 113, 1.17, 88, 31, '80%'],
        [20, 84, 57, 91, 0.85, 55, 31, '80%'],
        [21, 87, 63, 101, 0.9, 56, 41, '80%'],
        [22, 104, 77, 119, 1.09, 73, 48, '85%'],
        [23, 87, 62, 100, 1, 72, 28, '80%'],
        [24, 168, 128, 172, 1.49, 97, 56, '90%'],
        [25, 65, 45, 51, 0.74, 39, 17, '80%'],
        [26, 39, 24, 38, 0.61, 47, 17, '75%'],
        [27, 39, 24, 39, 0.59, 50, 19, '75%'],
        [28, 93, 68, 96, 1.05, 79, 29, '80%'],
        [29, 188, 143, 197, 1.66, 99, 51, '90%'],
        [30, 174, 131, 174, 1.55, 108, 50, '90%'],
        [31, 187, 143, 201, 1.39, 89, 53, '90%']
      ]
      this.schema = [
        { name: 'date', index: 0, text: '采购日期' },
        { name: 'AQIindex', index: 1, text: '价格' },
        { name: 'PM25', index: 2, text: '物料等级' },
        { name: 'PM10', index: 3, text: '第一批次' },
        { name: 'CO', index: 4, text: ' 第二批次' },
        { name: 'NO2', index: 5, text: '第三批次' },
        { name: 'SO2', index: 6, text: '第四批次' },
        { name: '等级', index: 7, text: '良品率' }
      ]
      this.lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      }
      this.chart.setOption({
        backgroundColor: '#333',
        title: {
          top: 5, // 位置
          text: '磁瓦各表面缺陷发生频次统计图', // 分布图名字
          left: 'center',
          textStyle: {
            color: '#eee',
          }
        },
        legend: {
          bottom: 10,
          data: ['北方物料厂', '南方物料厂', '西方物料厂'],
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function(obj) {
            var value = obj[0].value
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                obj[0].seriesName + ' ' + value[0] + '采购日期：' +
                value[7] +
                '</div>' +
                this.schema[1].text + '：' + value[1] + '<br>' +
                this.schema[2].text + '：' + value[2] + '<br>' +
                this.schema[3].text + '：' + value[3] + '<br>' +
                this.schema[4].text + '：' + value[4] + '<br>' +
                this.schema[5].text + '：' + value[5] + '<br>' +
                this.schema[6].text + '：' + value[6] + '<br>'
          }
        },
        // dataZoom: {
        //     show: true,
        //     orient: 'vertical',
        //     parallelAxisIndex: [0]
        // },
        parallelAxis: [
          { dim: 0, name: this.schema[0].text, inverse: true, max: 31, nameLocation: 'start' },
          { dim: 1, name: this.schema[1].text },
          { dim: 2, name: this.schema[2].text },
          { dim: 3, name: this.schema[3].text },
          { dim: 4, name: this.schema[4].text },
          { dim: 5, name: this.schema[5].text },
          { dim: 6, name: this.schema[6].text },
          { dim: 7, name: this.schema[7].text,
            type: 'category', data: ['75%', '80%', '85%', '90%', '95%', '100%'] }
        ],
        visualMap: {
          show: true,
          min: 0,
          max: 150,
          dimension: 2,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            // colorAlpha: [0, 1]
          }
        },
        parallel: {
          left: '5%',
          right: '15%',
          top: 80,
          bottom: 70, // 底部位置
          parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#777'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '北方物料厂',
            type: 'parallel',
            lineStyle: this.lineStyle,
            data: this.dataBJ
          },
          {
            name: '南方物料厂',
            type: 'parallel',
            lineStyle: this.lineStyle,
            data: this.dataSH
          },
          {
            name: '西方物料厂',
            type: 'parallel',
            lineStyle: this.lineStyle,
            data: this.dataGZ
          }
        ]
      })
    }
  }
}
</script>
