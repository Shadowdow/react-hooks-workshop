import React from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let lastStates: any[] = [];
let index = 0;

function myUseState(initialState) {
  let curIndex = index;
  // 1.判断initialState是否是函数
  if (typeof initialState === "function") {
    initialState = initialState();
  }
  //2.判断初值
  lastStates[curIndex] =
    lastStates[curIndex] === undefined ? initialState : lastStates[curIndex];

  //3.setState方法
  const setState = (newState) => {
    // 4.判断initialState是否是函数
    if (typeof newState === "function") {
      newState = newState(lastStates[curIndex]);
    }
    // 5.判断newState和initialState是否相同
    if (Object.is(lastStates[curIndex], newState)) return;

    //6.更新newState
    lastStates[curIndex] = newState;
    render();
  };
  index += 1;
  return [lastStates[curIndex], setState];
}

const Demo1: React.FC = () => {
  const [count, setCount] = myUseState(0);
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
