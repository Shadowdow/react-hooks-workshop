import {useCallback, useState} from "react";
import {Button} from "antd";
import './index.css'

function StateDemo4() {
    const [count, countSet] = useState(0);

    const addCount = useCallback(()=> {
        countSet(count +1)
    }, [count]);

    return (
        <div>
            <div className="text-18 font-500 mb-16">惰性初值</div>
            <div className="text-16 font-500 mb-16">惰性初值其实就是useState可以接受一个函数，此函数只在初始渲染时被调用</div>
            <div className='state-image06 mb-16'/>
            <Button className="mb-16" onClick={addCount}>add count</Button>
            <ChildA/>
            <ChildB/>
        </div>
    );
}

export default StateDemo4;

function ChildA() {
    console.log('我又被计算了一次...A')
    const initial = 100 * 2 / 3 * 9 - 3 - 6 - 0 - 1 * 9 * 100 * 1999 * 1029 * 267;
    const [number] = useState(initial);

    return (
        <div className="mb-16">A: {number}</div>
    );
}

function ChildB() {
    const [number] = useState(()=> {
        console.log('惰性初值，我只会被计算一次哦～～～B');
        return 100 * 2 / 3 * 9 - 3 - 6 - 0 - 1 * 9 * 100 * 1999 * 1029 * 267
    });

    return (
        <div>B: {number}</div>
    );
}

