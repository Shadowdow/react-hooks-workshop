import {useCallback, useEffect, useState} from "react";
import {Button} from "antd";
import './index.css';

function EffectDemo1() {
    const [showConclusion, showConclusionSet] =  useState(false);
    const [count, countSet] =  useState(0);
    const [otherCount, otherCountSet] =  useState(0);

    useEffect(()=> {
        console.log('依赖: 无');
    })

    useEffect(()=> {
        console.log('依赖: 空数组');
    }, [])

    useEffect(()=> {
        console.log('依赖: count');
    }, [count])

    const addCount = useCallback(()=> {
        countSet((pre)=> pre + 1)
    }, []);

    const addOtherCount = useCallback(()=> {
        otherCountSet((pre)=> pre + 1)
    }, []);

    const handleShowConclusion = useCallback(()=> {
        showConclusionSet(true);
    }, []);

   return (
    <div>
        <div className="text-18 font-500 mb-16">useEffect</div>
        <div className="text-18 font-500 mb-16">useEffect就是在组件执行副作用的</div>
        <div className="text-16 font-500 mb-16">hooks的设计中，每一次DOM渲染完成，都会有当次渲染的副作用可以执行。而useEffect，是一种提供我们能够自定义副作用逻辑的方式</div>
        <div className="text-16 font-500 mb-16">useEffect接受两个参数，第一个参数是一个函数，第二个参数是一个数组，第二个参数是可选的，每一次DOM渲染完成，react会check useEffect的依赖数组是否有变化，有变化就会调用useEffect函数</div>
        <ul>
            <li className='text-brand'>🍇 数据请求</li>
            <li className='text-brand'>🍇 事件注册</li>
        </ul>
        <div className="mt-16 text-18 font-500 mb-16">第一件事：我们来研究一下useEffect的第二个参数：依赖数组</div>
        <div className='effect-image01 mb-16'/>
        <span className="text-brand mr-16">count: {count}</span>
        <Button className="mr-16" onClick={addCount}>add count</Button>
        <span className="text-brand mr-16">other count: {otherCount}</span>
        <Button className="mr-16" onClick={addOtherCount}>add other count</Button>
        <Button onClick={handleShowConclusion}>结论</Button>
        {
            showConclusion && (
                <>
                    <div className="text-16 mb-16 mt-16 text-brand">没有依赖的useEffect, 组件函数每一次执行，都会执行useEffect里的函数</div>
                    <div className="text-16 mb-16 text-brand">依赖为空数组，只有当组件函数第一次执行才会执行useEffect里的函数</div>
                    <div className="text-16 mb-16 text-brand">依赖不为空数组，只有当组件函数每一次执行时，检查到useEffect依赖的数组中有值变化了，才会执行useEffect里的函数</div>
                </>
            )
        }
    </div>
  );
}

export default EffectDemo1;
