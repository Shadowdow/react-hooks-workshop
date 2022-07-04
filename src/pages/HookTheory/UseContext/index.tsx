import React from "react";
import { Typography, Divider } from "antd";
// import "./index.css";

const { Title, Paragraph, Text } = Typography;
const UseContextLesson: React.FC = () => {
  return (
    <Typography>
      <Title>useContext</Title>
      <Divider />
      <Paragraph>
        对于组件之间的状态共享，在类组件里边官方提供了Context相关的API：
        <ul>
          <li>
            使用<Text code>React.createContext</Text>
            API创建Context，由于支持在组件外部调用，因此可以实现状态共享
          </li>
          <li>
            使用<Text code>Context.Provider</Text> API在上层组件挂载状态
          </li>
          <li>
            使用<Text code>Context.Consumer</Text>
            API为具体的组件提供状态或者通过<Text code>contextType</Text>
            属性指定组件对Context的引用
          </li>
        </ul>
        在消费context提供的状态时必须要使用`contextType`属性指定Context引用或者用
        <Text code>{"<Context.Consumer>"}</Text>包裹组件，在使用起来很不方便
        <div className="useEffectClean mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};
export default UseContextLesson;
