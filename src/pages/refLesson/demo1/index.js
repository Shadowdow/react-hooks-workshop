import React, { useState, useEffect, useRef } from 'react';

import './index.css';
import {Button, Input} from "antd";
import { SmileOutlined } from '@ant-design/icons';

function RefDemo1() {
   return (
    <div>
        <div className='text-18 font-500 mb-16'>useRef</div>
        <div className='image-01'/>
        <div className='text-16 mb-16'>useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。</div>
        <div className='text-16 mb-16'>useRef和useState有相似之处，就是可以跨渲染周期存储数据，不一样的是，ref的修改是不会引起组件渲染的。 如果一个值我们希望会影响DOM的渲染结果，那么我们用state，而这个值不影响DOM的渲染结果，则我们可以考虑使用useRef。 获取组件实例对象或者是DOM对象</div>
        <div className='text-16 mb-16'>一般使用useRef有两个场景：</div>
        <ul className='text-brand'>
            <li className='mb-16'>
                <div className='flex items-center mb-16'><SmileOutlined className="mr-8"/>访问DOM节点，或者React元素</div>
                <DomRef/>
            </li>
            <li className='mb-16'>
                <div className='flex items-center mb-16'><SmileOutlined className="mr-8"/>保持可变变量</div>
                <Counter/>
            </li>
        </ul>
    </div>
  );
}

export default RefDemo1;


function usePrevious(value){
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}

const Counter = () => {
    const [count, setCount] = useState(0)
    const preCount = usePrevious(count)
    useEffect(() => {
        setTimeout(() => setCount(10), 1000)
    })
    return <h1> Now: {count}, before: {preCount}</h1>
}

const DomRef = () => {
    const inputRef = useRef();

    return (
        <div>
            <Input className="mb-16" ref={inputRef} value='1234'/>
            <Button
                className="mr-16"
                onClick={() => {
                    inputRef.current.focus({
                        cursor: 'start',
                    });
                }}
            >
                Focus at first
            </Button>
            <Button
                onClick={() => {
                    inputRef.current.focus({
                        cursor: 'end',
                    });
                }}
            >
                Focus at last
            </Button>
        </div>
    )
}
