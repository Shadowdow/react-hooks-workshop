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
        <Title level={2}>Hooks是从哪来的？</Title>
        <div className={"flex my-20 items-center"}>
          <div className="useStateDispatcher " />
          <div className="dispatch ml-40" />
        </div>
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
        <div className="renderWithHooksFaker my-20" />
        <Title level={4}>小结</Title>
        hooks 对象本质上是主要以三种处理策略存在 React 中：
        <ol>
          <li>
            <Text type={"danger"}>ContextOnlyDispatcher</Text>:{" "}
            防止开发者在函数组件外部调用 hooks ，所以第一种就是{" "}
            <Text strong>报错形态</Text>，只要开发者调用了这个形态下的 hooks
            ，就会抛出异常。
          </li>
          <li>
            <Text type={"danger"}>HooksDispatcherOnMount</Text>: 函数组件{" "}
            <Text strong>初始化 mount</Text> ，hooks 是函数组件和对应 fiber
            桥梁，这个时候的 hooks 作用就是建立这个桥梁，初次建立其 hooks 与
            fiber 之间的关系。
          </li>
          <li>
            <Text type={"danger"}>HooksDispatcherOnUpdate</Text>: 函数组件{" "}
            <Text strong>更新 update</Text>，既然与 fiber
            之间的桥已经建好了，那么组件再更新，就需要 hooks
            去获取或者更新维护状态。
          </li>
        </ol>
        <Divider className={"bg-black"} />
        <div className="renderWithHooks2 " />
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
        <div className="contextOnlyDispatcher my-20" />
      </Paragraph>
    </Typography>
  );
};
export default WhyHooksLesson2;
