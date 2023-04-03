// 了解类组件生命周期

/**
 * 1. 组件挂载时，constructor(初始化state, 绑定this，函数防抖) --> static
 *  getDerivedStateFromProps(根据prop, state返回新的state) --> render --> componentDidMount
 * 2. 组件更新时 static getDerivedStateFromProps --> shouldComponentUpdate(nextProps, nextState) => boolean() -> render ->
 *  getSnapshotBeforeUpdate(prevProps, prevState) （在dom更新前执行，返回值将作为第三个参数传递到componetDidUpdate）-> componentDidUpdate
 * 3. 组件卸载时：componetWillUnMount
 */

// 了解函数组件生命周期
/**
 *  1. useEffect(cb, deps): 在无依赖时，每次函数组件渲染时都会运行cb；当依赖为[]时，仅会在挂载时运行，可以用于模拟类组件中ComponetDidMount；
 *  当存在依赖且不为[]时，初始和每次依赖更新都会运行；cb返回的函数会在新cb运行前作为一个清理函数运行；
    2.useLayoutEffect: 使用方式与useEffect类似，但是执行时机不同；
    首先他们都是在commit阶段运行，但是useEffect是异步运行，在浏览器绘制dom后执行，
    useLayoutEffect会在修改dom后但浏览器绘制前同步执行，会阻塞浏览器绘制，执行时机与类组件中的 componentDidMount componentDidUpdate一致
 */

// 不是很了解，还需要进一步学习