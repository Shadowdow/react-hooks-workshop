import React, { useState } from "react";
import { Button } from "antd";

const UpdateStateDemo: React.FC = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    //    setNumber(1)
    //    setNumber(2)
    //    setNumber(3)
    setNumber((state) => state + 1);
    // 获取上次 state = 1
    setNumber((state) => state + 1);
    // 获取上次 state = 2
    setNumber((state) => state + 1);
  };
  console.log(number); // 3
  return (
    <div>
      <div>{`当前数字是 ${number}`}</div>
      <Button onClick={() => handleClick()}>点击</Button>
    </div>
  );
};
export default UpdateStateDemo;
