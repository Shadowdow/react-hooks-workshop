import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseRefLesson1: React.FC = () => {
  return (
    <Typography>
      <Paragraph>
        <Title>UseRef初始化</Title>
        <div className="mountRef mt-20 mb-20" />
        <Text>
          mountRef初始化很简单, 创建一个ref对象， 对象的current
          属性来保存初始化的值，最后用memoizedState保存ref，完成整个操作。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default UseRefLesson1;
