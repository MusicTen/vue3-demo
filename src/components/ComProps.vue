<template>
  <details>
    <summary>props-演示</summary>
    <button @click="$emit('update:a', 2)">{{ a }}</button>
    <button @click="$emit('update:modelValue', 3)">{{ modelValue }}</button>
  </details>
</template>

<script>

export default {
  name: 'ComProps',
  props: {
    a: Number, // 自定义属性名
    modelValue: Number // vue3中的v-model,所借助的属性是 modelValue 所借助的事件是 update:modelValue (且3中把sync移出掉了)
  },
  // 不能解构props，解构丧失响应
  setup(props, context) {
    console.log('props:', props)
    // console.log('a:', props.a)
    console.log('context:', context)
  }
}
</script>

<style>
</style>
