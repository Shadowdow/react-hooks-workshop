import React, {useCallback, useContext, useState} from 'react';
import {Button} from "antd";

import '../index.css';

// 第一步：我们需要创建一个Context对象，并赋初值（React.createContext）
// 第二步：通过CountContext的Provider，通过value将值传给我们新建出来的Context对象（Context.Provider）
// 第三步：找到需要使用count的组件，通过useContext将CountContext对象的值取出来（useContext）
// 第四步：应用值（count）

function Parent() {
    const [count, countSet] = useState(0);

    const addCount = useCallback(()=> {
        countSet((pre)=> pre + 1)
    }, []);

    return (
        <div className="mb-16 bg-black-15 p-16 inline-block mr-32">
            <div className="mb-16">
                <div className="text-16 mb-16 text-brand">练习：useContext传递</div>
                <div className='mb-16'>Parent <span className='text-brand'>{count}</span></div>
                <Button onClick={addCount}>add count +</Button>
            </div>
            <ChildA />
        </div>

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

function ChildB(props) {
    const {count} = props;

    return (
        <div className="mb-16 w-120 bg-black-15 p-16">Child B <span className="text-brand">{count}</span></div>
    );
}

