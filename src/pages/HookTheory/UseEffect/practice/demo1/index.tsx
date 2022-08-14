import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

let memoizedState: any[] = []; // hooks 存放在这个数组
let index = 0; // 当前 memoizedState 下标

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[index];
  const hasChangedDeps = deps
    ? !depArray.every((el, i) => el === deps[i])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[index] = depArray;
  }
  index++;
}

const Demo1: React.FC = () => {
  let [num, setNum] = useState(0);

  useEffect(() => {
    console.log("现在的num是", num);
  }, [num]);

  return (
    <div>
      <Button onClick={() => setNum(num + 1)}>Add num</Button>
      <p>{num}</p>
    </div>
  );
};

function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
}

render();
export default Demo1;
