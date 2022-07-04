import React, {useCallback, useRef, useState} from "react";
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
        <div className='mb-16'>
            count: <span className='mr-16'>{countRef.current}</span>
            <Button className='mr-16' onClick={addCount}>add count +</Button>
            <Button onClick={getCount}>获取count，console.log打印</Button>
        </div>
    )
}

// TODO: 先点击获取count， 再点击add按钮，发现3秒后获取到count仍然是之前的，不是最新的，如果想无论什么时候，点击获取按钮都能获取到最新的count值，应该怎么做？
const Practice2 = ()=> {
    const [count, setCount] = useState(0);

    const addCount = useCallback(()=> {
        setCount((pre)=> pre + 1);
    }, []);

    const getCount = useCallback(()=> {
        setTimeout(()=> {
            alert(count);
        }, 3000)
    }, [count]);

    return (
        <div>
            count: <span className='mr-16'>{count}</span>
            <Button className='mr-16' onClick={addCount}>add count +</Button>
            <Button onClick={getCount}>获取count</Button>
        </div>
    )
}

const Practice = ()=> {
    return (
        <div>
            <div className='mb-16 text-16 text-brand'>练习：src/pages/refLesson/Practice/index</div>
            <div className='mb-16 text-16 text-brand'>练习1</div>
            <Practice1/>
            <div className='mb-16 text-16 text-brand'>练习1</div>
            <Practice2/>
        </div>
    )
}

export default Practice

