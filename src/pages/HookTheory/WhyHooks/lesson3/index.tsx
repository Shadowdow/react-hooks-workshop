import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>Hooks 怎么保存的？</Title>
      <Divider />
      <Paragraph>
        <div className="fourhooks mt-20 mb-20" />
        每次执行一个<Text type={"danger"}> hooks </Text>
        函数，都产生一个<Text type={"danger"}> hook </Text>对象，里面保存了当前
        <Text type={"danger"}>hook</Text>
        信息,然后将每个<Text type={"danger"}>hooks</Text>
        以链表形式串联起来，并赋值给
        <Text code>workInProgress.memoizedState</Text>。
      </Paragraph>
      <Divider />
      <Paragraph>
        当函数组件执行之后，四个hooks和workInProgress将是如图的关系
        <div className="memoizedState1 mt-20 mb-20" />
        知道每个hooks关系之后，我们应该理解了，为什么不能条件语句中，声明hooks。
        <div className="memoizedState2 mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson3;
