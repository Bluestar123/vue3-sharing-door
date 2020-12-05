<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input @focus="focus" @input="input" type="text" placeholder="请输入邮箱地址" v-model="emailVal" :rules="emialRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <validate-input :rules="passwordRules" type="password" placeholder="请输入密码" v-model="passwordVal"></validate-input>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, InputHTMLAttributes, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是一个test1的专栏，有一段非常有意思的简介，可以更新一下',
    avatar: 'https://api.ixiaowai.cn/api/api.php'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是一个test2的专栏，有一段非常有意思的简介，可以更新一下'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是一个test3的专栏，有一段非常有意思的简介，可以更新一下',
    avatar: 'https://api.ixiaowai.cn/api/api.php'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是一个test4的专栏，有一段非常有意思的简介，可以更新一下',
    avatar: 'https://api.ixiaowai.cn/api/api.php'
  }
]

const currentUser: UserProps = {
  isLogin: true,
  name: '测不准'
}

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
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')

    const input = (e: InputEvent) => {
      console.log((e.target as HTMLInputElement).value)
    }
    const focus = () => {
      console.log(123)
    }
    return {
      list: testData,
      currentUser,
      emialRules,
      emailVal,
      passwordRules,
      passwordVal,
      input,
      focus
    }
  }
})
</script>

<style>

</style>
