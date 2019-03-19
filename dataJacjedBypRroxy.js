// 原生proxy支持整个对象拦截，且支持数组
// 相当与简化了1，省略了4，再结合23实现一下就可以了~
let onWatch = (obj, setBind, getLogger) => {
    let handler = {
      get(target, property, receiver) {
        getLogger(target, property)
        return Reflect.get(target, property, receiver)
      },
      set(target, property, value, receiver) {
        setBind(value)
        return Reflect.set(target, property, value)
      }
    }
    return new Proxy(obj, handler)
  }
  
  let obj = { a: 1 }
  let value
  let p = onWatch(
    obj,
    v => {
      value = v
    },
    (target, property) => {
      console.log(`Get '${property}' = ${target[property]}`)
    }
  )
  p.a = 2 // bind `value` to `2`
  p.a // -> Get 'a' = 2