import React from "react";
import { Typography } from "antd";
import "./index.css";
import FirstDemo from "./firstDemo";
import FunctionQuestion from "./functionQuestion";
import ClassQuestion from "./classQuestion";

const { Title, Paragraph, Text, Link } = Typography;

const WhyHooksLesson1: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>Hooks 的第一印象</Title>
        <blockquote>
          Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用
          state 以及其他的 React 特性。
        </blockquote>
      </Typography>
      <div className={"flex"}>
        <div className="hookFirstDemo" />
        <FirstDemo />
      </div>
      <Typography className={"mt-40"}>
        <Title level={3}>Hook 解决了什么问题</Title>
        <ol>
          <li>
            <Text strong className={"mr-16"}>
              难以理解的 class
            </Text>
            {`->`} 大型组件很难拆分和重构，也很难测试{" "}
          </li>
          <li>
            <Text strong className={"mr-16"}>
              在组件之间复用状态逻辑很难
            </Text>
            {`->`}
            业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑{" "}
          </li>
          <li>
            <Text strong className={"mr-16"}>
              复杂组件变得难以理解
            </Text>
            {`->`} 组件类引入了复杂的编程模式，比如 render props 和高阶组件{" "}
          </li>
        </ol>
      </Typography>

      <Typography className={"mt-40"}>
        <Title level={3}>
          <Text type={"success"}>小试牛刀</Text>
        </Title>
        <div className={"flex"}>
          <div className="classQuestionIcon" />
          <ClassQuestion />
        </div>

        <div className={"flex mt-40"}>
          <div className="functionQuestionIcon" />
          <FunctionQuestion />
        </div>
      </Typography>

      <Typography className={"mt-40"}>
        <Title level={3}>日常使用 Hook 时，你有哪些疑问？</Title>
        <ol>
          <li>
            <Text strong>
              为什么 Hook 不能在循环、条件判断或者子函数中调用?
            </Text>
          </li>
          <li>
            <Text strong>
              为什么在 UseCallback, UseMemo等中，不传入 Deps 就不更新值？
            </Text>
          </li>
          <li>
            <Text strong>为什么只能在 React 的函数组件中调用 Hook？</Text>
          </li>
        </ol>
      </Typography>
    </>
  );
};
export default WhyHooksLesson1;
