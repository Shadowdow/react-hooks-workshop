import React, {useCallback, useRef} from "react";
import {Button} from "antd";

// TODO: 更新了count，但是页面却没有更新。请修改下列代码，完成每次count修改，页面都能立即更新
const Practice1 = ()=> {
    const countRef = useRef(0);

    const addCount = useCallback(()=> {
        countRef.current = countRef.current + 1;
    }, []);

    const getCount = useCallback(()=> {
        console.log(countRef.current);
    }, []);

    return (
        <div>
            count: <span className='mr-16'>{countRef.current}</span>
            <Button className='mr-16' onClick={addCount}>add count +</Button>
            <Button onClick={getCount}>获取count，console.log打印</Button>
        </div>
    )
}

const Practice = ()=> {
    return (
        <div>
            <div className='mb-16 text-16 text-brand'>练习：src/pages/refLesson/Practice/index</div>
            <Practice1/>
        </div>
    )
}

export default Practice

