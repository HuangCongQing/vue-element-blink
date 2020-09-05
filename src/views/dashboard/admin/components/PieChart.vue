<!--
 * @Description: 
 * @Author: HCQ
 * @Company(School): UCAS
 * @Date: 2020-08-11 21:45:59
 * @LastEditors: HCQ
 * @LastEditTime: 2020-09-05 14:05:17
-->
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
      default: '400px'
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

      this.chart.setOption({
        backgroundColor: '#161627',
        title: {
          top: 0, // 位置
          text: '不同供应商物料批次良品率分布图', // 分布图名字
          left: 'center',
          textStyle: {
            color: '#eee',
            fontSize: 18
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['内弧面', '外弧面', '端面', '纵切面', '顶角'],
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: '内弧面' },
              { value: 240, name: '外弧面' },
              { value: 149, name: '端面' },
              { value: 100, name: '纵切面' },
              { value: 59, name: '顶角' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
