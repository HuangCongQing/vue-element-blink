<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <panel-group @handleSetLineChartData="handleSetLineChartData" /><!-- 型号磁瓦 -->

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <!-- 雷达图 -->
    <el-row :gutter="32" style="margin-bottom:32px;">
      <el-col>
        <el-time-select
          v-model="startTime"
          placeholder="起始时间"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
        />
        <el-time-select
          v-model="endTime"
          placeholder="结束时间"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }"
        />
      </el-col>
    </el-row>
    <el-row style="margin-bottom:32px;">
      <el-button type="primary">型号A磁瓦</el-button>
      <el-button type="primary">型号B磁瓦</el-button>
      <el-button type="primary">型号C磁瓦</el-button>
      <el-button type="primary">型号D磁瓦</el-button>
    </el-row>
    <el-row :gutter="32" style="margin-bottom:32px;">
      <!-- <el-col :span="24" :xs="24" :sm="24" :lg="8"> -->
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      <!-- </el-col> -->
    </el-row>
    <!-- 扇形图 -->
    <el-row :gutter="32" style="margin-bottom:32px;">
      <!-- <el-col :span="24"> -->
        <el-time-select
          v-model="startTime"
          placeholder="起始时间"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
        />
        <el-time-select
          v-model="endTime"
          placeholder="结束时间"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }"
        />
      <!-- </el-col> -->
    </el-row>
    <!-- 可搜索下拉框 -->
    <el-row style="margin-bottom:32px;">
      <el-button type="primary">型号A磁瓦</el-button>
      <el-button type="primary">型号B磁瓦</el-button>
      <el-button type="primary">型号C磁瓦</el-button>
      <el-button type="primary">型号D磁瓦</el-button>
    </el-row>
    <el-select v-model="value" clearable filterable placeholder="请选择缺陷类型" style="margin-bottom:32px;">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <!-- 扇形图 -->
    <el-row :gutter="32">
      <!-- <el-col :xs="24" :sm="24" :lg="8"> -->
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      <!-- </el-col> -->
    </el-row>
    <!-- 柱状图 -->
    <el-row :gutter="32">
      <!-- <el-col :xs="24" :sm="24" :lg="8"> -->
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      <!-- </el-col> -->
    </el-row>

    <!-- <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
    </el-row> -->
    <!-- <el-row>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
        <Model3D />
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import Model3D from './components/Model3D'

const lineChartData = { // 数据
  newVisitis: {
    expectedData: [130, 120, 161, 164, 175, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
    // expectedData: [
    //   { name: '2016/12/18 6:38:08', value: ['2016/12/18 6:38:08', 80] },
    //   { name: '2016/12/18 16:18:18', value: ['2016/12/18 16:18:18', 60] },
    //   { name: '2016/12/18 19:18:18', value: ['2016/12/18 19:18:18', 90] }
    // ],
    // actualData: [
    // {name:'2016/12/18 00:00:00', value:['2016/12/18 00:00:00', 0]},
    // {name:'2016/12/19 00:00:00', value:['2016/12/19 00:00:00', 0]}
    // ]
  },
  messages: {
    expectedData: [200, 192, 160, 144, 160, 150, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [121, 100, 121, 144, 145, 140, 130],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 162, 165, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart
    // TransactionTable,
    // Model3D
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      startTime: '',
      endTime: '',
      // 可搜索下拉框
      options: [{
        value: '选项1',
        label: '崩缺'
      }, {
        value: '选项2',
        label: '裂纹'
      }, {
        value: '选项3',
        label: '凸点'
      }, {
        value: '选项4',
        label: '结晶'
      }, {
        value: '选项5',
        label: '起孔'
      }, {
        value: '选项6',
        label: '欠磨'
      }],
      value: ''
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
