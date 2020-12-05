<template>
  <div class='validate-input-container pb-3'>
    <input
      type="email"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue'

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

interface RuleProp {
  type: 'required' | 'email' | 'range';
  message: string;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: '',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  components: {},
  // 不希望组件的根元素集成attribute
  inheritAttrs: false,
  setup (props, { emit }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'range':
              passed = (inputRef.val.trim()).length >= 3 && (inputRef.val.trim()).length <= 12
              break
            default:
              break
          }
          return passed
        })
        console.log(allPassed)
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }

})

</script>
<style lang='' scoped>

</style>
