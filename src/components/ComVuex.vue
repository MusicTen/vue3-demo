<template>
  <details>
    <summary>Vuex-演示</summary>
    <button @click="handle">触发action{{ count }}</button>
  </details>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ComVuex',
  setup() {
    const store = useStore()
    // console.log(store)
    const count = computed(() => store.state.count)

    const handle = () => {
      store.dispatch('increment')
    }

    return {
      count,
      handle
    }
  }
}
</script>

<style>
</style>
