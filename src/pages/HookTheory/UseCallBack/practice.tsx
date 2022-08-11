import React, { useState, memo, useMemo, useCallback } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

// 这里写你自定义的hooks方法
let lastCallback;
let lastCallbackDependencies;
function useCallbackDemo(callback, dependencies) {
  // if (lastCallbackDependencies) {
  //   // 更新时渲染
  //   // 判断依赖是否改变
  //   let changed = !dependencies.every(
  //     (item, index) => item == lastCallbackDependencies[index]
  //   );
  //   if (changed) {
  //     lastCallback = callback;
  //     lastCallbackDependencies = dependencies;
  //   }
  // } else {
  //   // 初始化
  //   lastCallback = callback;
  //   lastCallbackDependencies = dependencies;
  // }
  // return lastCallback;
}

function Child({ data, addClick }) {
  console.log("child---render");
  return (
    <div>
      <span>{data.num}</span>
      <Button onClick={addClick}>点我增加1</Button>
    </div>
  );
}

function UseCallbackPractice() {
  const [num, setNum] = useState(1);
  const [str, setStr] = useState("");

  const data = useMemo(() => ({ num }), [num]);
  // 用你的自定义useCallback替换
  const addClick = useCallback(() => setNum(num + 1), [num]);

  return (
    <div>
      <div>UseCallback练习题</div>
      <input onChange={(e) => setStr(e.target.value)} />
      <p>{str}</p>
      <Child data={data} addClick={addClick} />
    </div>
  );
}

function render() {
  ReactDOM.render(<UseCallbackPractice />, document.getElementById("root"));
}

render();
export default UseCallbackPractice;
