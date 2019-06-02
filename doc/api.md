# 文档
这是一个storage本地缓存库，有localStorage、sessionStorage各自全部相关的功能

## api模版
函数简单介绍
localStorage相关函数
  - setLocal 设置localStorage
  - removeLocal 移除localStorage
  - getLocal 获取localStorage
  - clearLocal 清除localStorage
sessionStorage相关函数
  - setSession 设置sessionStorage
  - removeSession 移除sessionStorage
  - getSession 获取sessionStorage
  - clearSession 清除sessionStorage
函数详细介绍

函数参数和返回值（要遵守下面的例子的规则）

- param {string} name1 name1描述
- param {number} [name2] name2描述 ([]代表可选参数)
- param {string|number} name3 name3描述 (| 代表多种类型)
- param {*} name3 name3描述 (*代表任意类型)
- param {boolean} obj.sex 复合参数定义
- return {string} 返回值描述

localStorage相关函数
  - setLocal(key, val) 设置localStorage
  - removeLocal(key) 移除localStorage
  - getLocal(key) 获取localStorage
  - clearLocal() 清除localStorage

举个例子（要包含代码用例）

```js
// 代码
let l = new Storage() 
l.setLocal('zenquan', 23)
console.log(l.getLocal('zenquan'))
l.removeLocal('zenquan')
console.log(l.getLocal('zenquan'))
l.setLocal('jomsou', 24) 
l.clearLocal()
console.log(l.getLocal('jomsou'))
```

sessionStorage相关函数
  - setSession(key, val) 设置sessionStorage
  - removeSession(key) 移除sessionStorage
  - getSession(key) 获取sessionStorage
  - clearSession() 清除sessionStorage

举个例子（要包含代码用例）

```js
l.setSession('zenquan', 23)
console.log(l.getSession('zenquan'))
l.removeSession('zenquan')
console.log(l.getSession('zenquan'))
l.setSession('jomsou', 24) 
l.clearSession()
console.log(l.getSession('jomsou'))
```

特殊说明，比如特殊情况下会报错等
