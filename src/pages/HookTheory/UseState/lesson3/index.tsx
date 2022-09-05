import React from "react";
import { Divider, Typography } from "antd";
import "./index.css";
import UpdateStateDemo from "./demo";

const { Title, Paragraph, Text, Link } = Typography;

const UseStateLesson3: React.FC = () => {
  return (
    <Typography>
      <Title>UpdateState</Title>
      <Paragraph>
        <div className={"flex items-center"}>
          <div className="updateStateSimple my-20" />
          {/*<div className="simpleUpdateState ml-40" />*/}
        </div>
        这一段看起来很复杂，让我们慢慢吃透，首先将上一次更新的pending queue
        合并到 basequeue，为什么要这么做，比如我们再一次点击事件中这么写，
      </Paragraph>
      <Paragraph>
        <div className={"flex items-center"}>
          <div className="updateStateDemo my-20" />
          <div className="Update ml-40" />
          <div className="HookQueue ml-40" />
        </div>
        <UpdateStateDemo />
        <Title level={4}>点击按钮， 打印 3</Title>
        三次setNumber产生的update会暂且放入pending
        queue，在下一次函数组件执行时候，三次 update被合并到
        baseQueue。结构如下图：
        <div className="updateHook1 my-20" />
        接下来会把当前useState或是useReduer对应的hooks上的baseState和baseQueue更新到最新的状态。会循环baseQueue的update，复制一份update,更新
        expirationTime，对于有足够优先级的update（上述三个setNumber产生的update都具有足够的优先级），我们要获取最新的state状态。，会一次执行useState上的每一个action。得到最新的state。
        <Title level={4}>更新state</Title>
        <div className="updateHook2 my-20" />
        这里有会有两个疑问🤔️: 问题一：这里不是执行最后一个action不就可以了嘛?
        答案： 原因很简单，上面说了
        useState逻辑和useReducer差不多。如果第一个参数是一个函数，会引用上一次
        update产生的 state, 所以需要循环调用，
        每一个update的reducer，如果setNumber(2)是这种情况，那么只用更新值，如果是
        <Text code>{`setNumber(state=>state+1)`}</Text> ,那么传入上一次的 state
        得到最新state。 问题二：什么情况下会有优先级不足的情况(
        <Text code>{`updateExpirationTime < renderExpirationTime `}</Text>)？
        答案：
        这种情况，一般会发生在，当我们调用setNumber时候，调用scheduleUpdateOnFiber渲染当前组件时，又产生了一次新的更新，所以把最终执行reducer更新state任务交给下一次更新。
      </Paragraph>
      <Divider className={"mt-40"} />
      源码
      <div className="updateState my-20" />
    </Typography>
  );
};
export default UseStateLesson3;
