import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

let memoizedState: any[] = []; // hooks 存放在这个数组
let index = 0; // 当前 memoizedState 下标

function myUseEffect(callback, depArray) {
  // 如果 dependencies 不存在 （补全代码）
  let hasNoDeps;

  // 判断两次的 dependencies 是否完全相等 （补全代码）
  const deps = memoizedState[index];
  let hasChangedDeps;

  // 如果 dependencies 不存在，或者 dependencies 有变化 （补全代码）
  if (hasNoDeps || hasChangedDeps) {
  }
  index++;
}

const UseEffectPracticeDemo: React.FC = () => {
  let [num, setNum] = useState(0);

  useEffect(() => {
    console.log("现在的num是", num);
  }, [num]);

  return (
    <div>
      <div>num: {num}</div>
      <Button onClick={() => setNum(num + 1)}>Add num</Button>
    </div>
  );
};

function render() {
  ReactDOM.render(<UseEffectPracticeDemo />, document.getElementById("root"));
}

render();
export default UseEffectPracticeDemo;
