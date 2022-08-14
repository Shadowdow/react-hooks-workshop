import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

let lastRef;
function useRef(initialRef) {
  lastRef = lastRef || initialRef;
  return {
    current: lastRef,
  };
}

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
