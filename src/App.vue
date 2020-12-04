<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list='list'></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

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

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>

</style>
