---
title: basic
order: 0
---

<a name="readme-top"></a>

<div align="center">

<h1>Basic warehouse </h1>

🧩 [@jandiasnow/basic](https://www.npmjs.com/package/@jandiasnow/basic) is an warehouse of frontend basic.

</div>

## 🆚 Compare react versions 16, 17, 18, 19 [参考](https://blog.csdn.net/m0_46486849/article/details/128631509)

| version                                                           | release | feature                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [v16.0.0](https://github.com/facebook/react/releases/tag/v16.0.0) | 2017    | 1. Fiber 架构：重写了 `React` 的核心算法。<br/> 2. Error Boundaries：通过 `componentDidCatch` 方法捕获子组件错误。<br/> 3. Fragment：使用 `<React.Fragment>` 或 `<>` 创建组合组件。<br/> 4. Portals：使用 `ReactDOM.createPortal` 在父组件 DOM 层次之外渲染组件。<br/> 5. 自定义 DOM 属性：支持传递未知的 `HTML` 属性到 `DOM`。<br/> 6. 更好的服务端渲染：通过 `ReactDOMServer.renderToNodeStream `支持流式渲染。<br/> 7. Context API：完全重写的新上下文 API <br/> `React.createContext` |
| [v17.0.0](https://github.com/facebook/react/releases/tag/v17.0.0) | 2020    | 1. 事件委托的改变：将事件处理程序的委托方式从 `document` 更改为 `React` 根节点。<br/>2. 新的 JSX 转换：引入了新的 `JSX` 转换逻辑，可以在不引入 `React` 的情况下使用 `JSX`。<br/>3. 主要专注于内部改进和为未来版本做准备。<br/>                                                                                                                                                                                                                                                            |
| [v18.0.0](https://github.com/facebook/react/releases/tag/v18.0.0) | 2022    | 1. 并发模式（Concurrent Mode）：通过 `React.createRoot` 启用新的并发功能。<br/>2. 自动批处理：对 `setState` 的调用现在在事件处理中自动批处理。<br/>3. 新的挂起（Suspense）功能：扩展了 `Suspense` 组件的能力，用于数据加载。<br/>4. 服务端渲染的改进：包括流式渲染和服务端 `Suspense` 支持。<br/>5. 新的钩子（Hooks）：例如 `useId`，用于生成稳定的唯一标识符。<br/>                                                                                                                      |
| [v19.0.0](https://19.react.dev/reference/react)                   | 2024    | 1. 支持标签 link，meta， script，style，title 等标签，自动添加到头部                                                                                                                                                                                                                                                                                                                                                                                                                      |

## 🪄 hooks

`v16.8.0 引入 hooks`: 把面向生命周期编程变成了面向业务逻辑编程。业务组件的封装方式可以修改成 `Hooks + UI Component`。

#### 1. 优点：

- 解决嵌套问题，简洁，代码量更少：解决了 `HOC` 和 `Render Props` 的嵌套问题，更加简洁
- 解耦：可以更方便地把 UI 和状态分离，做到更彻底的解耦
- 组合：可以引用另外的 Hooks 形成新的 Hooks, 组合变化万千
- 解决类组件的 3 个问题: React Hooks 为函数组件而生，从而解决了类组件的几大问题:
  > - this 指向容易错误；
  > - 业务逻辑被分割在不同声明周期中，使得代码难以理解和维护；
  > - 代码复用成本高（高阶组件容易使代码量剧增）;

#### 2. 缺点

- 还有两个类组件的生命周期函数不能用 hooks 替代：getSnapshotBeforeUpdate 和 componentDidCatch
- 写法上有限制:
  > - 因为 hook 是一个 链式的数据结构 而不是数组，所以不能嵌套，不能在条件判断、循环中使用，会破坏链式结构；
  > - 只能在函数顶层使用，增加了重构旧代码的成本；
  > - react hook 需要利用调用顺序来更新状态和调用钩子函数，放到循环或条件分支中，可能导致调用顺序不一致，导致奇怪的 bug；
- 使用 useState 时，数组对象，使用 push、pop、splice 直接更新，无效:
  > - 比如 let \[nums, setNums] = useState (\[0,1,2]);
  > - nums.push (1) 无效，必须使用 nums=\[…nums, 1]，再 setNums (nums);
  > - 类组件中直接 push 是没问题的；
- 不能使用装饰器
- 额外的学习成本
- 破坏了 PureComponent、React.memo 浅比较的性能优化效果；为了取最新的 props 和 state，每次 render () 都要重新创建事件处理函数；
- 在闭包场景可能会引用到旧的 state、props 值:
  > 解决方法
  >
  > - 不要在 useEffect 里面写太多的依赖项，划分这些依赖项成多个单一功能的 useEffect。“单一职责模式”
  > - 如果你碰到状态不同步的问题，可以考虑下手动传递参数到函数，而不是取父级作用域的值；
  > - 使用 useRef，保证同一个引用；

## 📝 Usage

### useState

##### `setState(n => n + 1)`: update some state multiple times

<code src="./docs/react/useStateMultipleUpdate.tsx"></code>

##### `useImmer`: updating a nested object or objects inside arrays

<code src="./docs/react/useStateNestedObjectUpdate.tsx"></code>

### useEffect

##### `debounce`: set only the last data received to avoid on-screen data flickering by use ignore

<code src="./docs/react/useStateDebounceUpdate.tsx"></code>

<!-- ### useEffectEvent -->

<!-- ##### `useEffectEvent` -->

<!-- <code src="./docs/react/useEffectEvent.tsx"></code> -->

### useReducer

##### `useReducer`

<code src="./docs/react/useReducer.tsx"></code>

##### `useImmerReducer`

<code src="./docs/react/useReducerImmer.tsx"></code>

### useContext

##### `useContext`

<code src="./docs/react/useContext.tsx"></code>

##### `useContext&useReducer`: use useReducer create useContext

<code src="./docs/react/useContextReducer.tsx"></code>

### useRef

> When to use refs
>
> - Storing `timeout` IDs
> - Storing and manipulating `DOM elements`, which we cover on the next page
> - Storing other `objects` that aren’t necessary to calculate the JSX.
> - If your component needs to store `some value`, but it doesn’t impact the rendering logic, choose refs.

##### `useRef`: useRef doesn’t require a re-render

<code src="./docs/react/useRef.tsx"></code>

##### `new Map()`: use Map store useRef list

<code src="./docs/react/useRefList.tsx"></code>

##### `useImperativeHandle`: use useImperativeHandle get child func or value

<code src="./docs/react/useRefChild.tsx"></code>

<!-- ### useOptimistic

##### `useOptimistic`:

<code src="./docs/react/useOptimistic.tsx"></code> -->

### useTransition

##### `useTransition`: update the state without blocking the UI.

<code src="./docs/react/useTransition.tsx"></code>

### useLayoutEffect

##### `useLayoutEffect`: fires before the browser repaints the screen

<code src="./docs/react/useLayoutEffect.tsx"></code>

### useId

##### `useId`: generating unique IDs that can be passed to accessibility attributes

<code src="./docs/react/useId.tsx"></code>

### useDeferredValue

##### `useDeferredValue`: defer updating a part of the UI

<code src="./docs/react/useDeferredValue.tsx"></code>

<!-- ### useActionState -->

<!-- ##### `useActionState`:  -->

<!-- <code src="./docs/react/useActionState.tsx"></code> -->

### useSyncExternalStore

##### `useSyncExternalStore`: subscribing to an external store with a built-in Hook

<code src="./docs/react/useSyncExternalStore.tsx"></code>

### flushSync

##### `flushSync`: use flushSync force update dom

<code src="./docs/react/flushSync.tsx"></code>

### \</>Profiler

##### `<Profiler id="Sidebar" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {}} ></Profiler>`: measure rendering performance of a React tree

<code src="./docs/react/Profiler.tsx"></code>

### \</>StrictMode

##### `<StrictMode></StrictMode>`: lets you find common bugs in your components early during development.

<code src="./docs/react/StrictMode.tsx"></code>

### \</>Suspense

##### `<Suspense fallback={<Loading />}></Suspense>`: lets you display a fallback until its children have finished loading.

<code src="./docs/react/Suspense.tsx"></code>

### cache (server)

##### `cache`: only for use with React Server Components ; lets you cache the result of a data fetch or computation.

```
const func = cache(calculateFunc);


import {cache} from 'react';

const calculateNorm = cache((x, y, z) => {
  // ...
});

function MapMarker(props) {
  // ✅ Good: Pass primitives to memoized function
  const length = calculateNorm(props.x, props.y, props.z);
  // ...
}

function App() {
  return (
    <>
      <MapMarker x={10} y={10} z={10} />
      <MapMarker x={10} y={10} z={10} />
    </>
  );
}

```

### lazy

##### `lazy`: defer loading component’s code until it is rendered for the first time.

<code src="./docs/react/lazy.tsx"></code>

### memo

##### `memo`: skip re-rendering a component when its props are unchanged (when its parent component is re-rendered).

<code src="./docs/react/memo.tsx"></code>

### use

##### `use`: read the value of a resource like a Promise or context.（can be called within loops and conditional statements like if）

<code src="./docs/react/use.tsx"></code>

### createPortal

##### `createPortal`: render some children into a different part of the DOM.

<code src="./docs/react/createPortal.tsx"></code>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
