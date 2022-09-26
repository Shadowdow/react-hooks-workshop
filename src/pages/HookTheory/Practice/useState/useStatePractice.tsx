import React from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let memoizedState: any[] = [];
let globalIndex = 0;

function myUseState(initialState) {
  let index = globalIndex;
  // 1.判断initialState是否是函数

  //2.判断初值（判断是 mount 还是 update ？）

  //3.setState方法
  const setState = (newState) => {
    // 4.判断newState是否是函数
    // 5.判断newState和initialState是否相同
    //6.更新newState
  };

  globalIndex += 1;
  return [memoizedState[index], setState];
}

const MyUseStateDemo: React.FC = () => {
  const [count1, setCount1] = myUseState(0);
  let [count2, setCount2] = myUseState(10);
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
      <Button onClick={() => setCount2(count2 - 1)}>count2: minus 1 </Button>
    </>
  );
};

function render() {
  ReactDOM.render(<MyUseStateDemo />, document.getElementById("root"));
  // 重置hooks数组指针
  globalIndex = 0;
}

render();

export default MyUseStateDemo;
