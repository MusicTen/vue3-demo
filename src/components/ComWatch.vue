<template>
  <details>
    <summary>watch-演示</summary>
    <button @click="handleA">非A响应{{ a }}</button>
    <button @click="handleB">响应式{{ b }}</button>
    <button @click="change">count is: {{ state.count }}</button>
  </details>
</template>

<script>
import {
  ref,
  reactive,
  watch,
  watchEffect
} from 'vue'

export default {
  name: 'ComWatch',
  setup() {
    let a = 1
    const handleA = () => {
      a++
      console.log('a:', a)
    }

    const arr = ref([2])
    const b = ref(2)
    const handleB = () => {
      b.value++
    }
    const state = reactive({
      age: 123,
      count: 10
    })
    const change = () => state.count++
    // watch

    // 和vue2的区别是不要写deep属性，默认就是深度监听了
    watch(state, () => {
      console.log('改变')
    })
    // 第一个参数可以是一个回调函数，监听对象上的某个属性
    watch(
      () => state.age,
      (newAge, oldAge) => {
        console.log(newAge, oldAge)
      }
    )
    // 不能使用watch来监听非响应数据a的变化
    watch(
      [arr, b],
      ([newArr, newB], [oldArr, oldB]) => {
        console.log('new:', newArr, newB)
        console.log('old:', oldArr, oldB)
      }
    )

    // watchEffect：watch副作用函数
    watchEffect(() => {
      console.log(state.count, '改变')
    })

    /* 注意它与watch的区别：
      1、watch是需要传入侦听的数据源，而watchEffect是自动收集数据源作为依赖
      2、watch可以访问侦听状态变化前后的值，而 watchEffect 没有
      3、watch是属性改变的时候执行，而watchEffect是默认会执行一次，然后属性改变也会执行
    */
    return {
      a,
      handleA,
      b,
      handleB,
      state,
      change
    }
  }
}
</script>

<style>
</style>
