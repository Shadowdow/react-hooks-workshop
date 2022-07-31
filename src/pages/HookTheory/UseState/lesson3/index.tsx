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
          在类组件中，<Text code>state</Text> 就是一个对象，对应FiberNode的
          <Text code>memoizedState</Text>
          属性，在类组件中当调用 <Text code>setState()</Text> 时更新
          <Text code>memoizedState</Text>
          即可。但是在函数组件中， <Text code>memoizedState</Text>
          被设计成一个链表（Hook对象）：
        </Paragraph>
        <div className="fiber-update mt-20 mb-20" />
      </Typography>

      <Typography>
        <Paragraph>
          <Text type={"danger"}>错误示例- demo1</Text>
          <div className="renderOrder mt-20 mb-20" />
          {/*<Demo1/>*/}
          <div className="fiberLink mt-20 mb-20" />
        </Paragraph>
        <Paragraph>
          <div className="hooksOrder mt-20 mb-20" />
          <ul>
            <li>
              Hook API 调用会产生一个对应的 Hook
              实例（并追加到Hooks链），但是返回给组件的是 state 和对应的 setter
              ， re-render 时框架并不知道这个 setter 对应哪个 Hooks 实例（除非用
              HashMap 来存储 Hooks ， 但这就要求调用的时候把相应的 key 传给
              React ，会增加 Hooks 使用的复杂度）。
            </li>
            <li>
              <Text strong>re-render 时会从第一行代码开始重新执行整个组件</Text>
              ，即会按顺序执行整个 Hooks 链，如果 re-render 时 sth
              不满足，则会执行
              <Text code>useState(5)</Text>
              分支，相反 useState(4) 则不会执行到，导致
              <Text code>useState(5)</Text>
              返回的值其实是4，因为
              <Text strong>
                首次 render 之后，只能通过 useState 返回的 dispatch 修改对应
                Hook 的 memoizedState
              </Text>
              ，因此必须要<Text strong>保证 Hooks 的顺序不变</Text>
              ，所以不能在分支调用 Hooks ，只有在顶层调用才能保证各个 Hooks
              的执行顺序！
            </li>
            <li>setState 返回的 setter 执行会导致 re-render </li>
            <li>
              框架内部会对多次 setter 操作进行合并（循环执行传入的 setter
              ，目的是保证 useState 拿到最新的状态）
            </li>
          </ul>
        </Paragraph>
      </Typography>
    </>
  );
};
export default UseStateLesson3;
