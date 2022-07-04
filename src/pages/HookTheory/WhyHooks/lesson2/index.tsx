import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson2: React.FC = () => {
  return (
    <Typography>
      <Title>Class Component 复用困局</Title>
      <Paragraph>
        组件并不是单纯的信息孤岛，组件之间是可能会产生联系的，一方面是数据的共享，另一个是功能的复用：
        <ul>
          <li>
            对于组件之间的数据共享问题，React官方采用单向
            <Text strong> 数据流（Flux）</Text>来解决
          </li>
          <li>
            对于（有状态）组件的复用，React团队给出过许多的方案，早期使用CreateClass
            + Mixins， 在使用Class Component取代CreateClass之后又设计了
            <Text code>Render Props</Text>和{" "}
            <Text code>Higher Order Component</Text>， 直到再后来的Function
            Component+ Hooks设计，React团队对于组件复用的探索一直没有停止
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        HOC使用（老生常谈）的问题：
        <ul>
          <li>嵌套地狱，每一次HOC调用都会产生一个组件实例</li>
          <li>
            可以使用类装饰器缓解组件嵌套带来的可维护性问题，但装饰器本质上还是HOC
          </li>
          <li>包裹太多层级之后，可能会带来props属性的覆盖问题</li>
        </ul>
      </Paragraph>
      <Paragraph>
        Render Props：
        <ul>
          <li>数据流向更直观了，子孙组件可以很明确地看到数据来源</li>
          <li>
            但本质上Render
            Props是基于闭包实现的，大量地用于组件的复用将不可避免地引入了callback
            hell（回调地狱）问题
          </li>
          <li>
            丢失了组件的上下文，因此没有<Text code>this.props</Text>
            属性，不能像HOC那样访问<Text code>this.props.children</Text>
          </li>
        </ul>
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson2;
