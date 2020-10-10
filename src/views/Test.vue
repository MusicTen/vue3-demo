<template>
  <div>Test</div>
  <div>{{ msg }}</div>
</template>
<script>
export default {
  name: 'test',
  setup(props, context) {
    const msg = 123;
    console.log('setup');
    console.log('props:', props, 'context:', context);
    return { msg };
  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
};
</script>
<style>
</style>
