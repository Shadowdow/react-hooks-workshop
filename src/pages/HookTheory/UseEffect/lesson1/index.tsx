import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const UseEffectLesson1: React.FC = () => {
  return (
    <Typography>
      <Title>mountEffect</Title>
      <Paragraph>
        上述讲到了无状态组件中fiber对象memoizedState保存当前的hooks形成的链表。那么updateQueue保存了什么信息呢，我们会在接下来探索useEffect过程中找到答案。
        当我们调用useEffect的时候，在组件第一次渲染的时候会调用mountEffect方法，这个方法到底做了些什么？
        <div className="mountEffect my-20" />
        <Text>
          每个hooks初始化都会创建一个hook对象，然后将hook的memoizedState保存当前effect
          hook信息。
        </Text>
        <div className="mountEffectImpl my-20" />
      </Paragraph>
    </Typography>
  );
};
export default UseEffectLesson1;
