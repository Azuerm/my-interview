1. 组件通信：
  - 父子组件：props、emit、$parent、ref、$attrs;
  - 兄弟组件:$parent、$root、eventbus、vuex；
  - 跨层级关系：eventbus、vuex、provide+inject；
***
2. v-if和v-for的优先级：
  - (1)实践中不应该把v-if和v-for放在一起；在文档中也指明了
  - (2)在vue2中v-for优先级高于v-if；在vue3中v-if优先级高于v-for
  - (3)只有两种情况会把v-for和v-if放一起；为了过滤一些不需要渲染的列表，为了避免渲染本该隐藏的列表
***
3. vue生命周期：
  - 概念：vue组件从创建到销毁的过程，8个生命周期钩子
  - 生命周期各阶段：创建setup、挂载、更新、销毁 + 错误处理阶段
***
4. v-model的双向绑定使用和原理：
  - (1)双向绑定是：指令v-model，响应式数据绑定到视图
  - (2)v-model是语法糖，默认情况下相当于：value属性 和 @input事件
  - (3)使用：表单项、组件
  - (4)表单项：text、textare绑定:value属性和input事件；checkbox、radio绑定:checked属性和change事件；select绑定:value属性和change事件
  - (5)组件中使用modelValue属性 和 @update：modelValue事件
***
5. vue中如何扩展一个组件：
  (1)逻辑扩展：mixins、extend、composition api；内容扩展：slots
  (2)mixins复用功能：容易出现同名属性和方法
  (3)插槽slots内容分发
***
6. 子组件可以直接改变父组件的数据嘛？
  (1)组件化开发是单项数据流，子组件不能直接改变父组件的数据
  (2)父组件通过props传递数据给子组件，单向下行绑定；父更新向下流动到子组件，反过来不行；子组件通过$emit触发父组件的自定义事件
***
7. vue项目权限管理如何做？控制到按钮级别的权限怎么做？
  (1)权限管理一般是：页面权限和按钮权限
  (2)具体方案分前端和后端：后端提供权限数据，前端利用vuex/pinia存储信息，进行本地缓存；根据权限数据渲染页面和按钮
  (3)利用路由守卫控制页面跳转
  (4)对于复杂场景，可以结合v-permission和Permission 组件
***
8. 对vue响应式的理解
  (1)响应式：数据变化，视图自动更新
  (2)为什么vue需要响应式？避免频繁操作dom，通过数据驱动，数据变化了就立即更新视图
  (3)好处：通过数据响应式，不需要频繁的操作dom，提高开发效率
  (4)vue2响应式原理：object.defineproperty，检测类型有限，数组需要特殊处理、Map、Set不支持；vue3响应式原理：proxy，支持更多类型
***
9. 对虚拟dom的理解
  (1)虚拟dom是一个虚拟的dom对象，本身是一个js对象，通过不同属性描述视图结构
  (2)好处：将真实元素节点抽象成虚拟dom，有效减少直接操作dom，提高性能；方便实现跨平台，虚拟dom可以自定义渲染器，针对不同平台进行渲染
  (3)如何生成？为组件编写template模版，通过compile编译成渲染函数，在挂载过程中调用render函数生成虚拟dom，通过patch转换为真实dom；通过diff算法比较新旧虚拟dom，更新真实dom
10. diff算法
  (1)diff算法：也称patching算法，比较新旧虚拟dom，更新真实dom
  (2)必要性：diff算法可以精确找到发生变化的地方并更新，哪里变化更新哪里
  (3)何时执行：组件中响应式数据变化了，执行更新函数
  (4)执行方式：更新函数再次执行render获得新的虚拟dom，在执行patch函数，并传入新旧虚拟dom，进行比对变化的地方，最后更新真实dom
  (5)patch过程是一个递归过程，遵循深度优先、同层比较的策略
  (6)vue3中引入的更新策略：编译器优化patchFlags、block等
11. vue2和vue3的区别
  (1)vue2是选项是api，vue3是组合式api或setup语法糖形式，可以向下兼容
  (2)细节：
    没有this；
    生命周期没有create，setup等同于create，卸载改成unmounted；
    vue3中v-if优先于v-for；
    根实例创建从 new App 变成 createApp方法
    全局注册，从静态方法调用 转变 为app实例调用 
    新增了teleport组件
    根div里面可以包含多个template
  (3)vue2和vue3 双向绑定 方法不同
    vue2：object.defineproperty()后添加的属性无法响应式
    vue3: new proxy()后添加的属性可以响应式，不需要循环
  (4)响应式原理不同
    vue2：object.defineproperty() 无法检测到对象属性的添加或删除，需要Vue.set()和Vue.delete();数组无法通过索引修改
    vue3：new proxy() 可以检测到对象属性的添加或删除，数组可以通过索引修改
  (5)支持按需引入，更好支持tree-shaking
***
12. vue3新特性
  (1)api层面Vue3新特性主要包括：composition api、setup语法糖、teleport传送门、fragments片段、emits选项、自定义渲染器、SFC CSS变量(自定义css变量)、suspense组件
  (2)更快：虚拟dom的重写；编译器优化：静态提升、patchFlags、block等；
  基于proxy的响应式系统；
    更小：更好的摇树优化；
    更易维护：typescript+模块化
    更容易扩展：独立的响应化模块、自定义渲染器
***
13. 怎么定义动态路由？怎么获取传过来的动态参数？
  (1)动态路由：url中包含可变部分，可变部分可以作为参数传递给对应的页面组件
  (2)何时使用：例如有一个user组件，本应该对所有用户渲染，但用户id不同，在vue router中，可以在路径中使用动态参数来实现 {path:'/user/:id',components：User},其中 :id 是动态参数
  (3)怎么定义：路径参数用 : 冒号表示
  (4)获取参数：当一个路由被匹配时，它的params的值将在每个组件中作为以this.$route.params形式暴露出来;或者vue3中使用useRoute()获取
  (5)参数还可以有多个
***
14. 从零写一个vue路由
  (1)SPA应用的路由掘金：点击页面跳转，内容改变，但页面不刷新，路由以插件的形式存在
  (2)实现： 1.在router/index.js中定义路由规则，判断哪些路由懒加载； 2.创建路由组件 router-view、router-link； 3.配置路由导航守卫；  4.通过$route.params或者usreRoute()获取路由参数
***
15. key的作用
  (1)key的作用：更高效的更新虚拟dom；优化更新diff算法，提高patch性能
  (2)必要性：vue在patch过程中，判断两个节点是不是 相同节点通过key；相同节点可以复用，不定义key会频繁更新元素，导致patch过程变慢
  (3)使用：v-for循环中使用key，作为唯一标识每个节点，应该避免使用数组索引作为key
  (4)从源代码中可以知道，vue判断两个节点是否相同，主要判断他们的key和元素类型等，如果不设置key，他们的key就是undefined，则可能永远认为是两个相同节点，导致频繁更新，造成大量dom更新操作
*** 
16. vue3项目如何打包优化，减少包体积，以及首屏渲染速度？
 - (1) 代码分隔和懒加载
 - (2) 按需引入
 - (3) 使用tree-shaking
 - (4) 压缩资源
 - (5) 排除大型依赖
 * 首屏渲染速度优化：
 - (1) 预加载关键资源：rel 和 as
 - (2) 服务端渲染SSR、nuxt.js
 - (3) 骨架屏
 - (4) cdn加速静态资源
 - (5) 使用gzip压缩
***
16. nextTick的使用和原理
  (1)nextTick:等待dom更新完成之后执行回调函数
  (2)为什么需要？vue是异步更新策略，如果数据变化了，vue不会立即更新，而是开启一个队列，在同一事件循环所有数据变更会异步的批量更新，在dom更新之后执行回调函数，需要使用nextTick
  (3)何时使用？created中想要获取dom；响应式数据变化后，想立即获取更新后的dom
  (4)如何使用？nextTick(callback) 或者用 await nextTick() 异步之后再获取dom
***
17. watch和computed的区别以及选择？
  - (1)computed:计算属性，依赖其他属性值，可以缓存结果，只有依赖的属性值变化了，才会重新计算，更新缓存值和视图
  - (2)watch:监听属性变化，当监听属性变化了，执行回调函数，不缓存结果
  - (3)computed的特点：具有只读的响应式的返回值，但也可写读；watch特点：检测变化，执行回调函数
  - (4)选择：
    * computed：用在模版中比较多，同步的
    * eatch： 状态变化之后做一些额外的dom操作或异步操作，异步的
***
18. watch和watchEffect有什么区别
  - (1)watch：指定监听的数据，可以获得变化前后的值以及类型，不会立即执行除非设置immediate为true
  - (2)watchEffect：不需要指定监听的数据，只能获得变化后的值，会立即执行
***
19. 父组件和子组件的创建以及挂载顺序
  - (1)创建过程：父组件 -> 子组件，从外到内
  - (2)挂载过程：子组件 -> 父组件，从内到外
  - (3)更新过程：父组件 -> 子组件，从外到内
  - (4)卸载过程：子组件 -> 父组件，从内到外
  - (5)原理：vue创建过程是递归的，先创建父组件，再创建子组件，挂载过程是递归的，先挂载子组件，再挂载父组件
***
20. 如何缓存当前的组件？缓存后怎么更新？
  - (1)组件缓存：keep-alive，keep-alive包裹动态组件，会缓存不活动的组件实例，而不是销毁；组件的状态保存在内存，防止重复渲染
  - (2)使用router-view包裹keep-alive，结合属性include和exclude明确需要缓存的组件
  - (3)缓存后更新和获取：利用actived 和 beforeRouteEnter 钩子函数； actived组件被激活时都会执行，beforeRouteEnter在有路由的项目，每次进入路由都会执行
***
21. 从0到1自己构建一个vue项目，有哪些步骤、哪些重要插件、目录结构？
  - (1)从0创建一个项目：项目构建、引入必要插件、代码规范、提交规范、常用库和组件
  - (2)目前vue3项目我会用vite或者vue create创建项目
  - (3)引入必要的插件：路由插件vue-router、状态管理vuex或pinia、ui库element-plus或ant-design-vue、http工具我会选axios
  - (4)代码规范：eslint、prettier
  - (5)提交规范：husky、commitlint
  - (6)目录结构：src、components、views、assets、utils、store、router、api、config
***
22. 实际工作中，你总结的vue最佳实践有哪些?
  - (1)编码风格：
      * 命名组件是使用 多词 风格避免和html元素冲突
      * 使用细节化定义属性而不是只有一个属性名
      * 属性声明时使用驼峰命名法，模版或jsx中使用短横线命名法
