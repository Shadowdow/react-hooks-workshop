import React, {useCallback, useMemo, useState} from 'react';
import "./index.css";
import {Button} from "antd";

function MemoDemo1() {
    const [countA, countASet] = useState(0);
    const [countB, countBSet] = useState(0);

    const handleAClick = useCallback(()=> {
        countASet((pre)=> pre + 1)
    },[]);

    const handleBClick = useCallback(()=> {
        countBSet((pre)=> pre + 1)
    },[]);

    // 转换、组合
    const sum = useMemo(()=> `按钮A和B一共被点击了${countA + countB}次`, [countA, countB]);
    const getContent = ()=> <div>content</div>

    return (
    <div>
        <div className='text-18 font-500 mb-16'>MemoDemo1</div>
        <div className='image-01'/>
        <div className='text-16 mb-16'>把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。</div>
        <div className='text-16 mb-16'>记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。</div>
        <div className="mb-16">
           countA: {countA}
           <Button className="ml-16" onClick={handleAClick}>add A count +</Button>
        </div>
        <div className="mb-16">
            countB: {countB}
            <Button className="ml-16" onClick={handleBClick}>add B count +</Button>
        </div>
        sum: {sum}
    </div>
  );
}

export default MemoDemo1;
