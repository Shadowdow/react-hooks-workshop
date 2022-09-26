import React from "react";
import { Divider, Typography } from "antd";
import Demo1 from "./demo1";
import UseEffectPracticeDemo from "../../Practice/useEffect/useEffectPractice";

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

      <Divider className={"bg-black mt-80"} />
      <div>练习</div>
      <UseEffectPracticeDemo />
    </>
  );
};
export default UseEffectPractice;
