import React from "react";
import { Typography } from "antd";
import Demo1 from "./demo1";

const { Title } = Typography;
const UseEffectPractice: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>尝试用数组实现自定义useEffect</Title>
      </Typography>
      <div id={"useEffectPractice"}>
        <Demo1 />
      </div>
    </>
  );
};
export default UseEffectPractice;
