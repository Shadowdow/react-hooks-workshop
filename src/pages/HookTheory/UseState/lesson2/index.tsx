import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseStateLesson2: React.FC = () => {
  return (
    <Typography>
      <Title>为什么只能在 React 函数中调用 HookAPI</Title>
      <Divider />
      <Paragraph>
        <Title level={2}>Hooks 基础</Title> 和 <Text code>class</Text>组件的
        <Text code>setState</Text>
        方法类似，我们使用的 hooks 函数中都没法直接实现代码， 而是调用一个叫做
        <Text code>dispatcher</Text> 的对象中相应函数。
        <Link
          href="https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js#L74"
          target="_blank"
        >
          源码地址
        </Link>
        <div className="dispatcher mt-20 mb-20" />
      </Paragraph>
      <Paragraph>
        函数组件是在<Text type={"success"}> renderWithHooks </Text>
        函数内执行的。
        <div className="renderWithHooks mt-20 mb-20" /> 以
        <Text code>useState</Text> 为例，<Text code>useState</Text> 内部会调用
        <Text code>ReactCurrentDispatcher.current.useState</Text> ，
        由于只有在函数组件执行前才会将
        <Text code>ReactCurrentDispatcher.current</Text>
        设置为 <Text code>HooksDispatcherOnMount</Text> 或
        <Text code>HooksDispatcherOnUpdate</Text> ， 当函数组件执行完后
        <Text code>ReactCurrentDispatcher.current</Text> 马上被设置为
        <Text code>ContextOnlyDispatcher</Text> ， 所以在 React 函数外使用
        <Text code>useState</Text> 时，<Text code>useState</Text> 内部会调用
        <Text code>ContextOnlyDispatcher.useState</Text> ，
        该函数是会报错的。其他 <Text code>hooks</Text> 同理。
      </Paragraph>
    </Typography>
  );
};
export default UseStateLesson2;
