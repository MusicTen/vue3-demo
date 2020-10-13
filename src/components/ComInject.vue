<template>
  <p>父组件传入：a:{{ a }}、 b: {{ b }}</p>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'ComInject',
  setup() {
    // 调用 inject 函数，通过指定的数据名称，获取到父级共享的数据
    const a = inject('a')
    const b = inject('b')

    return {
      a,
      b
    }
  }
}
</script>

<style>
</style>
