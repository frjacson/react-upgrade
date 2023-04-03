// setstate 过程
/**
 * 1. setState会产生当前更新的优先级(老版本用expirationTime, 新版本用lane)
 * 2. 接下来React会从fiber Root根部分向下调和子节点，找到发生更新的组件，合并state，然后触发render函数
 * 3. 接下来到了commit阶段，替换真实dom，完成此次更新流程
 * 4. 在commit 阶段，会执行setState中callback函数 如 setState(obj, () => {...}) 中的函数会在这个时期执行
 */

// 类组件如何限制state更新视图
/**
 * 1. pureComponent可以对state和prop进行浅比较，如果没有变化，那么组件不更新
 * 2. shouldComponentUpdate 生命周期可以通过判断前后 state 变化来决定组件需不需要更新，
 *    需要更新返回true，否则返回false。
 */
// 可以通过flushSync 改变setState的优先级
import React from 'react'
import ReactDOM from 'react-dom'
export default class index extends React.Component{
  state = { number:0 }
  handleClick= () => {
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        console.log(this.state.number)
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
        console.log(this.state.number)
        this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
        console.log(this.state.number)
  }
  render(){
      return <div>
          { this.state.number }
          <button onClick={ this.handleClick }  >number++</button>
      </div>
  }
  // 点击打印 输出的结果是 0, 0, 0, callback1 1 ,callback2 1 ,callback3 1
} 


// 下面是函数组件
export function Index1(props: any){
  const [ number , setNumber ] = React.useState(0)
  /* 监听 number 变化 */
  React.useEffect(()=>{
      console.log('监听number变化，此时的number是:  ' + number )
  },[ number ])
  const handerClick = ()=>{
      /** 高优先级更新 **/
      ReactDOM.flushSync(()=>{
          setNumber(2) 
      })
      /* 批量更新 */
      setNumber(1) 
      /* 滞后更新 ，批量更新规则被打破 */
      setTimeout(()=>{
          setNumber(3) 
      })
     
  }
  console.log(number)
  return <div>
      <span> { number }</span>
      <button onClick={ handerClick }  >number++</button>
  </div>
}