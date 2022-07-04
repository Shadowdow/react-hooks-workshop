import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph } = Typography;

const UseEffectLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>useEffect</Title>
      <Paragraph>
        Hook接受useEffect传入的callback返回一个函数，在Fiber的清理阶段将会执行这个函数，从而达到清理effect的效果：
        <div className="useEffectClean mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};

export default UseEffectLesson3;
