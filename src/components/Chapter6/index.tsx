import React, { useEffect, useRef } from 'react'
// 类组件 createRef 
/**
 * 类组件的三种获取方式
 * 1. ref 是一个字符串
 * 2. Ref 是一个函数
 * 3. Ref 是一个对象
 */
// class Children extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <div>hello world</div>
//     )
//   }
// }
// export default class Index extends React.Component{
//   componentDidMount(){
//      console.log(this.refs)
//   }
//   render=()=> <div>
//       <div ref="currentDom"  >字符串模式获取元素或组件</div>
//       <Children ref="currentComInstance"  />
//   </div>
// }
// ref 高级 forwardRef
/**
 * 1. forwardRef 转发 --> 解决ref不能垮层级的问题
 */
function Son(props: any) {
  const { grandRef } = props
  return (
    <div>
        <div> i am alien </div>
        <span ref={grandRef} >这个是想要获取元素</span>
    </div>
  )
}
class Father extends React.Component {
  constructor(props: any) {
    super(props)
  }  
  render(): React.ReactNode {
    return (
      <div>
        <Son grandRef={this.props.grandRef}  />
      </div>
    )
  }
}
const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref} {...props} />)
class GrandFather extends React.Component {
  constructor(props: any) {
    super(props)
  }
  node = null
  componentDidMount(): void {
    console.log(this.node);
  }
  render(): React.ReactNode {
    return (
      <div>
        <NewFather ref={(node)=> this.node = node }></NewFather>
      </div>
    )
  }
}
/**
 * 2. 合并转发Ref, ref不仅仅可以用来获取某个组件的实例
 * > 场景：想通过Home绑定ref，来获取子组件Index的实例index，dom元素button，以及孙组件Form的实例
 */
// 表单组件
class Form extends React.Component{
  render(){
     return <div>...</div>
  }
}
class Index extends React.Component{ 
  componentDidMount(){
      const { forwardRef } = this.props
      forwardRef.current={
          form:this.form,      // 给form组件实例 ，绑定给 ref form属性 
          index:this,          // 给index组件实例 ，绑定给 ref index属性 
          button:this.button,  // 给button dom 元素，绑定给 ref button属性 
      }
  }
  form = null
  button = null
  render(){
      return <div   > 
        <button ref={(button)=> this.button = button }  >点击</button>
        <Form  ref={(form) => this.form = form }  />  
    </div>
  }
}
const ForwardRefIndex = React.forwardRef(( props,ref )=><Index  {...props} forwardRef={ref}  />)
function Home() {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current)
  }, [])
  return <ForwardRefIndex ref={ref} />
}
// 函数组件 useRef 