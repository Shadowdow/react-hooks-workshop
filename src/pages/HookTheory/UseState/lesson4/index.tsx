import React from "react";
import { Menu, Typography } from "antd";
import Demo1 from "./demo1";
import { Link } from "react-router-dom";

const { Title } = Typography;
const UseStateLesson4: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>尝试用数组实现自定义useState</Title>
      </Typography>
      <Link to={"/HookTheory/practice/useState"}>练习</Link>
      <div id={"useState4"}>
        <Demo1 />
      </div>
    </>
  );
};
export default UseStateLesson4;
