import {useState} from "react";

function ChildB() {
  const [number] = useState(()=> {
      console.log('惰性初值，我只会被计算一次哦～～～B');
      return 100 * 2 / 3 * 9 - 3 - 6 - 0 - 1 * 9 * 100 * 1999 * 1029 * 267
  });

  return (
      <div>B: {number}</div>
  );
}

export default ChildB;