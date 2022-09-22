import React, { useEffect, useState } from "react";
import { Button } from "antd";

const FirstDemo: React.FC = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div className={"ml-16"}>
      <p>
        You clicked <span className={"text-20 text-black"}>{count}</span> times
      </p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
};
export default FirstDemo;
