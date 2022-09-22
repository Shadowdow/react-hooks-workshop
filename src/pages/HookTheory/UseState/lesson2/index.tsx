import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseStateLesson2: React.FC = () => {
  return (
    <Typography>
      <Title>初始化useState( mountState )</Title>
      <Paragraph>
        <div className="mountState my-20" />
      </Paragraph>

      <Paragraph>
        <Text strong>先要弄明白dispatchAction是什么?</Text>
        <div className={"flex items-center my-20"}>
          <div className="dispatchSimple " />
          <div className="updateLink ml-40 " />
        </div>
      </Paragraph>

      <Paragraph>
        <Divider className={"bg-black"} />
        <div className={"flex items-center my-40"}>
          <div className="dispatch2 my-20" />
        </div>
        无论是类组件调用setState,还是函数组件的dispatchAction ，都会产生一个
        update对象，里面记录了此次更新的信息，然后将此update放入待更新的pending队列中。
        <div />
        dispatchAction第二步就是判断当前函数组件的fiber对象是否处于渲染阶段，如果处于渲染阶段，那么不需要我们在更新当前函数组件，只需要更新一下当前update的expirationTime即可。
        如果当前fiber没有处于更新阶段。那么通过调用lastRenderedReducer获取最新的state,和上一次的currentState，进行浅比较，如果相等，那么就退出，这就证实了为什么useState，两次值相等的时候，组件不渲染的原因了，这个机制和Component模式下的setState有一定的区别。
        如果两次state不相等，那么调用scheduleUpdateOnFiber调度渲染当前fiber，scheduleUpdateOnFiber是react渲染更新的主要函数。
      </Paragraph>

      <Paragraph>
        <Divider className={"bg-black"} />
        <div className="scheduleUpdateOnFiber my-40" />
        更新过程可以分为四个阶段：
        <div />
        <ol>
          <li>
            <Text strong>任务输入</Text>：scheduleUpdateOnFiber
            是处理更新任务开始的地方
          </li>
          <li>
            <Text strong>调度任务注册</Text>
            ：与调度中心(Scheduler)交互，注册调度任务(scheduler task)，等待回调
          </li>
          <li>
            <Text strong>执行任务回调</Text>
            ：执行渲染任务，在内存中构造出fiber树，同时与渲染器(react-dom)交互，在内存中创建出与fiber对应的DOM节点
          </li>
          <li>
            <Text strong>输出DOM节点</Text>
            ：与渲染器(react-dom)交互，渲染DOM节点
          </li>
        </ol>
      </Paragraph>
    </Typography>
  );
};
export default UseStateLesson2;
