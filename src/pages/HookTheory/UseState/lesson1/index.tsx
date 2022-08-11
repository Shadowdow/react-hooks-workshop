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
        作用：返回一个状态以及能修改这个状态的 setter
        ，在其他语言称为元组（tuple），一旦 mount 之后只能通过这个 setter
        修改这个状态。
        <ul>
          <li>
            使用了 Hooks API 的函数组件，返回的 setter
            可以改变组件的状态，并且引起组件 re-render
          </li>
          <li>
            和一般意义上的 hooks（钩子）不一样，这里的 hooks
            可以多次调用且产生不同的效果，且 hooks 随
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
    </Typography>
  );
};
export default UseStateLesson1;
