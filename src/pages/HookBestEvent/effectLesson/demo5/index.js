import {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "antd";

function EffectDemo5() {
    const [count, countSet] =  useState(0);

    useEffect(()=> {
       setTimeout(()=> {
           countSet((pre)=> pre + 1)
       }, 1000);
    }, [count]);

    return (
        <div>
            <div className='text-18 font-500 mb-16 text-brand'>src/pages/effectLesson/demo5/index</div>
            <div className='text-18 font-500 mb-16'>需求：现在有一个count表示数字，我希望在DOM渲染完成之后的一秒钟，counter数字加1，然而目前count一直在递增，如何修复？</div>
            <span className="text-brand mr-16">{count}</span>
        </div>
    );
}

export default EffectDemo5;
