import React, { useState } from "react";
import { Button } from "antd";

const Demo1: React.FC = () => {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(2);

  if (n2 === 2) {
    const [n4, setN4] = useState(4);
  } else {
    const [n5, setN5] = useState(5);
  }

  const [n3, setN3] = useState(3);

  return (
    <>
      <Button onClick={() => setN2(3)}>设置N2为3</Button>
    </>
  );
};
export default Demo1;
