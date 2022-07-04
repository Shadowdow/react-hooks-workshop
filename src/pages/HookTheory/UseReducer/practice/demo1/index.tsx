import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

function reducer(state, action) {
  if (action.type === "add") {
    return state + 1;
  } else {
    return state;
  }
}

let lastState;
function useReducer(reducer, initialState) {
  lastState = lastState || initialState;
  function dispatch(action) {
    lastState = reducer(lastState, action);
    render();
  }
  return [lastState, dispatch];
}

const Demo1: React.FC = () => {
  console.log("Counter---render");
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div id={"reducer123"}>
      <p>{state}</p>
      <Button onClick={() => dispatch({ type: "add" })}>+</Button>
    </div>
  );
};
function render() {
  ReactDOM.render(<Demo1 />, document.getElementById("root"));
}

render();

export default Demo1;
