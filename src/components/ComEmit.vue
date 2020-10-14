<template>
  <details>
    <summary>自定义事件派发-演示</summary>
    <button @click="handle">发送</button>
  </details>
</template>

<script>

export default {
  name: 'ComEmit',
  setup(props, context) {
    const handle = () => {
      context.emit('test-emit', 123)
    }

    return {
      handle
    }
  }
}
</script>

<style>
</style>
