import React, {useCallback, useContext, useState} from 'react';
import {Button} from "antd";

import '../index.css';

// 第一步：我们需要创建一个Context对象，并赋初值
const CountContext = React.createContext(0);

function Parent() {
    const [count, countSet] = useState(0);

    const addCount = useCallback(()=> {
        countSet((pre)=> pre + 1)
    }, []);

    return (
        // 第二步：通过CountContext的Provider，通过value将值传给我们新建出来的Context对象
        <CountContext.Provider value={count}>
            <div className="mb-16 bg-black-15 p-16 inline-block mr-32">
                <div className="mb-16">
                    <div className="text-16 mb-16 text-brand">useContext传递</div>
                    <div className='mb-16'>Parent <span className='text-brand'>{count}</span></div>
                    <Button onClick={addCount}>add count +</Button>
                </div>
                <ChildA />
            </div>
        </CountContext.Provider>

    );
}

export default Parent;

function ChildA() {
    return (
        <div className="mb-16 w-200 h-200 bg-black-15 p-16">
            <span className='mb-16'>ChildA</span>
            <ChildB />
        </div>
    );
}

function ChildB() {
    // 第三步：找到需要使用count的组件，通过useContext将CountContext对象的值取出来
    const count = useContext(CountContext);

    return (
        // 第四步：应用count
        <div className="mb-16 w-120 bg-black-15 p-16">Child B <span className="text-brand">{count}</span></div>
    );
}

