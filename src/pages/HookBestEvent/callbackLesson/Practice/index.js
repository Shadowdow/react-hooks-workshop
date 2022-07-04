import React, {memo, useCallback, useMemo, useState} from "react";
import {Button, Input, Select} from "antd";

// TODO: 优化下列代码，去掉不必要的组件调用（useMemo）
const Practice1 = ()=> {
    const [count, setCount] = useState(0);

    const addCount = useCallback(()=> {
        setCount((pre)=> pre + 1)
    }, [])

    return (
        <div>
            <Child data={[1,2,3]}/>
            <div className='mt-16'>
                <span className='mr-8'>{count}</span>
                <Button onClick={addCount}>add count +</Button>
            </div>
        </div>
    )
}

const Child = memo(({data})=> {
    console.log(data, '自组件调用');
    return (
        <div>Child</div>
    );
})

const Practice = ()=> {
    return (
        <div>
            <div className='text-18 font-500 mb-16 text-brand'>src/pages/callbackLesson/Practice/index</div>
            <div className='mb-16 text-16 text-brand'>练习</div>
            <Practice1/>
        </div>
    )
}

export default Practice;