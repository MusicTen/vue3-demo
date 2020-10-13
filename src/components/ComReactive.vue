<template>
  <details>
    <summary>reactive-演示</summary>
    <button @click="handleMsg">响应式:{{ state.msg }}</button>
    <button @click="handleAge">响应式:{{ age }}</button>
    <button>{{ type }}</button>
    <button @click="handleArr">{{ arr }}</button>
  </details>
</template>

<script>
import {
  reactive,
  isReactive, // 判断一个对象是否是由reactive创建的响应式代理
  toRef, // 把reactive对象上的一个属性变成ref
  toRefs // 把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
} from 'vue'

export default {
  name: 'ComReactive',
  setup() {
    const state = reactive({ msg: 1, age: 123 })
    const obj = reactive({ type: 'vue3' })

    console.log('state:', state)
    console.log(isReactive(state))

    const handleMsg = () => {
      state.msg++
    }

    // toRef
    const age = toRef(state, 'age')
    const handleAge = () => {
      age.value++
    }

    const arr = reactive([1, 2, 3])
    const handleArr = () => {
      console.log(arr)
      arr.push(4)
    }
    return {
      state,
      handleMsg,
      age,
      handleAge,
      ...toRefs(obj),
      arr,
      handleArr
    }
  }
}
</script>

<style>
</style>
