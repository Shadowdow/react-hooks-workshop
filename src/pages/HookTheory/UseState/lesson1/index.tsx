import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseStateLesson1: React.FC = () => {
  return (
    <Typography>
      <Title>UseState</Title>
      <Paragraph>
        <Text code>
          {"function useState<S>(initialState: (() => S) | S,): [S, Dispatch<BasicStateAction<S>>] {\n" +
            "  const dispatcher = resolveDispatcher();\n" +
            "  return dispatcher.useState(initialState);\n" +
            "}"}
        </Text>
        <div className="useState1 mt-20" />
      </Paragraph>
      <Paragraph>
        作用：返回一个状态以及能修改这个状态的setter，在其他语言称为元组（tuple），一旦mount之后只能通过这个setter修改这个状态。
        <ul>
          <li>
            使用了Hooks
            API的函数组件，返回的setter可以改变组件的状态，并且引起组件re-render
          </li>
          <li>
            和一般意义上的hook（钩子）不一样，这里的hook可以多次调用且产生不同的效果，且hook随
            <Link
              href="https://cloud.tencent.com/developer/article/2022276"
              target="_blank"
            >
              Fiber Node(Link)
            </Link>
            一起生灭
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <Title level={2}>Hook 两条规则</Title>
        <Link
          href="https://react.docschina.org/docs/hooks-rules.html"
          target="_blank"
        >
          React文档
        </Link>
        中介绍了React Hooks的如下规则
        <Title level={3}>只在 React 函数中调用 Hook</Title>
        <Text strong> 不要在普通的 JavaScript 函数中调用 Hook。</Text> 你可以：
        <ul>
          <li>✅ 在 React 的函数组件中调用 Hook</li>
          <li>✅ 在自定义 Hook 中调用其他 Hook</li>
        </ul>
        <Title level={3}>只在最顶层使用 Hook</Title>
        <Text strong>不要在循环，条件或嵌套函数中调用 Hook， </Text>
         确保总是在你的 React 函数的最顶层调用他们。 遵守这条规则，你就能确保
        Hook 在每一次渲染中都按照同样的顺序被调用。 这让 React 能够在多次的
        <Text code>useState</Text> 和 <Text code>useEffect</Text> 调用之间保持
        hook 状态的正确。
      </Paragraph>
    </Typography>
  );
};
export default UseStateLesson1;
