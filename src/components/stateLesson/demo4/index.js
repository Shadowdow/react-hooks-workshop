import {useCallback, useState} from "react";
import {Button} from "antd";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function StateDemo4() {
    const [count, countSet] = useState(0);
    const addCount = useCallback(()=> {
        countSet(count +1)
    }, [count]);

    return (
        <div>
            <div className="text-18 font-500 mb-16">惰性初值</div>
            <Button className="mb-16" onClick={addCount}>add count</Button>
            <ChildA/>
            <ChildB/>
        </div>
    );
}

export default StateDemo4;
