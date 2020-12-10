<template>
  <teleport to="#message">
    <div :class="classObject" v-if='isVisible' class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2" role="alert">
      <span>{{message}}</span>
      <button type="button" class="close" @click.prevent="hide" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted, PropType, ref } from 'vue'
import useDOMCreate from '../hooks/useDOMCreate'
export type MessageType = 'success' | 'error' | 'default'

export default defineComponent({
  name: '',
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  emits: ['close-message'],
  components: {},
  setup (props, { emit }) {
    useDOMCreate('message')

    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
      emit('close-message', true)
    }
    return {
      hide,
      classObject,
      isVisible
    }
  }

})

</script>
<style lang='' scoped>

</style>
