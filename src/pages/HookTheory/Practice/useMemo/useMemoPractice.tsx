import React, { useState, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

let memoizedState: any[] = [];
let globalIndex = 0;

// 判断是否是首次渲染，判断依赖是否变化，memoizedState：[data, deps]
function myUseMemo(callBack, dependencies) {}

function Child({ data, addClick }) {
  console.log("child---render");
  console.log("data.num是", data.num);
  return (
    <div>
      <span>{data.num}</span>
      <Button onClick={addClick} className={"ml-20"}>
        点我增加1
      </Button>
    </div>
  );
}

function UseMemoPracticeDemo() {
  const [num, setNum] = useState(0);
  const [str, setStr] = useState("");

  // 用你的自定义useMemo替换
  const data = useMemo(() => ({ num }), [num]);
  const addClick = useCallback(() => setNum(num + 1), [num]);

  return (
    <div>
      <div>UseMemo练习题</div>
      <input onChange={(e) => setStr(e.target.value)} />
      <p>{str}</p>
      <Child data={data} addClick={addClick} />
    </div>
  );
}

function render() {
  ReactDOM.render(<UseMemoPracticeDemo />, document.getElementById("root"));
}

render();
export default UseMemoPracticeDemo;
