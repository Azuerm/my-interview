1. 小程序的分包和拆包是怎么实现的？为什么要分包和拆包？
* 通过小程序的代码分割和懒加载实现的。小程序的代码分割是将小程序的代码分成多个包，每个包包含一部分代码。懒加载是指在小程序运行时，根据需要加载对应的包，而不是一次性加载所有包。
* 好处：提高小程序的加载速度和性能，减少小程序的内存占用；符合微信小程序的开发规范
2. uniapp条件编译是如何实现的？
* #ifdef和#idndef指令,根据不同的平台，编译不同的代码。
3. 跳转页面的方式有哪些？和层级
*navigator 路由
*uni.navigateTo、uni.relaunch 页面跳转
*页面跳转路径层级：最多10层
4. uniapp插件：uni-ui、uView、colorUI、uchart
5. uniapp做小程序登录
  - (1) 执行uni.login获得code
  - (2) 请求微信请求接口，把code传递给后端
  - (3) 返回结果：
      * 第一种：未注册，利用uni.getUserProfile() + 微信一键登录接口loginByWeChat返回数据，一起传递给后端，进行注册；返回用户信息 + token 
      * 第二种：已注册，返回用户信息 + token
6. uniapp做小程序支付
  - (1) 执行uni.requestPayment()，传递参数
  - (2) 后端返回支付参数
7. uniapp做小程序分享
  - (1) 生命周期函数onShareAppMessage()、onShareTimeline()
  - (2) 通过按钮分享open-type="share"
  - (3) 跨平台分享：uni.share()
8. 原生小程序和uniapp开发小程序有什么区别？
  * 原生小程序是微信官方推出的小程序开发框架，使用原生的小程序开发工具进行开发，需要了解小程序的开发规范和API。
  * uniapp是一个跨平台的开发框架，支持小程序、H5、APP等多个平台。
9. 小程序引入比如高德地图、腾讯地图、百度地图，怎么实现？
  - (1) 注册并获取api key
  - (2) 下载地图SDK 或 使用api
  - (3) 引入SDK
  - (4) 配置mainfest.json
  - (5) 注意：用户端定位授权，如果不授权，会出现定位偏差
10. vue3的生命周期和uniapp的生命周期有什么区别?
  - (1)vue3是组合式api生命周期，uniapp是选项式api生命周期
  - (2)vue3：标准生命周期；uniapp：vue标准生命周期 + 页面生命周期 + 应用生命周期
  - (3)
      * vue3组件加载顺序：setup -> onbeforeMount -> onMounted; 
      * uniapp页面加载顺序：Uniapp事件 → Vue3选项式API → Vue3组合式API
          onLoad     → beforeCreate   → 
          → created        → setup()
          onShow     → 
                    → beforeMount    → onBeforeMount
          onReady    → mounted        → onMounted
11. 小程序上传 
  * 小程序分为体验版和正式版
  - (1) 在mainfest.json中配置上传的appid，上传代码自动压缩
  - (2) 发行 小程序-微信
  - (3) 微信开发者工具-上传

  



