import {useState} from "react";

function ChildA() {
  console.log('我又被计算了一次...A')
  const initial = 100 * 2 / 3 * 9 - 3 - 6 - 0 - 1 * 9 * 100 * 1999 * 1029 * 267;
  const [number] = useState(initial);

  return (
      <div className="mb-16">A: {number}</div>
  );
}

export default ChildA;