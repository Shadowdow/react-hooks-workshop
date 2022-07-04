import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const UseStateLesson3: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>为什么只在最顶层使用 Hook</Title>
        <Divider />
        <Paragraph>
          在类组件中，<Text code>state</Text>就是一个对象，对应FiberNode的
          <Text code>memoizedState</Text>
          属性，在类组件中当调用<Text code>setState()</Text>时更新
          <Text code>memoizedState</Text>
          即可。但是在函数组件中，<Text code>memoizedState</Text>
          被设计成一个链表（Hook对象）：
        </Paragraph>
      </Typography>

      <Typography>
        <Paragraph>
          // TODO 源码
          <div className="fiberLink mt-20 mb-20" />
        </Paragraph>
        <Paragraph>
          <div className="hooksOrder mt-20 mb-20" />
          <ul>
            <li>
              Hook
              API调用会产生一个对应的Hook实例（并追加到Hooks链），但是返回给组件的是state和对应的setter，
              re-render时框架并不知道这个setter对应哪个Hooks实例（除非用HashMap来存储Hooks，
              但这就要求调用的时候把相应的key传给React，会增加Hooks使用的复杂度）。
            </li>
            <li>
              <Text strong>re-render时会从第一行代码开始重新执行整个组件</Text>
              ，即会按顺序执行整个Hooks链，如果re-render时sth不满足，则会执行
              <Text code>useState(5)</Text>
              分支，相反useState(4)则不会执行到，导致
              <Text code>useState(5)</Text>
              返回的值其实是4，因为
              <Text strong>
                首次render之后，只能通过useState返回的dispatch修改对应Hook的memoizedState
              </Text>
              ，因此必须要<Text strong>保证Hooks的顺序不变</Text>
              ，所以不能在分支调用Hooks，只有在顶层调用才能保证各个Hooks的执行顺序！
            </li>
            <li>setState返回的setter执行会导致re-render</li>
            <li>
              框架内部会对多次setter操作进行合并（循环执行传入的setter，目的是保证useState拿到最新的状态）
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </>
  );
};
export default UseStateLesson3;
