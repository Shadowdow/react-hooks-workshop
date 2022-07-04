import React from "react";
import ReactDOM from "react-dom";

import { Button } from "antd";

let lastStates: any[] = [];
let index = 0;
function useState(initialState) {
  lastStates[index] = lastStates[index] || initialState;
  const currentIndex = index;
  function setState(newState) {
    lastStates[currentIndex] = newState;
    render();
  }
  return [lastStates[index++], setState];
}

const UseStateExample: React.FC = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <p>Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}> Add count</Button>
    </>
  );
};

function render() {
  index = 0;
  ReactDOM.render(<UseStateExample />, document.getElementById("root"));
}

render();

export default UseStateExample;
