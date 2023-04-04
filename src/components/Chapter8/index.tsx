import React from 'react'
// HOC 的使用
// HOC两个常见应用
// HOC 作用
/**
 * 1. 强化 props ，可以通过 HOC ，向原始组件混入一些状态。
 * 2. 渲染劫持，可以利用 HOC ，动态挂载原始组件，还可以先获取原始组件的渲染树，进行可控性修改。
 * 3. 可以配合 import 等 api ，实现动态加载组件，实现代码分割，加入 loading 效果。
 * 4. 可以通过 ref 来获取原始组件实例，操作实例下的属性和方法（类组件）。
 * 5. 可以对原始组件做一些事件监听，错误监控等。
 */

// 1. 属性代理
function HOC1(WrapComponent: React.Component){
  return class Advance extends React.Component{
     state={
         name:'alien'
     }
     render(){
         return <WrapComponent  { ...this.props } { ...this.state }  />
     }
  }
}

// 2. 反向继承
class Index extends React.Component{
  render(){
    return <div> hello,world  </div>
  }
}
function HOC(Component){
    return class wrapComponent extends Component{ /* 直接继承需要包装的组件 */
        
    }
}
export default HOC(Index)