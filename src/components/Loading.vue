<template>
  <teleport to="#back">
    <div class='d-flex justify-content-center align-items-center h-100 loading-container'
      :style="{backgroundColor: background || ''}"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <!-- <span class="sr-only">{{text || 'loading'}}</span> -->
        </div>
        <p v-if="text" class="text-primary small">{{text}}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import useDOMCreate from '../hooks/useDOMCreate'

export default defineComponent({
  name: '',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  components: {},
  setup () {
    useDOMCreate('back')
    return {
    }
  }

})

</script>
<style scoped>
.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.loading-content {
  text-align: center;
}
</style>
