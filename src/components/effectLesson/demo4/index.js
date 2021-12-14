import {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "antd";

function EffectDemo4() {
    const [count, countSet] =  useState(0);
    const buttonRef = useRef(null);

    const addCount = useCallback(()=> {
        countSet((pre)=> pre + 1)
    }, []);

    useEffect(()=> {
        buttonRef?.current.addEventListener('click',()=>{
            console.log('触发点击事件:', count)
        });
    }, [count]);

    return (
        <div>
            <div className='text-18 font-500 mb-16'>练习：该例子用dom 原生方法给按钮绑定事件，找出其中的问题，并优化(注：用原生方法绑定事件只是为了练习，并不推荐使用该方式绑定事件)</div>
            <span className="text-brand mr-16">{count}</span>
            <Button className="mr-16" onClick={addCount}>add count</Button>
            <Button ref={buttonRef}>按钮</Button>
        </div>
    );
}

export default EffectDemo4;
