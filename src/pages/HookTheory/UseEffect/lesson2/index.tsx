import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Text } = Typography;

const UseEffectLesson2: React.FC = () => {
  return (
    <Typography>
      <Title>deps参数很重要</Title>
      <div className="useEffectDeps mt-20 mb-20" />

      <Title level={4}>建议</Title>
      <ul>
        <li>
          组件re-render时，函数组件是重新执行整个函数，其中也包括所有“注册”过的hooks，默认情况下useEffect
          callback也会被重新执行！
        </li>
        <li>
          useEffect可以接受第二个参数<Text code>deps</Text>
          ，用于在re-render时判断是否重新执行callback，所以deps必须要按照实际依赖传入，不能少传也不要多传！
        </li>
        <li>
          deps数组项必须是mutable的，比如不能也不必传useRef、dispatch等进去
        </li>
        <li>deps的比较其实是浅比较，传入对象、函数进去是无意义</li>
        <li>作为最佳实践，使用useEffect时请尽可能都传deps</li>
      </ul>
    </Typography>
  );
};

export default UseEffectLesson2;
