// 把2的发布订阅扔到1里结合一下：
// 改造一下defineReactive函数就可以拉~
function defineReactive(obj, key, val) {
    // 递归子属性
    observe(val)
    let dp = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        console.log('get value')
        // 将 Watcher 添加到订阅
        if (Dep.target) {
          dp.addSub(Dep.target)
        }
        return val
      },
      set: function reactiveSetter(newVal) {
        console.log('change value')
        val = newVal
        // 执行 watcher 的 update 方法
        dp.notify()
      }
    })
  }
  // 至此，就实现了简单的数据双向绑定
  ////核心思路就是手动触发一次属性的 getter 来实现发布订阅的添加