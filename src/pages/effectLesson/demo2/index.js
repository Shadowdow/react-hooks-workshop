import {useCallback, useEffect, useState} from "react";
import {Button} from "antd";
import './index.css';

function EffectDemo2() {
    const [showConclusion, showConclusionSet] =  useState(false);
    const [count, countSet] =  useState(0);
    const [otherCount, otherCountSet] =  useState(0);

    useEffect(()=> {
        return ()=> {
            console.log('依赖: 无');
        }
    })

    useEffect(()=> {
        return ()=> {
            console.log('依赖: 空数组');
        }
    }, [])

    useEffect(()=> {
        return ()=> {
            console.log('依赖: count 清除');
        }
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
        <div className="text-18 font-500 mb-16">useEffect Cleanup</div>
        <div className="text-16 font-500 mb-16">有些useEffects是不需要清除的，而有些是需要清除的，比如事件绑定</div>
        <div className="text-16 font-500 mb-16">不同的依赖数组对清除函数的影响？</div>
        <div className='effect-deps mb-16'/>
        <span className="text-brand mr-16">{count}</span>
        <Button className="mr-16" onClick={addCount}>add count</Button>
        <span className="text-brand mr-16">other count: {otherCount}</span>
        <Button className="mr-16" onClick={addOtherCount}>add other count</Button>
        <Button onClick={handleShowConclusion}>结论</Button>
        {
            showConclusion && (
                <>
                    <div className="text-16 mb-16 mt-16 text-brand">没有依赖的useEffect, 组件每次渲染完成后，都会执行useEffect清除函数</div>
                    <div className="text-16 mb-16 text-brand">依赖为空数组，组件重渲染并不执行useEffect清除函数</div>
                    <div className="text-16 mb-16 text-brand">依赖不为空数组，当组件重渲染后，检查到useEffect依赖的数组中有值变化了，才会执行useEffect清除函数</div>
                    <div className="text-16 mb-16 text-brand">组件销毁时，也会执行清除函数</div>
                </>
            )
        }
        <div className="text-16 font-500 mb-16">那么这个清除函数是什么时候执行的呢？</div>
    </div>
  );
}

export default EffectDemo2;
