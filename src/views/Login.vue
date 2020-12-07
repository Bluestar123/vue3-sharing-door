<template>
  <div class=''>
    <validate-form @form-submit="onFormSubmit" @reset-form="onResetForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input ref="inputRef" @focus="focus" @input="input" type="text" placeholder="请输入邮箱地址" v-model="emailVal" :rules="emialRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <validate-input :rules="passwordRules" type="password" placeholder="请输入密码" v-model="passwordVal"></validate-input>
      </div>
      <!-- 使用自定义template 对 插槽做转换
      v-slot 组件内部定义的模板名称 -->
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

const emialRules: RulesProp = [
  {
    type: 'required',
    message: '电子邮件地址不能为空'
  },
  {
    type: 'email',
    message: '请输入正确的电子邮箱格式'
  }
]

const passwordRules: RulesProp = [
  {
    type: 'required',
    message: '密码不能为空'
  },
  {
    type: 'range',
    message: '请输入3-12位的密码'
  }
]

export default defineComponent({
  name: '',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const emailVal = ref('')
    const passwordVal = ref('')

    const input = (e: InputEvent) => {
      // console.log((e.target as HTMLInputElement).value)
    }
    const focus = () => {
      console.log(123)
    }

    const onFormSubmit = (res: boolean) => {
      if (res) {
        router.push('/')
        store.commit('login')
      }
    }
    const onResetForm = (res: boolean) => {
      console.log(123, res)
    }
    return {
      emialRules,
      emailVal,
      passwordRules,
      passwordVal,
      input,
      focus,
      onFormSubmit,
      onResetForm
    }
  }

})

</script>
<style lang='' scoped>

</style>
