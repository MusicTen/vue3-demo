# vue3-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```



## vue3

### 生命周期的变化

| vue2          | vue3            |
| ------------- | --------------- |
| beforeCreate  | setUp           |
| created       | setUp           |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeDestroy | onBeforeUnmount |
| destroyed     | onUnmounted     |

### vue3的API

```javascript
import {
    createApp,  // 创建app
    reactive,   // 接收一个普通对象 返回一个响应式数据对象
    ref,        // 将给定的值(确切的说是基本数据类型 int 或 string)创建一个响应式的数据对象
    toRefs,     // 可以将reactive创建出的对象展开为基础类型
    isRef,      // 判断一下是不是ref生成的响应式数据对象
    computed,   // 创建计算属性
    watch,      // 定义监听器
    onMounted,  // 挂载到dom之后
    onUpdated,  // 更新之后
    onUnmounted,// 销毁之后
    effect,     // 副作用函数，响应式对象修改会触发这个函数
    computed    // 计算属性
} from 'vue'
```

