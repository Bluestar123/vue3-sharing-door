<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 my-2" v-for="column in columnList" :key="column.id">
      <div class="card h-100 shadow-sm">
        <img :src="column.avatar" class="card-img-top" :alt="column.title">
        <div class="card-body text-center">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: '',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  components: {},
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      columnList
    }
  }

})

</script>
<style lang='' scoped>

</style>
