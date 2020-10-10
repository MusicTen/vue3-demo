<template>
  <!-- 在vue3中templeate模板的使用方式基本没有发生任何变化
  唯一要注意的就是在模板中使用到的任何响应式数据都要在setup函数中返回（包括方法） -->
  <div ref="test">Test</div>
  <ul>
    <li>msg: {{ msg }}</li>
    <li>double: {{ double }}</li>
    <li>obj: {{ Object.keys(obj).toString() }}</li>
    <li>arr: {{ arr[0] }}</li>
    <li>age: {{ age }}</li>
  </ul>
  <div class="btn">
    <button @click="handleMsg">按钮1</button>
    <button @click="handleAge">按钮2</button>
    <button @click="handleName">按钮3</button>
    <button>按钮4</button>
  </div>
</template>
<script>
// 在vue3中，通过把大多数的全局API和内部的helper作为ES模块导出来实现减少打包体积
// 这样就能允许现代的打包工具对模块的依赖做静态分析，并且舍弃没有使用到的代码
// 模板编译器同样会生成tree-shaking友好的代码，只有模板中实际使用的功能才会在生成的代码中导入相应的helper
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  toRef, // 把reactive对象上的一个属性变成ref
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
  onUnmounted
} from 'vue'

export default {
  name: 'test',
  setup(props, context) {
    console.log('setup')
    console.log('props:', props, 'context:', context)
    // ref
    const msg = ref(123)
    // 注意setup返回的ref在模板中会自动解开，不需要写.value【setup内部需要.value】
    const handleMsg = () => {
      console.log('按钮1点击了')
      msg.value++
    }
    // reactive
    const obj = reactive({
      name: 'vue3',
      age: 18,
      msg
    })
    const handleName = () => {
      obj.name = 'vue'
      obj.gender = 'male'
    }
    const arr = reactive([1, 2])

    // toRef
    const age = toRef(obj, 'age')
    const handleAge = () => {
      age.value++
    }

    // computed
    const double = computed(() => msg.value * 2)

    // watch
    watch(
      () => obj.age,
      (newAge, oldAge) => {
        console.log(newAge, oldAge)
      }
    )
    watchEffect(() => {
      // watch 副作用函数 首次加载会触发,当值发生变化也会触发
      console.log('年龄:', age.value)
      console.log('年龄:', obj.age)
    })
    const test = ref(null)
    // 生命周期
    onMounted(() => {
      console.log('mounted')
      console.log(test.value)
    })
    onUpdated(() => {
      console.log('updated')
    })
    onUnmounted(() => {
      console.log('unmounted')
    })

    return {
      msg,
      obj,
      arr,
      age,
      double,
      test,
      handleMsg,
      handleAge,
      handleName
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

<style lang="scss" scoped>
  ul {
    padding: 10px;
    list-style: none;
    text-align: left;
    li {
      line-height: 1.5em;
      border-bottom: 1px solid #ccc;
    }
  }
  .btn > button {
    padding: 0 5px;
    margin-right: 10px;
  }
</style>
