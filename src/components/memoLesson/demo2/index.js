import React, {useCallback, useState} from 'react';
import ChildA from "./ChildA";
import {Button} from "antd";

function MemoDemo1() {
    const [count1, count1Set] = useState(0);
    const [count2, count2Set] = useState(0);
    const [count3, count3Set] = useState(0);

    const handleClick = useCallback(()=> {
        console.log(count1, count2, count3)
    }, [count1, count2, count3]);

   return (
    <div>
        <div className='text-18 font-500 mb-16'>useMemo</div>
        <Button onClick={()=> {count1Set(count1 + 1)}}>add count1 + <span className='text-brand'>{count1}</span></Button>
        <Button onClick={()=> {count2Set(count2 + 1)}}>add count2 + <span className='text-brand'>{count2}</span></Button>
        <Button onClick={()=> {count3Set(count3 + 1)}}>add count3 + <span className='text-brand'>{count3}</span></Button>
        <ChildA onClick={handleClick}/>
    </div>
  );
}

export default MemoDemo1;
