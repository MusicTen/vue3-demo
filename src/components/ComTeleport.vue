<template>
  <details>
    <summary>Teleport-演示</summary>
    <button @click="flag=true">点击</button>
    <teleport to="body">
      <div v-if="flag">
        <div>模态框</div>
      </div>
    </teleport>
  </details>
</template>

<script>
import { ref } from 'vue'

// Teleport 传送门
// 场景：某一些组件中我们可能需要一个模态框的功能，然而虽然逻辑上来说这个模态框是属于该组件中的，
// 但是实际操作一般需要把这个框子挂到body上。Teleport 组件就是帮我们处理这个问题的
export default {
  name: 'ComTeleport',
  setup() {
    const flag = ref(false)
    return { flag }
  }
}
</script>

<style>
</style>
