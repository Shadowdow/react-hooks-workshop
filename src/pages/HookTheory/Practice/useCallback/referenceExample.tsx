import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

let lastCallback;
let lastCallbackDependencies;
function useCallback(callback, dependencies) {
  if (lastCallbackDependencies) {
    // 更新时渲染
    // 判断依赖是否改变
    let changed = !dependencies.every(
      (item, index) => item == lastCallbackDependencies[index]
    );
    if (changed) {
      lastCallback = callback;
      lastCallbackDependencies = dependencies;
    }
  } else {
    // 初始化
    lastCallback = callback;
    lastCallbackDependencies = dependencies;
  }
  return lastCallback;
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

// Child = memo(Child);

function UseCallbackExample() {
  const [num, setNum] = useState(1);
  const [str, setStr] = useState("");

  const data = useMemo(() => ({ num }), [num]);
  const addClick = useCallback(() => setNum(num + 1), [num]);

  return (
    <div>
      <input onChange={(e) => setStr(e.target.value)} />
      <p>{str}</p>
      <Child data={data} addClick={addClick} />
    </div>
  );
}

function render() {
  ReactDOM.render(<UseCallbackExample />, document.getElementById("root"));
}

render();
export default UseCallbackExample;
