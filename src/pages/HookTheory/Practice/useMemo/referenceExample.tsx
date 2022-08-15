import React, { useState, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

// 当前的memo值
let lastMemo;
// 当前的memo的deps
let lastMemoDependencies;

// function useMemo(callback, dependencies) {
//   // 如果 lastMemoDependencies 存在
//   if (lastMemoDependencies) {
//     // 更新时渲染
//     // 判断依赖是否改变
//     let changed = !dependencies.every(
//       (item, index) => item == lastMemoDependencies[index]
//     );
//     // 如果依赖改变，该怎么办
//     if (changed) {
//       lastMemo = callback();
//       lastMemoDependencies = dependencies;
//     }
//   } else {
//     // 初始化
//     lastMemo = callback();
//     lastMemoDependencies = dependencies;
//   }
//   return lastMemo;
// }

function Child({ data, addClick }) {
  console.log("child---render");
  console.log("data.num是", data.num);
  return (
    <div>
      <span>{data.num}</span>
      <Button onClick={addClick}>点我增加1</Button>
    </div>
  );
}

function UseMemoPractice() {
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
  ReactDOM.render(<UseMemoPractice />, document.getElementById("root"));
}

render();
export default UseMemoPractice;
