import React, {useState} from 'react'
class Index extends React.Component{
  constructor(props: any){
     super(props)                       /* 执行 react 底层 Component 函数 */
  }
  props =  {}
  state = {}                              /* state */
  static number = 1                       /* 内置静态属性 */
  static number1 = 0
  handleClick= () => console.log(111)     /* 方法： 箭头函数方法直接绑定在this实例上 */
  componentDidMount(){                    /* 生命周期 */
      console.log(Index.number,Index.number1) // 打印 1 , 2 
  }
  render(){                               /* 渲染函数 */
      return <div style={{ marginTop:'50px' }} onClick={ this.handleClick }  >hello,React!</div>
  }
}
Index.number1 = 2                           /* 外置静态属性 */
Index.prototype.handleClick = ()=> console.log(222) /* 方法: 绑定在 Index 原型链的 方法*/

// 函数组件
function MyIndex(){
  console.log(Index.number) // 打印 1 
  const [ message , setMessage  ] = useState('hello,world') /* hooks  */
  return <div onClick={() => setMessage('let us learn React!')  } > { message } </div> /* 返回值 作为渲染ui */
}
Index.number = 1 /* 绑定静态属性 */
