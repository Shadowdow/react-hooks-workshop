import React from "react";
import { Typography, Divider } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;
const UseCallBackLesson1: React.FC = () => {
  return (
    <Typography>
      <Title>mountCallback</Title>
      <Divider />
      <div className="mountCallback my-20" />
    </Typography>
  );
};
export default UseCallBackLesson1;
