import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

function reducer(state, action) {
  if (action.type === "add") {
    return state + 1;
  } else {
    return state;
  }
}

// 这里写你自定义的hooks方法
let lastState;
function useReducerDemo(reducer, initialState) {
  // lastState = lastState || initialState;
  // function dispatch(action) {
  //     lastState = reducer(lastState, action);
  //     render();
  // }
  // return [lastState, dispatch];
}

const UseReducerPractice: React.FC = () => {
  console.log("Counter---render");
  // 用你的自定义useCallback替换
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div id={"reducer123"}>
      <p>{state}</p>
      <Button onClick={() => dispatch({ type: "add" })}>+</Button>
    </div>
  );
};
function render() {
  ReactDOM.render(<UseReducerPractice />, document.getElementById("root"));
}

render();

export default UseReducerPractice;
