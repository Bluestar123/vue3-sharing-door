<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input v-model="val" :rules="emialRules"></validate-input>
        {{val}}
        <!-- <div class="form-text text-danger" v-if="emailRef.error">{{emailRef.message}}</div> -->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
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

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const val = ref('aa')
    return {
      list: testData,
      currentUser,
      emialRules,
      val
    }
  }
})
</script>

<style>

</style>
