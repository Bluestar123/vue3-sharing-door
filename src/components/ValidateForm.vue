<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="row">
      <div class="submit-area col" @click.prevent="submitForm">
        <slot name="submit">
          <button type="submit" class="btn btn-primary">提交</button>
        </slot>
      </div>
      <div class="submit-area col" @click.prevent="resetForm">
        <slot name="reset">
          <button type="reset" class="btn btn-default">清空</button>
        </slot>
      </div>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type ValidateFunc = () => boolean
type resetFunc = () => void
// 需要给子组件使用，导出
export const emitter = mitt()

export default defineComponent({
  name: '',
  components: {},
  emits: ['form-submit', 'reset-form'],
  setup (props, { emit }) {
    let funcArr: ValidateFunc[] = []
    let resetFuncArr: resetFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      emit('form-submit', result)
    }

    const callback = (func: ValidateFunc | undefined) => {
      funcArr.push(func as ValidateFunc)
    }

    const resetCallBack = (func: resetFunc | undefined) => {
      resetFuncArr.push(func as resetFunc)
    }

    emitter.on('form-item-created', callback)
    emitter.on('reset-form-val', resetCallBack)

    const resetForm = () => {
      const res = resetFuncArr.map(func => func()).every(res => res)
      emit('reset-form', res)
    }

    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
      resetFuncArr = []
    })
    return {
      submitForm,
      resetForm
    }
  }
})

</script>
<style lang='' scoped>

</style>
