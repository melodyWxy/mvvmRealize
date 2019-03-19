//1简单的实现了如何监听数据的 set 和 get 的事件，
//但是仅仅如此是不够的，
//还需要在适当的时候给属性添加发布订阅
//如下：
// 通过 Dep 解耦
class Dep {
    constructor() {
      this.subs = []
    }
    addSub(sub) {
      // sub 是 Watcher 实例
      this.subs.push(sub)
    }
    notify() {
      this.subs.forEach(sub => {
        sub.update()
      })
    }
  }
  // 全局属性，通过该属性配置 Watcher
  Dep.target = null
  
  function update(value) {
    document.querySelector('div').innerText = value
  }
  
  class Watcher {
    constructor(obj, key, cb) {
      // 将 Dep.target 指向自己
      // 然后触发属性的 getter 添加监听
      // 最后将 Dep.target 置空
      Dep.target = this
      this.cb = cb
      this.obj = obj
      this.key = key
      this.value = obj[key]
      Dep.target = null
    }
    update() {
      // 获得新值
      this.value = this.obj[this.key]
      // 调用 update 方法更新 Dom
      this.cb(this.value)
    }
  }
  var data = { name: 'yck' }
  observe(data)
  // 模拟解析到 `{{name}}` 触发的操作
  new Watcher(data, 'name', update)
  // update Dom innerText
  data.name = 'yyy'