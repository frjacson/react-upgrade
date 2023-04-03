import React, { ReactElement } from 'react'

function ChildrenComponent() {
  return <div> In this chapter, let's learn about react props ! </div>
}

/* props 接受处理 */
class PropsComponent extends React.Component{
  componentDidMount(){
      console.log(this,'_this')
  }
  render(){
      const {  children , mes , renderName , say ,Component } = this.props as any
      const renderFunction = children[0]
      const renderComponent = children[1]
      /* 对于子组件，不同的props是怎么被处理 */
      return <div>
          { renderFunction() }
          { mes }
          { renderName() }
          { renderComponent }
          <Component />
          <button onClick={ () => say() } > change content </button>
      </div>
  }
}

/* props 定义绑定 */
class Index extends React.Component{
  state={  
      mes: "hello,React"
  }
  node = null
  say= () =>  this.setState({ mes:'let us learn React!' })
  render(){
      return <div>
          <PropsComponent  
             mes={this.state.mes}  // ① props 作为一个渲染数据源
             say={ this.say  }     // ② props 作为一个回调函数 callback
             Component={ ChildrenComponent } // ③ props 作为一个组件
             renderName={ ()=><div> my name is alien </div> } // ④ props 作为渲染函数
          >
              { ()=> <div>hello,world</div>  } { /* ⑤render props */ }
              <ChildrenComponent />             { /* ⑥render component */ }
          </PropsComponent>
      </div>
  }
}

const Children = (props: any)=> (<div>
  <div>hello, my name is {  props.name } </div>
  <div> { props.mes } </div>
</div>)

function  Container(props: any) {
  const ContainerProps = {
      name: 'alien',
      mes:'let us learn react'
  }
   return props.children.map((item: any)=>{
      if(React.isValidElement(item as ReactElement)){ // 判断是 react elment  混入 props
          return React.cloneElement(item,{ ...ContainerProps },item.props.children)
      }else if(typeof item === 'function'){
          return item(ContainerProps)
      }else return null
   })
}

const Index1 = ()=>{
  return <Container>
      <Children />
      { (ContainerProps: any)=> <Children {...ContainerProps} name={'haha'}  />  }
  </Container>
}

// 重点通过构建 Form FormItem组件来巩固学习