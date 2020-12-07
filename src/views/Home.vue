<template>
  <div class=''>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataprops } from '../store'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'

export default defineComponent({
  name: '',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataprops>()
    const list = computed(() => store.state.columns)
    console.log(store.getters.biggerColumnsLen)
    return {
      list
    }
  }

})

</script>
<style lang='' scoped>

</style>
