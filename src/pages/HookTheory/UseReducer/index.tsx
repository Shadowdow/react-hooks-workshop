import React from "react";
import { Typography } from "antd";
import { Divider } from "antd/es";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseReducerLesson: React.FC = () => {
  return (
    <Typography>
      <Title>UseReducer</Title>
      <Divider />
      <Paragraph>
        作用：用于管理复杂的数据结构（<Text code>useState</Text>
        一般用于管理扁平结构的状态），基本实现了redux的核心功能，事实上，基于Hooks
        Api可以很容易地实现一个useReducer Hook：
        <div className="useReducer mt-20 mb-20" />
        reducer提供了一种可以在组件外重新编排state的能力，而useReducer返回的
        <Text code>dispatch</Text>对象又是
        <Link
          href="https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer"
          target="_blank"
        >
          “性能安全的”
        </Link>
        ，可以直接放心地传递给子组件而不会引起子组件re-render。
        <div className="useEffectClean mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};
export default UseReducerLesson;
