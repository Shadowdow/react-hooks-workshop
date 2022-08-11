import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseRefLesson2: React.FC = () => {
  return (
    <Typography>
      <Paragraph>
        <Title>UseRef更新</Title>
        <div className="updateRef mt-20 mb-20" />
        <Text>
          函数组件更新useRef做的事情更简单，就是返回了缓存下来的值，
          也就是无论函数组件怎么执行，执行多少次，hook.memoizedState内存中都指向了一个对象，
          所以解释了useEffect,useMemo
          中，为什么useRef不需要依赖注入，就能访问到最新的改变值。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default UseRefLesson2;
