<template>
  <div class="chart-container">
    <disk height="100%" width="100%" />
  </div>
</template>

<script>
import Disk from './components/Disk'

export default {
  name: 'MixChart',
  components: { Disk }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

