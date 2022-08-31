import React from "react";
import { Typography } from "antd";
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
        <div>
          dispatchAction 就是 setNumber , dispatchAction
          第一个参数和第二个参数，已经被bind给改成currentlyRenderingFiber和
          queue,我们传入的参数是第三个参数action
        </div>
        <div className="dispatch1 my-20" />
      </Paragraph>

      <Paragraph>
        <div className={"flex items-center my-40"}>
          <div className="dispatch2 my-20" />
          <div className="Update ml-40" />
          <div className="HookQueue ml-40" />
        </div>
        无论是类组件调用setState,还是函数组件的dispatchAction ，都会产生一个
        update对象，里面记录了此次更新的信息，然后将此update放入待更新的pending队列中。
        <div />
        dispatchAction第二步就是判断当前函数组件的fiber对象是否处于渲染阶段，如果处于渲染阶段，那么不需要我们在更新当前函数组件，只需要更新一下当前update的expirationTime即可。
        如果当前fiber没有处于更新阶段。那么通过调用lastRenderedReducer获取最新的state,和上一次的currentState，进行浅比较，如果相等，那么就退出，这就证实了为什么useState，两次值相等的时候，组件不渲染的原因了，这个机制和Component模式下的setState有一定的区别。
        如果两次state不相等，那么调用scheduleUpdateOnFiber调度渲染当前fiber，scheduleUpdateOnFiber是react渲染更新的主要函数。
      </Paragraph>
    </Typography>
  );
};
export default UseStateLesson2;
