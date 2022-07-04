import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Button } from "antd";

// 这里写你自定义的hooks方法
let lastDependencies;
function useEffectDemo(callback, dependencies) {
  // if (lastDependencies) {
  //     let changed = !dependencies.every(
  //         (item, index) => item === lastDependencies[index]
  //     );
  //     if (changed) {
  //         callback();
  //         lastDependencies = dependencies;
  //     }
  // } else {
  //     // 首次渲染
  //     callback();
  //     lastDependencies = dependencies;
  // }
}

const UseEffectPractice: React.FC = () => {
  let [num, setNum] = useState(0);
  let [name, setName] = useState("");
  useEffect(() => {
    console.log("num", num);
  }, [num]);
  return (
    <div>
      <div>UseEffect练习题</div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <Button onClick={() => setNum(num + 1)}>+</Button>
      <p>{num}</p>
    </div>
  );
};

function render() {
  ReactDOM.render(<UseEffectPractice />, document.getElementById("root"));
}

render();
export default UseEffectPractice;
