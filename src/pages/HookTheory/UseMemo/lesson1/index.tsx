import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseMemoLesson: React.FC = () => {
  return (
    <Typography>
      <Paragraph>
        <Title>UseMemo初始化</Title>
        <div className="mountMemo mt-20 mb-20" />
        <Text>
          初始化useMemo，就是创建一个hook，然后执行useMemo的第一个参数,得到需要缓存的值，然后将值和deps记录下来，赋值给当前hook的memoizedState。整体上并没有复杂的逻辑。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default UseMemoLesson;
