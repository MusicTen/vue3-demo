<template>
  <details>
    <summary>ref-演示</summary>
    <button @click="handleMsg">响应式{{ msg }}</button>
    <button @click="handleArr">{{ arr }}</button>
  </details>
</template>

<script>
import {
  ref,
  isRef // 判断一个值是否是ref
} from 'vue'

export default {
  name: 'ComRef',
  setup() {
    const msg = ref(1)
    const arr = ref([1, 2, 3])
    console.log('msg:', msg)
    console.log(isRef(msg))
    const handleMsg = () => {
      // 注意setup返回的ref在模板中会自动解开，不需要写.value【setup内部需要.value】
      msg.value++
    }
    const handleArr = () => {
      console.log(arr.value[0])
      arr.value.push(4)
    }
    return {
      msg,
      handleMsg,
      arr,
      handleArr
    }
  }
}
</script>

<style>
</style>
