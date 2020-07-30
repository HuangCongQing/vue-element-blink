<template>
  <div class="model-group">
    <model-obj
      src="CombatMech_low.obj"
      mtl="CombatMech_low.mtl"
      background-color="#fff"
      width="1000"
      height="630"
      @on-load="onLoad"
    />
    <!--  :rotation="rotation" -->
    <!-- src\views\dashboard\admin\components\Model3D.vue -->
  </div>
</template>

<script>
// 路径应该写public下路径，而不是绝对路径或相对路径
import { ModelObj } from 'vue-3d-model'

export default {
  components: { ModelObj },
  data: function() {
    return {
      rotation: {
        x: 0,
        y: 0,
        z: -Math.PI / 20
      }
    }
  },
  methods: {
    onLoad() {
      this.rotate()
    },
    rotate() {
      this.rotation.z += 0.01
      requestAnimationFrame(this.rotate)
    }
  }
}
</script>
<style scoped>
/* .model-group{

} */
</style>
