# 3、正确的使用`setState`

+ 1、不直接修改`state` --- 不会渲染组件

+ 2、`setState`可能是异步的 --- 处于性能考虑，`React`可能将多个`setState`合并成一个调用

+ 3、`setState(updater, [callback])`

  > `callback`更新成功后的回调

```js
// 因为props和state可能异步更新，因此依赖它们的值来判断下一个状态

// ❎❎
this.setState({
  counter: this.state.counter + this.props.increment,
}, () => {
  console.log('更新成功后的回调')
})
// ✅✅
this.setState((state, props) => {
  counter: state.counter + props.increment
}, () => {
  console.log('更新成功后的回调')
})
```

```js
// setState合并
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
// 这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。
```