import React from "react";
import { Divider, Menu, Typography } from "antd";
import Demo1 from "./demo1";
import { Link } from "react-router-dom";
import MyUseStateDemo from "../../Practice/useState/useStatePractice";

const { Title } = Typography;
const UseStatePracticeDemo: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>尝试用数组实现自定义useState</Title>
      </Typography>
      <Link to={"/HookTheory/practice/useState"}>讲解</Link>
      <div id={"useState4"}>
        <Demo1 />
      </div>
      <Divider className={"bg-black mt-80"} />
      <div>练习</div>
      <MyUseStateDemo />
    </>
  );
};
export default UseStatePracticeDemo;
