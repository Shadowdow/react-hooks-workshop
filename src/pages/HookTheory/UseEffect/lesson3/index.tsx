import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text } = Typography;

const UseEffectLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>PushEffect</Title>
      <Paragraph>
        <Title level={3}>创建effect对象，挂载updateQueue</Title>
        <div className="pushEffect my-20" />
        <Text>
          首先根据入参声明了一个新的 effect，由数据结构能看出，它是一个循环链表
        </Text>
        <div className="effectType my-20" />
        接下来根据 componentUpdateQueue 是否为空走两套逻辑，而
        componentUpdateQueue 的结构其实很简单:
        <div className="FunctionComponentUpdateQueue my-20" />
        <Text>接下来根据 componentUpdateQueue 是否为空走两套逻辑</Text>
        <div />
        <ol>
          <li>
            <Text strong>componentUpdateQueue 为空</Text>：这种情况就是
            mountEffect 时候的逻辑，它会创建一个空的
            componentUpdateQueue，它其实只是
            <Text code type={"danger"}>{`{lastEffect: null}`}</Text> ，之后将
            <Text code type={"danger"}>
              componentUpdateQueue.lastEffect
            </Text>{" "}
            指向
            <Text code type={"danger"}>
              effect.next
            </Text>
            ，其实就是存了一下 effect。
          </li>
          <li>
            <Text strong>componentUpdateQueue 不为空</Text>：这种情况就是
            updateEffect 时候会走到的逻辑
          </li>
          <li>
            <Text strong>lastEffect 为空</Text>：这种情况是新的渲染阶段的第一个
            useEffect，逻辑处理和 componentUpdateQueue 为空时一致。
          </li>
          <li>
            <Text strong>lastEffect 不为空</Text>：这种情况意味着这个组件有多个
            useEffect，是第二个及其之后的 useEffect 会走到的分支，将 lastEffect
            指向下一个 effect。
          </li>
        </ol>
        <Text>最后 return 一个 effect。</Text>
        <div />
        <Title level={3}>例子</Title>
        <Text>假设我们在一个函数组件中这么写：</Text>
        <div className="useEffect3 my-20" />
        <Text>最后workInProgress.updateQueue会以这样的形式保存：</Text>
        <div className="updateQuene my-20" />
      </Paragraph>
      <Paragraph>
        <div />
        <Title level={3}>结构简图</Title>
        <div className="HookDataConstruct mt-20 mb-20" />
        <Text>图中黄色为Fiber节点，绿色为Hook节点，蓝色为Effect节点。</Text>
        <div />
        <Text>
          Fiber节点，其实就是我们的虚DOM节点，react会生成一个Fiber节点树，每个组件在Fiber树上都有对应的Fiber节点。
        </Text>
        <div />
        <Text>
          currentlyRenderingFiber表示我们正在进行渲染的节点，它来自于workInProgress，current表示已经渲染的节点。
        </Text>
        <ol>
          <li>组件加载</li>
          <li>组件更新</li>
          <li>组件渲染</li>
        </ol>

        <div className="commitHookEffectList mt-20 mb-20" />
      </Paragraph>
    </Typography>
  );
};

export default UseEffectLesson3;
