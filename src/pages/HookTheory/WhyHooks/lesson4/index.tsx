import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson4: React.FC = () => {
  return (
    <Typography>
      <Title>Hook更新阶段</Title>
      <Divider />
      <div className={"flex items-center mt-20 mb-20"}>
        <div className="updateHookSimple " />
        <div className="doubleTree ml-40" />
      </div>

      <Divider className={"bg-black"} />

      <div className="updateWorkInProgressHook mt-40" />
    </Typography>
  );
};
export default WhyHooksLesson4;
