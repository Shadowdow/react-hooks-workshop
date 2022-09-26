import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let memoizedState: any[] = [];
let globalIndex = 0;

function myUseState(initialState) {
  let index = globalIndex;
  // 1.判断initialState是否是函数

  // if (typeof initialState === "function") {
  //   initialState = initialState();
  // }

  //2.判断初值（判断是 mount 还是 update ？）
  // if (index >= memoizedState.length) {
  //   memoizedState[index] = initialState;
  // }

  //3.setState方法
  const setState = (newState) => {
    // 4.判断newState是否是函数
    // if (typeof newState === "function") {
    //   newState = newState(memoizedState[index]);
    // }
    // 5.判断newState和initialState是否相同
    // if (Object.is(memoizedState[index], newState)) return;
    //6.更新newState
    // memoizedState[index] = newState;
    // render();
  };

  globalIndex += 1;
  return [memoizedState[index], setState];
}

const Demo1: React.FC = () => {
  const [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(10);
  console.log("count", count1);
  console.log("count2", count2);
  return (
    <>
      <p>count1: {count1} </p>
      <p>count2: {count2} </p>
      <Button onClick={() => setCount1(count1 + 1)} className={"mr-8"}>
        {" "}
        count1: Add 1
      </Button>
      <Button onClick={() => setCount1(0)} className={"mr-16"}>
        {" "}
        Rest count
      </Button>
      <Button onClick={() => setCount2(count2 - 1)}> count2: minus 1 </Button>
    </>
  );
};

function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
  // 重置hooks数组指针
  globalIndex = 0;
}

render();

export default Demo1;
