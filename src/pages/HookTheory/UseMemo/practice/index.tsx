import React from "react";
import { Typography } from "antd";
import UseMemoPracticeDemo from "../../Practice/useMemo/useMemoPractice";

const { Title } = Typography;
const UseMemoPracticeContent: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>实现自定义useMemo</Title>
      </Typography>

      <div id={"useState4"}>
        <UseMemoPracticeDemo />
      </div>
    </>
  );
};
export default UseMemoPracticeContent;
