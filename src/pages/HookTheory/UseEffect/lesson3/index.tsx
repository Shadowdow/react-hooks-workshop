import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph } = Typography;

const UseEffectLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>useEffect</Title>
      <Paragraph>
        Hook 接受 useEffect 传入的 callback 返回一个函数，在 Fiber
        的清理阶段将会执行这个函数，从而达到清理 effect 的效果：
        <div className="useEffectClean mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};

export default UseEffectLesson3;
