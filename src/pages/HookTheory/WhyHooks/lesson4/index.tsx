import React from "react";
import { Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson4: React.FC = () => {
  // TODO 代码形成例子
  return (
    <Typography>
      <Title>Function Component + Hooks</Title>

      <Paragraph>
        <div className="funHooks1 mt-20 mb-20" />
        <div className="funHooks2 mt-20 mb-20" />
        结论：对于 <i>Class Component</i>，我们只需要实例化一次，实例中保存了组件的 <i>state</i>
        。 对于每一次更新只需要调用<Text code>render()</Text>
        就可以。但是在 <i>Function Component</i> 中，
        每一次更新都是一次新的函数执行,为了保存一些 <i>state</i>,执行一些副作用钩子,
          由此，<i>react-hooks</i> 应运而生，
        去帮助记录组件的 <i>state</i>，处理一些额外的副作用。
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson4;
