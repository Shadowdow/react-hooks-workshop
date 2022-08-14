import React from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let lastStates: any[] = [];
let index = 0;
function useState(initialState) {
  if (typeof initialState === "function") {
    // 如果 useState 第一个参数为函数，执行函数得到state
    initialState = initialState();
  }

  lastStates[index] = lastStates[index] || initialState;
  const currentIndex = index;
  function setState(newState) {
    lastStates[currentIndex] = newState;
    render();
  }
  return [lastStates[index++], setState];
}
// let lastStates;
// function useState(initialState) {
//   lastStates = lastStates || initialState;
//   function setState(newState) {
//     lastStates = newState;
//     render();
//   }
//
//   return [lastStates, setState];
// }

const Demo1: React.FC = () => {
  let [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(10);
  return (
    <>
      <p>Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}> Add count</Button>
      {/*<p>Clicked {count2} times</p>*/}
      {/*<Button onClick={() => setCount2(count2 - 1)}> reduce count</Button>*/}
    </>
  );
};

function render() {
  index = 0;
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
}

render();

export default Demo1;
