import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";
const { Title, Paragraph, Text } = Typography;

const WhyHooksLesson2: React.FC = () => {
  return (
    <Typography>
      <Title>Hooks 怎么执行的？</Title>
      <Divider />
      <Paragraph>
        <Title level={2}>Hooks是从哪来的？</Title>以 useStatus
        为例：其实hooks都是通过{" "}
        <Text code strong>
          resolveDispatcher(){" "}
        </Text>
        创建的。
        <div className={"flex my-20"}>
          <div className="dispatcher mr-20" />
          <div className="reactCurrentDispatcher" />
        </div>
        我们看到
        <Text type={"danger"} code>
          {" "}
          ReactCurrentDispatcher.current
        </Text>
        初始化的时候为null，然后就没任何下文了。
      </Paragraph>

      <Paragraph>
        <Title level={2}>函数组件是什么时候执行的？</Title>
        <Text code strong>
          renderWithHooks
        </Text>{" "}
        函数作用是调用函数组件,所有的函数组件都会在
        <Text code strong>
          renderWithHooks
        </Text>{" "}
        中执行。
      </Paragraph>

      <Paragraph>
        <div className="renderWithHooks2" />
        <Title level={4}>执行步骤</Title>
        <ol>
          <li>
            清空 <Text code>workInProgress</Text> 树的{" "}
            <Text code>memoizedState</Text> 和 <Text code>updateQueue</Text>
          </li>
          <li>判断当前函数组件是否是第一次渲染</li>
          <li>
            调用 <Text code>Component(props, secondArg)</Text>{" "}
            执行我们的函数组件{" "}
            <Text type={"danger"}>
              把 hooks 信息依次保存到 <Text code>workInProgress</Text> 树上
            </Text>
          </li>
          <li>
            将 <Text code>ContextOnlyDispatcher</Text> 赋值给{" "}
            <Text code>ReactCurrentDispatcher.current</Text> ---{" "}
            <Text type={"danger"}> hooks只能在函数组件中调用</Text>
          </li>
          <li>重新置空一些变量</li>
        </ol>
      </Paragraph>
      <Paragraph>
        其实，我们并没有在函数组件中调用 hooks
        ，都是ContextOnlyDispatcher对象上生成hooks。
        <div />
        通过这种函数组件执行赋值不同的hooks对象方式，判断在hooks执行是否在函数组件内部，捕获并抛出异常的。
        <div className="contextOnlyDispatcher" />
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson2;
