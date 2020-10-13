<template>
  <details>
    <summary>异步组件-演示</summary>
    <button @click="show">show</button>
    <com-async v-if="isShow"></com-async>
  </details>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue'

export default {
  name: 'ComDefineAsyncComponent',
  components: {
    ComAsync: defineAsyncComponent(() => import('./ComAsync.vue'))
  },
  setup() {
    const isShow = ref(false)

    const show = () => {
      isShow.value = true
    }

    return {
      isShow,
      show
    }
  }
}
</script>

<style>
</style>
