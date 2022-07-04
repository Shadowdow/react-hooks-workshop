import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Button } from "antd";

let lastDependencies;
function useEffect(callback, dependencies) {
  if (lastDependencies) {
    let changed = !dependencies.every(
      (item, index) => item === lastDependencies[index]
    );
    if (changed) {
      callback();
      lastDependencies = dependencies;
    }
  } else {
    // 首次渲染
    callback();
    lastDependencies = dependencies;
  }
}

const Demo1: React.FC = () => {
  let [num, setNum] = useState(0);
  let [name, setName] = useState("");
  useEffect(() => {
    console.log("num", num);
  }, [num]);
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <Button onClick={() => setNum(num + 1)}>+</Button>
      <p>{num}</p>
    </div>
  );
};

function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
}

render();
export default Demo1;
