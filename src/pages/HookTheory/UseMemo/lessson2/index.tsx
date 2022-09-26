import React from "react";
import { Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text, Link } = Typography;

const UseMemoLesson2: React.FC = () => {
  return (
    <Typography>
      <Paragraph>
        <Title>UseMemo更新</Title>
        <div className="updateMemo mt-20 mb-20" />
        <Text>
          在组件更新过程中，我们执行useMemo函数，做的事情实际很简单，就是判断两次
          deps是否相等，如果不想等，证明依赖项发生改变，那么执行
          useMemo的第一个函数，得到新的值，然后重新赋值给hook.memoizedState,如果相等
          证明没有依赖项改变，那么直接获取缓存的值。
        </Text>
        <div />
        <Text>
          不过这里有一点，值得注意，nextCreate()执行，如果里面引用了usestate等信息，变量会被引用，
          <Text strong>无法被垃圾回收机制回收</Text>
          ，就是闭包原理，那么访问的属性有可能不是最新的值，所以
          <Text strong>需要把引用的值，添加到依赖项 dep 数组中</Text>
          。每一次dep改变，重新执行，就不会出现问题了。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default UseMemoLesson2;
