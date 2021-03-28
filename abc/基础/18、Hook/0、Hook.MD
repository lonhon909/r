# 0、`Hook`

那么，什么是 Hook?

> Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。

Hook 使用规则

+ 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

+ 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用