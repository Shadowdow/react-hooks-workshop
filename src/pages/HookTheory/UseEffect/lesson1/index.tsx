import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const UseEffectLesson1: React.FC = () => {
  return (
    <Typography>
      <Title>useEffect</Title>
      <Paragraph>
        <Text code>
          {"export function useEffect(\n" +
            "  create: () => (() => void) | void,\n" +
            "  deps: Array<mixed> | void | null,\n" +
            "): void {\n" +
            "  const dispatcher = resolveDispatcher();\n" +
            "  return dispatcher.useEffect(create, deps);\n" +
            "}\n"}
        </Text>
      </Paragraph>
      <Paragraph>
        作用：处理函数组件中的副作用，如异步操作、延迟操作等，可以替代Class
        Component的<Text code>componentDidMount</Text>、
        <Text code>componentDidUpdate </Text>、
        <Text code>componentWillUnmount</Text>等生命周期。
      </Paragraph>

      <Title level={3}>React Hooks模拟生命周期</Title>
      <Paragraph>
        <Title level={4}>constructor</Title>
        <div className="hooksLife1 mt-20 mb-20" />
        函数组件不需要构造函数,可以通过调用 useState 来初始化 state
      </Paragraph>

      <Paragraph>
        <Title level={4}>componentDidMount</Title>
        class 组件访问 componentDidMount
        <div className="componentDidMount1 mt-20 mb-20" />
        使用 hooks 模拟 componentDidMount useEffect
        <div className="componentDidMount2 mt-20 mb-20" />
        拥有两个参数，第一个参数作为回调函数会在浏览器布局和绘制完成后调用，因此它不会阻碍浏览器的渲染进程。
        第二个参数是一个数组
        <ul>
          <li>
            当数组存在并有值时，如果数组中的任何值发生更改，则每次渲染后都会触发回调。
          </li>
          <li>当它不存在时，每次渲染后都会触发回调。</li>
          <li>
            当它是一个空列表时，回调只会被触发一次，类似于 componentDidMount。
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <Title level={4}>shouldComponentUpdate</Title>
        class 组件访问 shouldComponentUpdate
        <div className="shouldComponentUpdate1 mt-20 mb-20" />
        hooks 模拟 shouldComponentUpdate
        <div className="shouldComponentUpdate2 mt-20 mb-20" />
        React.memo 包裹一个组件来对它的 props 进行浅比较,但这不是一个
        hooks，因为它的写法和 hooks 不同,其实React.memo 等效于
        PureComponent，但它只比较 props。
      </Paragraph>

      <Paragraph>
        <Title level={4}>componentDidUpdate</Title>
        class 组件访问 componentDidUpdate
        <div className="componentDidUpdate1 mt-20 mb-20" />
        hooks 模拟 componentDidUpdate
        <div className="componentDidUpdate2 mt-20 mb-20" />
        值得注意的是，这里的回调函数会在每次渲染后调用，因此不仅可以访问
        componentDidUpdate，还可以访问componentDidMount，如果只想模拟
        componentDidUpdate，我们可以这样来实现。
        <div className="componentDidUpdate3 mt-20 mb-20" />
        useRef
        在组件中创建“实例变量”。它作为一个标志来指示组件是否处于挂载或更新阶段。当组件更新完成后在会执行
        else 里面的内容，以此来单独模拟 componentDidUpdate。
      </Paragraph>

      <Paragraph>
        <Title level={4}>componentWillUnmount</Title>
        class 组件访问 componentWillUnmount
        <div className="componentWillUnmount1 mt-20 mb-20" />
        hooks 模拟 componentWillUnmount
        <div className="componentWillUnmount2 mt-20 mb-20" />
        当在 useEffect
        的回调函数中返回一个函数时，这个函数会在组件卸载前被调用。我们可以在这里面清除定时器或事件监听器。
      </Paragraph>

      <Paragraph>
        <Title level={3}>总结</Title>
        引入 hooks 的函数组件功能越来越完善，在多数情况下，我们完全可以使用 hook
        来替代 class 组件。并且使用函数组件也有以下几点好处。
        <ul>
          <li>纯函数概念，同样的 props 会得到同样的渲染结果。</li>
          <li>可以使用函数组合，嵌套，实现功能更加强大的组件。</li>
          <li>组件不会被实例化，整体渲染性能得到提升。</li>
        </ul>
        但是 hooks
        模拟的生命周期与class中的生命周期不尽相同，我们在使用时，还是需要思考业务场景下那种方式最适合。
      </Paragraph>
    </Typography>
  );
};
export default UseEffectLesson1;
