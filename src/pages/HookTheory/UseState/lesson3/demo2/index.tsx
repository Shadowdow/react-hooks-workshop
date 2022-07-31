import React, { useEffect, useState } from "react";
import { Button } from "antd";

const Demo2: React.FC = () => {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(2);
  const [n3, setN3] = useState(3);

  useEffect(() => {
    setN1(10);
    setN1(100);
  }, []);

  console.log("n1", n1);
  console.log("n2", n2);

  return <Button onClick={() => setN2(20)}>click</Button>;
};
export default Demo2;
