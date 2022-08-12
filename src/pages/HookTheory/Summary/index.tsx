import React from "react";
import { Divider, Typography } from "antd";
// import "./index.css";

const { Title, Paragraph, Text } = Typography;

const Summary: React.FC = () => {
  return (
    <Typography>
      <Title>总结</Title>
      <Divider />
      <Text>首先</Text>
      <div />
      <Text></Text>
    </Typography>
  );
};
export default Summary;
