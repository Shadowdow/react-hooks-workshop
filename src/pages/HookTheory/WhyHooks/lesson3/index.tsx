import React from "react";
import { Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>Function Component缺失的功能</Title>

      <Paragraph>
        不是所有组件都需要处理生命周期，在React发布之初Function
        Component被设计了出来，用于简化只有render时Class Component的写法。
        <ul>
          <li>Function Component是纯函数，利于组件复用和测试</li>
          <li>
            Function Component的问题是只是单纯地接收props、绑定事件、返回jsx，
            本身是
            <Text strong>
              无状态的组件，依赖props传入的handle来响应数据（状态）的变更，
              所以Function Component不能脱离Class Comnent来存在！
            </Text>
          </li>
        </ul>
        <div className="functionComp mt-20 mb-20" />
        <Text type="success">
          函数组件缺失自身处理states的能力， 在hooks
          出现之前，函数组件在只能负责通过return 进行页面的渲染。
          所有需要父组件（类组件）处理好之后，通过props传入给函数子组件进行渲染。
        </Text>
      </Paragraph>

      <Paragraph>
        所以，Function Comonent是否能脱离Class
        Component独立存在，关键在于让Function Comonent自身具备状态处理能力，
        即在组件首次render之后，“
        <Text strong>
          组件自身能够通过某种机制再触发状态的变更并且引起re-render
        </Text>
        ”，而这种“机制”就是Hooks！
        <Text strong>
          Hooks的出现弥补了Function Component相对于Class
          Component的不足，让Function Component取代Class Component成为可能。
        </Text>
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson3;
