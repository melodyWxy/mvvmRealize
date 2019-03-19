//判断属性的更改,
//判断属性的更改也分三个步骤

//遍历旧的属性列表，查看每个属性是否还存在于新的属性列表中
//遍历新的属性列表，判断两个列表中都存在的属性的值是否有变化
//在第二步中同时查看是否有属性不存在与旧的属性列列表中
function diffProps(oldProps, newProps) {
    // 判断 Props 分以下三步骤
    // 先遍历 oldProps 查看是否存在删除的属性
    // 然后遍历 newProps 查看是否有属性值被修改
    // 最后查看是否有属性新增
    let change = []
    for (const key in oldProps) {
      if (oldProps.hasOwnProperty(key) && !newProps[key]) {
        change.push({
          prop: key
        })
      }
    }
    for (const key in newProps) {
      if (newProps.hasOwnProperty(key)) {
        const prop = newProps[key]
        if (oldProps[key] && oldProps[key] !== newProps[key]) {
          change.push({
            prop: key,
            value: newProps[key]
          })
        } else if (!oldProps[key]) {
          change.push({
            prop: key,
            value: newProps[key]
          })
        }
      }
    }
    return change
  }