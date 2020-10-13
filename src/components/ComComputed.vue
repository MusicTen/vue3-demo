<template>
  <details>
    <summary>computed-演示</summary>
    <button @click="handleA">响应式{{ a }}</button>
    <button>computed{{ b }}</button>
  </details>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ComComputed',
  setup() {
    const a = ref(1)
    const handleA = () => a.value++
    const b = computed(() => a.value * 2)
    return {
      a,
      handleA,
      b
    }
  }
}
</script>

<style>
</style>
