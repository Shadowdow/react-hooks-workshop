import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

// 这里写你自定义的hooks方法
// let lastStates: any[] = [];
// let index = 0;
function useStateDemo(initialState) {
  //   lastStates[index] = lastStates[index] || initialState;
  //   const currentIndex = index;
  //   function setState(newState) {
  //     lastStates[currentIndex] = newState;
  //     render();
  //   }
  //   return [lastStates[index++], setState];
}

const UseStatePractice: React.FC = () => {
  // 这里用你自定义的hooks
  let [count, setCount] = useState(0);
  return (
    <>
      <div>UseState练习题</div>
      <p>Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}> Add count</Button>
    </>
  );
};

function render() {
  // index = 0;
  ReactDOM.render(<UseStatePractice />, document.getElementById("root"));
}

render();

export default UseStatePractice;
