<template>
  <div class="model-group">
    <div 大家好 />
    <model-obj 
      src="../../../../../public/CombatMech_low.obj"
      scale="{ x: 0.8, y: 0.8, z: 0.8 }"
      background-color="rgb(0,0,0)"
    />
    <!-- src\views\dashboard\admin\components\Model3D.vue -->
  </div>
</template>

<script>
import { ModelObj } from 'vue-3d-model'

export default {
  components: { ModelObj }
}
</script>
<style scoped>
/* .model-group{

} */
</style>
