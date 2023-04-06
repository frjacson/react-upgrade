// React中的防抖和节流
/**
 * 如果遇到某个事件需要频繁的和浏览器交互，则需要考虑防抖和节流函数
 */


// 监听滚动条 使用节流函数
// export default function Index(){
//   /* useCallback 防止每次组件更新都重新绑定节流函数  */
//   const handleScroll = React.useCallback(throttle(function(){
//       /* 可以做一些操作，比如曝光上报等 */
//   },300))
//   return <div className="scrollIndex"  onScroll={handleScroll} >
//       <div className="scrollContent" >hello,world</div>
//  </div>
// }


// 按需引入
// React + CSS3 开启GPU加速
//transform 是由 GPU 直接控制渲染的，所以不会造成浏览器的重排。
export default function Index(){
  const [ position , setPosition ] = useState({ left:0,top:0 })
  const changePosition = ()=>{
      let time = 0
      let timer = setInterval(()=>{
          if(time === 30) clearInterval(timer)
          setPosition({ left:time * 10 , top:time * 10 })
          time++ 
      },30)
  }
  const { left , top } = position
  return <div>
       <button onClick={ changePosition } >改变位置</button>
       <div className='current' style={{ transform:`translate(${ left }px,${ top }px )` }}  ></div>
  </div>
}

