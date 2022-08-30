import React from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let lastStates: any[] = [];
let index = 0;

function useState(initialState) {
  let curIndex = index;
  if (typeof initialState === "function") {
    initialState = initialState();
  }
  lastStates[curIndex] =
    lastStates[curIndex] === undefined ? initialState : lastStates[curIndex];
  const setState = (newState) => {
    if (typeof newState === "function") {
      newState = newState(lastStates[curIndex]);
    }
    if (Object.is(lastStates[curIndex], newState)) return;
    lastStates[curIndex] = newState;
    render();
  };
  index += 1;
  return [lastStates[curIndex], setState];
}

const Demo1: React.FC = () => {
  let [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(10);
  console.log("count", count);
  return (
    <>
      <p>Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)} className={"mr-16"}>
        {" "}
        Add count
      </Button>
      <Button onClick={() => setCount(0)}> Rest count</Button>
    </>
  );
};

function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
  index = 0;
}

render();

export default Demo1;
