import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Text } = Typography;

const UseEffectLesson2: React.FC = () => {
  return (
    <Typography>
      <Title> UpdateEffect</Title>
      <div className="updateEffect mt-20 mb-20" />
      <div className="updateEffectImpl mt-20 mb-20" />

      <Text>
        useEffect 做的事很简单，判断两次deps
        相等，如果相等说明此次更新不需要执行，则直接调用 pushEffect,这里注意
        effect的标签，hookEffectTag,如果不相等，那么更新 effect
        ,并且赋值给hook.memoizedState，这里标签是 HookHasEffect |
        hookEffectTag,然后在commit阶段，react会通过标签来判断，是否执行当前的
        effect 函数。
      </Text>
    </Typography>
  );
};

export default UseEffectLesson2;
