import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson4: React.FC = () => {
  return (
    <Typography>
      <Title>函数组件更新</Title>
      <Divider />
      <div className="functionUpdate mt-20 mb-20" />
      <Text>
        首先，如果是第一次执行hooks函数，那么从current树上取出memoizedState
        ，也就是旧的hooks。
      </Text>
      <div />
      <Text>
        然后，明变量nextWorkInProgressHook，这里应该值得注意，正常情况下，一次renderWithHooks执行
        ，workInProgress上的memoizedState会被置空，hooks函数顺序执行，nextWorkInProgressHook应该一直为null，
        那么什么情况下nextWorkInProgressHook不为null,也就是当一次renderWithHooks执行过程中，执行了多次函数组件，
        也就是在renderWithHooks中这段逻辑。
      </Text>
    </Typography>
  );
};
export default WhyHooksLesson4;
