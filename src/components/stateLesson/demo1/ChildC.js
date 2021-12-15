import {memo} from "react";

const ChildC = memo(() => {
  console.log('ChildC call');
  return (
      <div className="mb-16">ChildC</div>
  );
});

export default ChildC;
