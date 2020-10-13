<template>
  <!-- 在vue3中templeate模板的使用方式基本没有发生任何变化
  唯一要注意的就是在模板中使用到的任何响应式数据都要在setup函数中返回（包括方法） -->
  <com-ref></com-ref>
  <com-reactive></com-reactive>
  <com-watch></com-watch>
  <com-computed></com-computed>
  <com-getDOM></com-getDOM>
  <com-provide></com-provide>
  <com-defineAsyncComponent></com-defineAsyncComponent>
  <com-vuex></com-vuex>
  <com-teleport></com-teleport>
  <com-props v-model:a="a" v-model="b"></com-props>
  <com-emit @test-emit="handleEmit"></com-emit>
</template>
<script>
import ComRef from '@/components/ComRef.vue'
import ComReactive from '@/components/ComReactive.vue'
import ComWatch from '@/components/ComWatch.vue'
import ComComputed from '@/components/ComComputed.vue'
import ComGetDOM from '@/components/ComGetDOM.vue'
import ComProvide from '@/components/ComProvide.vue'
import ComDefineAsyncComponent from '@/components/ComDefineAsyncComponent.vue'
import ComVuex from '@/components/ComVuex.vue'
import ComTeleport from '@/components/ComTeleport.vue'
import ComProps from '@/components/ComProps.vue'
import ComEmit from '@/components/ComEmit.vue'
// 在vue3中，通过把大多数的全局API和内部的helper作为ES模块导出来实现减少打包体积
// 这样就能允许现代的打包工具对模块的依赖做静态分析，并且舍弃没有使用到的代码
// 模板编译器同样会生成tree-shaking友好的代码，只有模板中实际使用的功能才会在生成的代码中导入相应的helper
import {
  ref,
  // reactive,
  // computed,
  // watch,
  // watchEffect,
  // toRef, // 把reactive对象上的一个属性变成ref
  // toRefs, // 把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
  // readonly,
  // isRef, // 判断一个值是否是ref
  // isProxy, // 判断一个对象是否是由reactive或者readonly方法创建的代理
  // isReactive, // 判断一个对象是否是由reactive创建的响应式代理
  // isReadonly, // 判断一个对象是否是由readonly创建的只读代理
  // provide, // 依赖注入
  // inject,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance
} from 'vue'

export default {
  name: 'test',
  components: {
    ComRef,
    ComReactive,
    ComWatch,
    ComComputed,
    ComGetDOM,
    ComProvide,
    ComDefineAsyncComponent,
    ComVuex,
    ComTeleport,
    ComProps,
    ComEmit
  },
  setup() {
    // 通过getCurrentInstance获取createApp实例上的全局变量
    const { proxy } = getCurrentInstance()
    console.log('$gobal:', proxy.$gobal)

    // 生命周期
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onUnmounted(() => {
      console.log('unmounted')
    })
    const handleEmit = (val) => {
      console.log('自定义事件派发：', val)
    }
    return {
      a: ref(12),
      b: ref(13),
      handleEmit
    }
  }
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
}
</script>

<style lang="scss">
  ul {
    padding: 10px;
    list-style: none;
    text-align: left;
    li {
      line-height: 1.5em;
      border-bottom: 1px solid #ccc;
    }
  }
  details {
    padding: 10px;
    text-align: left;
    summary {
      margin-bottom: 10px;
    }
  }
  button {
    padding: 0 5px;
    margin-right: 10px;
  }
</style>
