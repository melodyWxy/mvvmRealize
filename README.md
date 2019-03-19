"# mvvmRealize" 
### 数据双向绑定之数据劫持的实现
   dataJackedByEs5.js
   
   实现一个简易的双向绑定，核心思路就是手动触发一次属性的 getter 来实现发布订阅的添加
###  v-dom及diff的实现
    v-dom.js
    diff.js
Virtual Dom 算法的实现也就是以下三步
通过 JS 来模拟创建 DOM 对象
判断两个对象的差异
渲染差异