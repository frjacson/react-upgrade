// 使用Suspence + React.lazy 构建一个loading异步渲染的组件
import React from 'react'
function AysncComponent(Component,api){
  const AysncComponentPromise = () => new Promise(async (resolve)=>{
        const data = await api()
        resolve({
            default: (props) => <Component rdata={data} { ...props}  />
        })
  })
  return React.lazy(AysncComponentPromise)
}