<template>
  <div class="model-group">
    <div 大家好 />
    <model-obj
      src="../../../../../public/CombatMech_low.obj"
      mtl="../../../../../public/CombatMech_low.mtl"
      background-color="#8f8f8f"
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
