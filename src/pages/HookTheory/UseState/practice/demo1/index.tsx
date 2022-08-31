import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let lastStates: any[] = [];
let index = 0;

function myUseState(initialState) {
  let curIndex = index;
  // 1.判断initialState是否是函数

  //2.判断初值

  //3.setState方法
  const setState = (newState) => {
    // 4.判断initialState是否是函数
    // 5.判断newState和initialState是否相同
    //6.更新newState
  };

  return;
}

const Demo1: React.FC = () => {
  const [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(10);
  console.log("count", count);
  return (
    <>
      <p>Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)} className={"mr-16"}>
        {" "}
        Add 1 count
      </Button>
      <Button onClick={() => setCount(0)}> Rest count</Button>
    </>
  );
};

function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
  // 重置hooks数组指针
  index = 0;
}

render();

export default Demo1;
