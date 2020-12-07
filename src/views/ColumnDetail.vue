<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-for="column in list" :key="column.id">
      <div class="col-3 text-center">
        <img :src="column.image" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <!-- <post-list :list="list"></post-list> -->
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { testData, testPosts } from '../testData'
// import { PostList } from '../components/PostList.vue'

export default defineComponent({
  name: '',
  components: {
    // PostList
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const currentId = +route.params.id
    const column = computed(() => store.getters.getColumnById(currentId))
    const list = computed(() => store.getters.getPostsByCid(currentId))
    return {
      column,
      list
    }
  }
})

</script>
<style lang='' scoped>

</style>
