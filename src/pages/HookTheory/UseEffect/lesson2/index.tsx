import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Text } = Typography;

const UseEffectLesson2: React.FC = () => {
  return (
    <Typography>
      <Title> deps 参数很重要</Title>
      <div className="useEffectDeps mt-20 mb-20" />

      <Title level={4}>建议</Title>
      <ul>
        <li>
          组件 re-render
          时，函数组件是重新执行整个函数，其中也包括所有“注册”过的 hooks
          ，默认情况下 useEffect callback 也会被重新执行！
        </li>
        <li>
          useEffect 可以接受第二个参数 <Text code>deps</Text>
          ，用于在 re-render 时判断是否重新执行 callback ，所以 deps
          必须要按照实际依赖传入，不能少传也不要多传！
        </li>
        <li>
          <Text code>deps</Text>数组项必须是{" "}
          <Text type={"danger"}> mutable </Text> 的，比如不能也不必传 useRef 、
          dispatch 等进去
        </li>
        <li>
          <Text code>deps</Text>
          的比较其实是浅比较，传入对象、函数进去是无意义
        </li>
        <li>
          作为最佳实践，使用 useEffect 时请尽可能都传 <Text code>deps</Text>
        </li>
      </ul>
    </Typography>
  );
};

export default UseEffectLesson2;
