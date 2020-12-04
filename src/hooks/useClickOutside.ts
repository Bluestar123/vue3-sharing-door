import { ref, Ref, onMounted, onUnmounted } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false)
  const handler = (e: MouseEvent) => {
    // 如果dom存在
    if (elementRef.value) {
      // 如果点击的元素在dom中
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false
      } else {
        isClickOutSide.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutSide
}

export default useClickOutside
