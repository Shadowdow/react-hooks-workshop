import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const ExtraLesson: React.FC = () => {
  return (
    <Typography>
      <Title> React Render & Fiber</Title>
      <Divider />
      <Paragraph>
        <Title level={3}>双缓存</Title>
        <div className="workInProgress mt-20 mb-20" />
        <div className="tree mt-20 mb-20" />
        <div />在 <Text code>React</Text> 中最多会同时存在两棵{" "}
        <Text code>Fiber树 </Text>
        。当前屏幕上显示内容对应的 <Text code>Fiber树</Text>称为{" "}
        <Text code>current Fiber树</Text>
        ，正在内存中构建的 <Text code>Fiber树</Text>称为{" "}
        <Text code>workInProgress Fiber树</Text>。
        <div />
        <Text code>current Fiber树</Text>中的Fiber节点被称为{" "}
        <Text code>current fiber</Text>，{" "}
        <Text code>workInProgress Fiber树</Text>中的Fiber节点被称为{" "}
        <Text code>workInProgress fiber</Text>，他们通过{" "}
        <Text code>alternate</Text>属性连接。
      </Paragraph>
      <Paragraph>
        <Title level={3}>什么是Fiber</Title>
        <ul>
          <li>
            含义：
            <Text type={"success"}>
              Fiber 就是 React 16 实现的一套新的更新机制，让 React
              的更新过程变得可控，避免了之前采用递归需要一气呵成影响性能的做法
            </Text>
          </li>
          <li>
            作用：React Fiber 把更新过程
            <Text type={"success"}>碎片化（一个耗时长的任务分成很多小片）</Text>
            ，每执行完一段更新过程，就把控制权交还给 React
            负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <Title level={2}>Fiber Tree</Title>
        React 在 render 第一次渲染时，会通过 React.createElement 创建一颗
        Element 树，可以称之为<Text strong> Virtual DOM Tree </Text>
        ，由于要记录上下文信息，加入了 Fiber，每一个 Element 会对应一个 Fiber
        Node，将 Fiber Node 链接起来的结构成为<Text strong> Fiber Tree </Text>
        。它反映了用于渲染 UI 的应用程序的状态。
      </Paragraph>

      <Paragraph>
        <Title level={2}>Fiber Node 结构</Title>
        <div className="fiber-constructor mt-20 mb-20" />
        每一个 Fiber Node 节点与 Virtual Dom 一一对应，所有 Fiber Node
        连接起来形成<Text strong> Fiber tree </Text> ,
        是个单链表树结构，因为使用了链表结构，即使处理流程被中断了，我们随时可以从上次未处理完的
        Fiber 继续遍历下去。如下图所示：
        <div className="helloWorld mt-20 mb-20" />
        <div className="fiber-flow mt-20 mb-20" />
        <div className="fiber-link mt-20 mb-20" />
        比如: 你在 text(hello) 中断了，那么下一次就会从 p 节点开始处理
        这个数据结构调整还有一个好处，就是某些节点异常时，我们可以打印出完整的’节点栈‘，只需要沿着节点的return回溯即可。
      </Paragraph>
    </Typography>
  );
};
export default ExtraLesson;
