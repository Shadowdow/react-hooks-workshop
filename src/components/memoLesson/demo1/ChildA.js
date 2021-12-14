import {useCallback} from "react";
import {Button} from "antd";

function ChildA(props) {
  const {onClick} = props;

  const handleClick = useCallback(()=> {
    onClick();
  }, [])

  return (
    <div className="mb-16">Child
      <Button onClick={handleClick}>调用父组件的方法</Button>
    </div>
  );
}

export default ChildA;
