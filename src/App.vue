<template>
  <div class="container">
    <h2>{{testP}}</h2>
    <global-header :user="currentUser"></global-header>
    <!-- <Loading background="rgba(0,0,0,0.8)" text="拼命加载中"></Loading> -->
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 Sharing-door</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ComponentInternalInstance, getCurrentInstance, inject, onBeforeMount, provide, reactive, ref, Ref } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataprops } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import createMessage from './components/createMessage'
// import Loading from './components/Loading.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
    // Loading,
  },
  setup () {
    const location = ref(0)
    provide('location', location)
    const geo = reactive({
      longitude: 90,
      latitude: 135
    })
    provide('geolocation', geo)

    const testP = inject<Ref<number>>('testP')
    if (testP) {
      console.log(testP.value, 456)
      setTimeout(() => {
        testP.value = 123
      }, 2000)
    }
    // createMessage('aaaaaaaaaaa', 'error')

    const store = useStore<GlobalDataprops>()
    const currentUser = computed(() => store.state.user)

    const internalInstance = getCurrentInstance()
    console.log(internalInstance?.appContext.config.globalProperties.$http())
    return {
      currentUser,
      location,
      geo,
      testP
    }
  }
})
</script>

<style>

</style>
