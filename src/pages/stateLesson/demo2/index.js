import React, {useCallback, useState} from "react";
import {Button} from "antd";
import './index.css';

function StateDemo2() {
    const [showConclusion, showConclusionSet] =  useState(false);

    const handleShowConclusion = useCallback(()=> {
        showConclusionSet(true);
    }, []);

   return (
    <div>
        <div className='text-18 mb-16 font-500'>useState</div>
        <div className='text-16 mb-16'>每次渲染，函数都会重新执行。我们知道，每当函数执行完毕，所有的内存都会被释放掉。因此想让函数式组件拥有内部状态，并不是一件理所当然的事情。</div>
        <div className='text-16 mb-16'>useState就是帮助我们做这个事情。</div>
        <div className='state-image04 mb-16'/>
        <div className="text-16 mb-16">该状态可以是任意类型，字符串，数字，也可以是对象，数组。那基本数据类型我们就不谈了，这里我们聊一下状态是引用类型的时候应该注意什么东西。也就是如果state是数组或者是对象我们应该注意哪些东西？</div>
        <div className='state-image05 mb-16'/>
        <Child/>
        <Button className='mb-16 mt-16 block' onClick={handleShowConclusion}>结论</Button>
        {
            showConclusion && (
                <div className='text-brand text-16 font-500 mb-16'>在set state中，如果我们的state是个引用类型的数组，如果我们修改引用数据，并将该引用存到state中，虽然这个state的值已经改变了，但是并不会触发函数渲染（调用）。我们应该存一个新的引用，保证函数渲染（调用）</div>
            )
        }
    </div>
  );
}

export default StateDemo2;

const Child = ()=> {
    const [obj, setObj] = useState({ b: 0 });

    const setObjWithOldObj = useCallback(()=> {
        obj.b = obj.b + 1;
        setObj(obj);
    }, [obj]);

    const setObjWithNewObj = useCallback(()=> {
        setObj({ ...obj, b: obj.b + 1 })
    }, [obj]);

    return (
        <>
            {<div>obj.b: <span className='text-brand'>{obj?.b}</span></div>}
            <Button className="mr-12 mt-12" onClick={setObjWithOldObj}>直接改引用</Button>
            <Button onClick={setObjWithNewObj}>生成新引用</Button>
        </>
    )
}
