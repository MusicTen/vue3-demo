<template>
  <details>
    <summary>依赖注入-演示</summary>
    <button @click="add">改变</button>
    <com-inject></com-inject>
  </details>
</template>

<script>
import { ref, provide } from 'vue'
import ComInject from './ComInject.vue'

export default {
  name: 'ComProvide',
  components: {
    ComInject
  },
  setup() {
    // provide('数据名称', 要传递的数据)
    let a = 1
    const b = ref(1)
    provide('a', a)
    provide('b', b)

    // provide/inject 适用于嵌套过深的组件间的传值
    const add = () => {
      a++
      b.value++
      console.log('a:', a) // 改变不被子孙组件响应
    }
    return {
      add
    }
  }
}
</script>

<style>
</style>
