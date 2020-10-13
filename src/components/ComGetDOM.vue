<template>
  <details>
    <summary>获取DOM-演示</summary>
    <button ref="btn">节点</button>
  </details>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ComGetDOM',
  setup() {
    const btn = ref(null)

    onMounted(() => {
      console.log(btn.value)
    })

    return {
      btn
    }
  }
}
</script>

<style>
</style>
