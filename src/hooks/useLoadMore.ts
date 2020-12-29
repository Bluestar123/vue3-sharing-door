import { computed, ComputedRef, ref } from "vue";
import { useStore } from "vuex";

interface LoadParams {
  currentPage: number;
  pageSize: number;
}

// total 响应式的值
const useLoadMore = (actionName: string, total: ComputedRef<number>, params: LoadParams = { currentPage: 2, pageSize: 10 }) => {
  const store = useStore()
  const currentPage= ref(params.currentPage)
  const requestParams = {
    currentPage: currentPage.value,
    pageSize: params.pageSize
  }
  const loadMorePage = () => {
    store.dispatch(actionName, requestParams).then(res => {
      currentPage.value++
    })
  }
  const isLastPage = computed(() => {
    return Math.ceil(total.value / params.pageSize) === currentPage.value
  })
  return {
    loadMorePage,
    isLastPage
  }
}
export default useLoadMore