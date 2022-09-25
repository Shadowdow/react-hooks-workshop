import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

// 当前的ref值
let lastRef;
function MyUseRef(initialRef) {}

const UseRefPractice: React.FC = () => {
  const num = useRef(0);

  return (
    <div>
      <Button onClick={() => (num.current = num.current + 1)}>Add num</Button>
      <p>{num}</p>
    </div>
  );
};

function render() {
  ReactDOM.render(<UseRefPractice />, document.getElementById("root"));
}

render();
export default UseRefPractice;
