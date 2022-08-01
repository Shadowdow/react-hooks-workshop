import React from "react";
import { Button } from "antd";

const Question: React.FC = () => {
  const [num, setNumber] = React.useState(0);
  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1);
        console.log(num);
      }, 1000);
    }
  };
  return (
    <div className={"ml-16"}>
      <p>这个数是：{num}</p>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default Question;
