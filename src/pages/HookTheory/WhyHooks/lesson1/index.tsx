import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const WhyHooksLesson1: React.FC = () => {
  return (
    <Typography>
      <Title>React组件设计理论</Title>
      <Paragraph>
        React以一种全新的编程范式定义了前端开发约束，它为视图开发带来了一种全新的心智模型：
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            React认为，UI视图是数据的一种视觉映射，即
            <Text code>UI = F(DATA)</Text>，这里的<Text code>F</Text>需要负责
            <Text strong>对输入数据进行加工、并对数据的变更做出响应</Text>
          </li>
          <li>
            公式里的<Text code>F</Text>在React里抽象成组件，React是
            <Text strong>以组件（Component-Based）为粒度编排应用</Text>
            的，组件是代码复用的最小单元
          </li>
          <li>
            在设计上，React采用<Text code>props</Text>属性来接收外部的数据，使用
            <Text code>state</Text>属性来管理组件自身产生的数据（状态），
            而为了实现（运行时）对数据变更做出响应需要，React
            <Text strong>采用基于类（Class）的组件设计</Text>！
          </li>
          <li>
            除此之外，React认为<Text strong> 组件是有生命周期 </Text>
            的，因此开创性地将生命周期的概念引入到了组件设计，
            从组件的create到destory提供了一系列的API供开发者使用
          </li>
        </ul>
      </Paragraph>
      <div className="lifeCycle" />
      <Paragraph>
        <Title level={3}>挂载</Title>
        当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
        <ul>
          <li>
            <Text type="success"> constructor() </Text>: 在 React
            组件挂载之前，会调用它的构造函数。
          </li>
          <li>
            <Text type="success"> getDerivedStateFromProps() </Text>: 在调用
            render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
          </li>
          <li>
            <Text type="success"> render() </Text>: render() 方法是 class
            组件中唯一必须实现的方法。
          </li>
          <li>
            <Text type="success"> componentDidMount() </Text>:
            在组件挂载后（插入 DOM 树中）立即调用。
          </li>
        </ul>
        render() 方法是 class
        组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。
      </Paragraph>
      <Paragraph>
        <Title level={3}>更新</Title>
        每当组件的 state 或 props 发生变化时，组件就会更新。 当组件的 props 或
        state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
        <ul>
          <li>
            <Text type="success"> getDerivedStateFromProps() </Text>: 在调用
            render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据
            shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前
            state 或 props 更改的影响。
          </li>
          <li>
            <Text type="success"> shouldComponentUpdate() </Text>: 当 props 或
            state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
          </li>
          <li>
            <Text type="success"> render() </Text>: render() 方法是 class
            组件中唯一必须实现的方法。
          </li>
          <li>
            <Text type="success"> getSnapshotBeforeUpdate() </Text>:
            在最近一次渲染输出（提交到 DOM 节点）之前调用。
          </li>
          <li>
            <Text type="success"> componentDidMount() </Text>:
            在更新后会被立即调用。
          </li>
        </ul>
        render() 方法是 class
        组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。
      </Paragraph>
      <Paragraph>
        <Title level={3}>卸载</Title>
        当组件从 DOM 中移除时会调用如下方法：
        <ul>
          <li>
            <Text type="success"> componentWillUnmount() </Text>:
            在组件卸载及销毁之前直接调用。
          </li>
        </ul>
      </Paragraph>
      这些方法的详细说明，可以参考
      <Link
        href="https://zh-hans.reactjs.org/docs/react-component.html#reference"
        target="_blank"
      >
        官方文档(Link)。
      </Link>
    </Typography>
  );
};
export default WhyHooksLesson1;
