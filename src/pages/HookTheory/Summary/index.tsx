import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const Summary: React.FC = () => {
  return (
    <Typography>
      <Title>总结</Title>
      <Divider />
      <Title level={3}>函数组件和类组件的区别</Title>
      <Text>
        类组件，我们只需要实例化一次，实例中保存了组件的 <Text code>state</Text>{" "}
        等状态。
      </Text>
      <div />
      <Text>
        函数组件，每一次更新都是一次新的函数执行,通过hooks记录组件的状态，处理一些额外的副作用。
      </Text>
      <Title level={3}>函数组件怎么执行的</Title>
      <Text>
        通过 <Text code>renderWithHooks</Text>来调用函数组件
      </Text>
      <div className="renderWithHooks my-20" />
      <div />
      <Text>
        hooks信息会以链表的形式保存在{" "}
        <Text code>workInProgress.memoizedState</Text> 中
      </Text>
      <div />
      <Text>
        函数组件执行后会生成 <Text code>ContextOnlyDispatcher</Text>{" "}
        对象，判断在hooks执行是否在函数组件内部，捕获并抛出异常的。
      </Text>
      <Title level={3}>函数组件初始化</Title>
      <div className="mountWork my-20" />
      <div className="memoizedState2 my-20" />
      <Title level={3}>函数组件更新</Title>

      <Title level={3}>常用hooks的初始化和更新过程，以及手写练习</Title>
    </Typography>
  );
};
export default Summary;
