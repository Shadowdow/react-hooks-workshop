import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {useCallback, useState} from "react";
import ChildC from "./ChildC";
import {Button} from "antd";

function StateDemo1() {
    const [count, countSet] = useState(0);

    const increment = useCallback(()=> countSet((pre) => pre + 1),[])

   return (
    <div>
        <div className='text-18 font-500 mb-16'>在React中，state与props的改变，都会引发组件重新渲染。如果是父组件的变化，则父组件下所有子组件都会重新渲染。</div>
        <ChildA count={count}/>
        <ChildB/>
        <ChildC/>
        <Button onClick={increment}>add count</Button>
    </div>
  );
}

export default StateDemo1;
