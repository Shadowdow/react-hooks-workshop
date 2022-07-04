import React from "react";
import { Typography } from "antd";
import Demo1 from "./demo1";

const { Title } = Typography;
const UseReducerPractice: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>尝试用数组自定义useReducer</Title>
      </Typography>
      <div id={"useEffectPractice"}>
        <Demo1 />
      </div>
    </>
  );
};
export default UseReducerPractice;
