# 2、`React`生命周期函数

### 初始渲染

+ 0、`Initalization` -- 初始化`constructor`

+ 1、`componentWillMount` -- 新版被移除

+ 2、`componentDidMount` -- 执行副作用

+ 3、`render` -- 组件渲染

### 更新

+ 1、`componentWillReceiveProps` -- 新版被移除

+ 1、 `static getDerivedStateFromProps`(新版本) -- 函数会在挂载时，或者接受到新的`props`，或者调用了`setState`和`forceUpdate`时调用

+ 2、`shouldComponentUpdate`

+ 3、`componentWillUpdate`

+ 4、`render`

+ 4、`getSnapshotbeforeUpdate`(新版)

+ 5、`componentDidUpdate`

### 卸载

+ 1、`componentWillUnmount`
