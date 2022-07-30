import React from "react";
import { Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>Function Component 缺失的功能</Title>

      <Paragraph>
        不是所有组件都需要处理生命周期，在 React 发布之初 Function
        Component 就已经被设计了出来，用于简化只有 render 时 Class Component 的写法。
        <ul>
          <li>优点：Function Component 是纯函数，利于组件复用和测试</li>
          <li>
            缺点：只是单纯地接收 props、绑定事件、返回 jsx，
            本身是
            <Text strong>
              无状态的组件，依赖 props 传入的 handle 来响应数据（状态）的变更，
              所以 Function Component 不能脱离 Class Component 来存在！
            </Text>
          </li>
        </ul>
        <div className="functionComp mt-20 mb-20" />
        <Text type="success">
          结论：Function Component 缺失自身处理 states 的能力，在 hooks
          出现之前，Function Component 在只能通过 return 进行页面的渲染。
          所有需要父组件（Class Component）处理好之后，通过 props 传入给函数子组件进行渲染。
        </Text>
      </Paragraph>

      <Paragraph>
        所以，Function Component 是否能脱离 Class
        Component 独立存在，关键在于能否让 Function Component 自身具备 states 的处理能力，
        即在组件首次 render 之后，“
        <Text strong>
          组件自身能够通过某种机制再触发 states 的变更并且引起自身的 re-render
        </Text>
        ”，而这种“机制”就是 Hooks！
        <Text strong>
          Hooks的出现弥补了Function Component 相对于 Class
          Component 的不足，让 Function Component 取代 Class Component 成为可能。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson3;
